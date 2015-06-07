class CreateGrades < ActiveRecord::Migration
  def change
    create_table :grades do |t|
      t.string :name
      t.references :course, index: true
      t.float :score
      t.float :score_total

      t.timestamps null: false
    end
    add_foreign_key :grades, :courses
  end
end
