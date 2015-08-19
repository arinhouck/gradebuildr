class Course < ActiveRecord::Base
  belongs_to :user
  has_many :weights, dependent: :destroy
  has_many :grades, dependent: :destroy

  def current_grade
    weights = self.weights
    grades = self.grades
    grade_points = []
    grade_points_total = []
    weighted_grades = []

    weights.each_with_index do |weight, i|
      grade_points[i] = 0
      grade_points_total[i] = 0

      grades_by_weight = grades.select { |grade| grade.weight.name == weight.name }
      grades_by_weight.each do |grade|
        grade_points[i] += grade.score
        grade_points_total[i] += grade.score_total
      end

      if grade_points_total[i] == 0
        weighted_grades[i] = 1 * weight.percentage
      else
        weighted_grades[i] = (grade_points[i] / grade_points_total[i]) * weight.percentage
      end
    end

    unless weighted_grades.any?
      return 100
    else
     return weighted_grades.reduce(:+).round(2) # TODO: Round or fixed?
    end

  end

  def letter_grade
    current_grade = self.current_grade
    minus = grading_scale.include? 'Minus'
    plus = grading_scale.include? 'Plus'

    case
    when current_grade >= 97 && plus
      'A+'
    when current_grade >= 90 && current_grade < 93 && minus
      'A-'
    when current_grade >= 90
      'A'
    when current_grade >= 87 && plus
      'B+'
    when current_grade >= 80 && current_grade < 83 && minus
      'B-'
    when current_grade >= 80
      'B'
    when current_grade >= 77 && plus
      'C+'
    when current_grade >= 70 && current_grade < 73 && minus
      'C-'
    when current_grade >= 70
      'C'
    when current_grade >= 67 && plus
      'D+'
    when current_grade >= 60 && current_grade < 63 && minus
      'D-'
    when current_grade >= 60
      'D'
    else
      'F'
    end
  end

  def score
    letter_grade = self.letter_grade
    case letter_grade
    when 'A+'
      4.333
    when 'A'
      4
    when 'A-'
      3.667
    when 'B+'
      3.333
    when 'B'
      3
    when 'B-'
      2.667
    when 'C+'
      2.333
    when 'C'
      2
    when 'C-'
      1.667
    when 'D+'
      1.333
    when 'D'
      1
    when 'D-'
      0.667
    when 'F'
      0
    end
  end
end
