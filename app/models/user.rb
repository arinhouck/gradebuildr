class User < ActiveRecord::Base
  rolify
  before_save :set_auth_token

  # validates :password, presence: true, length: {minimum: 5, maximum: 120}, on: :create
  # validates :password, length: {minimum: 5, maximum: 120}, on: :update, allow_blank: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :name, presence: true
  validates :active_semester, presence: true

  has_many :courses, dependent: :destroy
  has_many :grades, dependent: :destroy

  has_many :requests, foreign_key: :director_id, dependent: :destroy
  has_many :received_requests, foreign_key: :student_id, class_name: 'Request', dependent: :destroy
  has_many :directors, -> { where  "requests.accepted = true" }, through: :received_requests, source: :director
  has_many :students, -> { where  "requests.accepted = true" }, through: :requests, source: :student

  def is_director
    self.has_role?(:director)
  end

  def save_customer(id)
    update_attribute :customer_id, id
  end

  def save_subscription(subscription)
    update_attribute :subscription, subscription
  end

  def update_canceled_subscription(value)
    update_attribute :canceled_subscription, value
  end

  def renew
    update_attribute :active_until, Date.today + 1.month
  end

  private
  def set_auth_token
    if self.authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end
end
