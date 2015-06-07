class Course < ActiveRecord::Base
  belongs_to :user
  has_many :weights, dependent: :destroy
  has_many :grades, dependent: :destroy
end
