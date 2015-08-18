class StudentSerializer < ActiveModel::Serializer
  embed :ids, include: false
  attributes :id, :email, :first_name, :last_name, :grade_points, :grade_units,
             :active_semester, :semester_credit_hours, :semester_gpa, :cumulative_gpa
  has_many :grades, include: false
  has_many :courses, include: false
end
