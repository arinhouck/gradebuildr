class Grade < ActiveRecord::Base
  belongs_to :user
  belongs_to :course
  belongs_to :weight

  def percentage
    weight = self.weight
    weighted_sum = weight.grade_score_total
    percentage = (self.score / weighted_sum)*(weight.percentage)

    percentage.round(2)
  end

end
