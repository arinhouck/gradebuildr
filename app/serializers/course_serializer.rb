class CourseSerializer < ActiveModel::Serializer
  embed :ids, include: false

  attributes :id, :subject, :number, :credit_hours, :grading_scale
  #has_one :user
  has_many :weights
  has_many :grades
end
