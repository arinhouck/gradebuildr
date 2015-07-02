class User < ActiveRecord::Base
  before_save :set_auth_token

  # validates :password, presence: true, length: {minimum: 5, maximum: 120}, on: :create
  # validates :password, length: {minimum: 5, maximum: 120}, on: :update, allow_blank: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :name, presence: true

  has_many :courses, dependent: :destroy
  has_many :grades, dependent: :destroy

  has_many :requests, foreign_key: :director_id, dependent: :destroy
  has_many :received_requests, foreign_key: :student_id, class_name: 'Request', dependent: :destroy
  has_many :directors, through: :received_requests, source: :director
  has_many :students, -> { where  "requests.accepted = true" }, through: :requests, source: :student


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
