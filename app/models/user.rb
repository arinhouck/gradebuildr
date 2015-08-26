class User < ActiveRecord::Base
  rolify
  before_save :set_auth_token

  # validates :password, presence: true, length: {minimum: 5, maximum: 120}, on: :create
  # validates :password, length: {minimum: 5, maximum: 120}, on: :update, allow_blank: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :active_semester, presence: true
  validates :account_type, presence: true

  has_many :courses, dependent: :destroy
  has_many :grades, dependent: :destroy

  groupify :group_member
  groupify :named_group_member

  after_create :create_organization, if: :is_organization

  def create_organization
    group = Group.create
    group.add(self, as: 'director')
  end

  def group_code
    self.groups.first.code
  end

  def is_student
    self.account_type == 'student'
  end

  def directors
    User.shares_any_group(self).as(:director)
  end

  def students
    self.is_organization ? User.shares_any_group(self).as(:student) : []
  end

  def is_organization
    self.account_type == 'organization'
  end

  # TODO: Payed member boolean

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

  # Student Calculations

  def grade_count
    self.grades.count
  end

  def course_count
    self.courses.count
  end

  def active_courses
    self.courses.select { |course| course.semester == self.active_semester }
  end

  def inactive_courses
    self.courses.select { |course| course.semester != self.active_semester }
  end

  def semester_grade_points
    active_courses = self.active_courses
    result = 0

    active_courses.each do |course|
      result += course.score * course.credit_hours
    end

    result
  end

  def semester_credit_hours
    active_courses = self.active_courses
    result = 0

    active_courses.each do |course|
      result += course.credit_hours
    end

    result
  end

  def inactive_semester_grade_points
    inactive_courses = self.inactive_courses
    result = 0

    inactive_courses.each do |course|
      result += course.score * course.credit_hours
    end

    result
  end

  def inactive_semester_credit_hours
    inactive_courses = self.inactive_courses
    result = 0

    inactive_courses.each do |course|
      result += course.credit_hours
    end

    result
  end

  def semester_gpa
    return '—' if semester_credit_hours == 0
    return '%.2f' % [(self.semester_grade_points / semester_credit_hours).round(2)]
  end

  def cumulative_gpa
    self.grade_points = 0 if self.grade_points.nil?
    self.grade_units = 0 if self.grade_units.nil?
    total_points = self.grade_points + self.semester_grade_points + self.inactive_semester_grade_points
    total_units = self.grade_units + self.semester_credit_hours + self.inactive_semester_credit_hours
    return '—' if total_units == 0
    return '%.2f' % [(total_points / total_units).round(2)]
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
