class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :grade_points, :grade_units, :active_semester, :student_ids, :director_ids
  # has_many :students, root: :users, embed: :ids, include: false
  # has_many :directors, root: :users, embed: :ids, include: false
  has_many :requests
  has_many :received_requests
  has_many :courses, embed: :ids, include: true
  has_many :grades, embed: :ids, include: true
end
