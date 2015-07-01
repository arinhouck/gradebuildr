class RequestSerializer < ActiveModel::Serializer
  embed :id, include: true
  attributes :id, :director_id, :student_id, :accepted
end
