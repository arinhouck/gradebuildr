class StudentSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :email, :first_name, :last_name, :grade_points, :grade_units, :active_semester
  has_many :grades
  has_many :courses
end
