class CourseSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :subject, :number, :credit_hours, :grading_scale, :user_id
  #has_one :user
  has_many :weights
  has_many :grades
end
