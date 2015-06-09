class GradeSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :score, :score_total, :user_id, :course_id, :weight_id
  # has_one :user
  # has_one :course
  # has_one :weight
end
