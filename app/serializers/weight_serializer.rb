class WeightSerializer < ActiveModel::Serializer
  attributes :id, :name, :percentage, :course_id
  # has_one :course
end
