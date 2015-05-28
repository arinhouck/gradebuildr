class CourseSerializer < ActiveModel::Serializer
  attributes :id, :subject, :number, :creditHours, :gradingScale, :user_id
end
