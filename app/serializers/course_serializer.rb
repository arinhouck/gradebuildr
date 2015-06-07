class CourseSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :subject, :number, :creditHours, :gradingScale, :user_id
  has_many :weights
  has_many :grades
end
