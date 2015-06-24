class Weight < ActiveRecord::Base
  belongs_to :course
  has_many :grades, dependent: :destroy
end
