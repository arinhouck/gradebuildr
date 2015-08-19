class CourseSerializer < ActiveModel::Serializer
  attributes :id, :subject, :number, :credit_hours, :grading_scale, :user_id, :created_at, :semester,
             :letter_grade, :score, :current_grade
  has_many :weights, embed_in_root: false
  has_many :grades, embed_in_root: false
end
