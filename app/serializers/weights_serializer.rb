class WeightsSerializer < ActiveModel::Serializer
  attributes :id, :name, :percentage
  belongs_to :course
end
