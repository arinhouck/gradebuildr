    class CourseSerializer < ActiveModel::Serializer
      embed :ids, include: true

      attributes :id, :subject, :number, :credit_hours, :grading_scale, :user_id, :created_at
      #has_one :user
      has_many :weights
      has_many :grades
    end
