class AddWeightToGrades < ActiveRecord::Migration
  def change
    add_reference :grades, :weight, index: true
    add_foreign_key :grades, :weights
  end
end
