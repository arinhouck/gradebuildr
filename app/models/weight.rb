class Weight < ActiveRecord::Base
  belongs_to :course
  has_many :grades, dependent: :destroy

  def grade_score_total
    grades = self.grades
    sum = 0

    grades.each do |grade|
      sum += grade.score_total
    end

    sum
  end

end
