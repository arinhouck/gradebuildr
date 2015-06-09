class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :subject, null: false, default: ""
      t.string :number
      t.integer :credit_hours
      t.string :grading_scale

      t.timestamps null: false
    end
  end
end
