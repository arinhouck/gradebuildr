class GradeSerializer < ActiveModel::Serializer
  embed :id, include: true
  attributes :id, :name, :score, :score_total, :user_id, :course_id, :weight_id, :created_at
  # has_one :user
  # has_one :course
  # has_one :weight
end
