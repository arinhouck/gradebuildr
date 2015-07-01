class Request < ActiveRecord::Base
  belongs_to :director, class_name: 'User'
  belongs_to :student, class_name: 'User'

  validates :director_id, presence: true
  validates :student_id, presence: true
  validates_uniqueness_of :director_id, :scope => [:student_id]
  validate :check_director_and_student

  def self.accept(director, student)
    accept_one_side(director, student)
  end

  def self.accept_one_side(director, student)
    request = find_by_director_id_and_student_id(director, student)
    request.accepted = true
    request.save!
  end

  private

  def check_director_and_student
    errors.add(:student, "can't be the same as director") if director == student
  end

end
