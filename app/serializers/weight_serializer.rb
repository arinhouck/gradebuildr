class WeightSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :percentage, :course_id
  # has_one :course
end
