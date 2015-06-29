class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :email, :body
end
