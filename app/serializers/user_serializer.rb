class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :gradePoints, :gradeUnits
end
