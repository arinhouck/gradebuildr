class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :email, :name, :gradePoints, :gradeUnits
  has_many :courses
  has_many :grades
end
