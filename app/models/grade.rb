class Grade < ActiveRecord::Base
  belongs_to :user
  belongs_to :course
  belongs_to :weight
end
