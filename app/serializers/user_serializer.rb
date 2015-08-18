class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :email, :first_name, :last_name, :organization, :account_type,
   :is_student, :is_organization, :grade_points, :grade_units, :active_semester,
   :active_until, :subscription, :canceled_subscription, :unconfirmed_email,
   :semester_gpa, :cumulative_gpa
  has_many :students, :serializer => StudentSerializer
  has_many :directors, :serializer => DirectorSerializer
  has_many :courses, include: false
  has_many :grades, include: false
  has_many :group_memberships
end
