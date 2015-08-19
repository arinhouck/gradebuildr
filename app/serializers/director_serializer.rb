class DirectorSerializer < ActiveModel::Serializer
  attributes :id, :organization, :email, :group_code
end
