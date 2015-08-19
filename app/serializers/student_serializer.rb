class StudentSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :grade_points, :grade_units,
             :active_semester, :semester_credit_hours, :semester_gpa, :cumulative_gpa,
             :grade_count, :course_count
  has_many :grades, embed_in_root: false
  has_many :courses, embed_in_root: false
end
