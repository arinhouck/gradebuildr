class Weight < ActiveRecord::Base
  belongs_to :course
  belongs_to :user
  has_many :grades, dependent: :destroy
end
