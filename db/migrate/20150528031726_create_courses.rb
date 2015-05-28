class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :subject, null: false, default: ""
      t.string :number
      t.integer :creditHours
      t.string :gradingScale

      t.timestamps null: false
    end
  end
end
