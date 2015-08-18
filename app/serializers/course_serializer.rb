class CourseSerializer < ActiveModel::Serializer
  embed :ids, include: false
  attributes :id, :subject, :number, :credit_hours, :grading_scale, :user_id, :created_at, :semester,
             :letter_grade, :score, :current_grade
  has_many :weights, include: false
  has_many :grades, include: false
end
