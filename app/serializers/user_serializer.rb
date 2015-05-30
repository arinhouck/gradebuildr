class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :gradePoints, :gradeUnits
  has_many :courses
end
