class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :director_id
      t.integer :student_id
      t.boolean :accepted, default: false

      t.timestamps null: false
    end
  end
end
