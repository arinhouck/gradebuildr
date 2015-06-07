class GradeSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name, :score, :score_total, :user_id, :course_id, :weight_id
end
