class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :email, :name, :grade_points, :grade_units
  has_many :courses
  has_many :grades
end
