class GradeSerializer < ActiveModel::Serializer
  attributes :id, :name, :score, :score_total, :percentage, :user_id, :course_id, :weight_id, :created_at
end
