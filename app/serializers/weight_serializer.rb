class WeightSerializer < ActiveModel::Serializer
  attributes :id, :name, :percentage, :course_id
end
