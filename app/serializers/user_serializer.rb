class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :email, :name, :grade_points, :grade_units, :active_semester, :student_ids, :director_ids, :is_director
  has_many :requests
  has_many :received_requests
  has_many :courses
  has_many :grades
end
