class CreateWeights < ActiveRecord::Migration
  def change
    create_table :weights do |t|
      t.string :name
      t.integer :percentage
      t.references :course, index: true

      t.timestamps null: false
    end
    add_foreign_key :weights, :courses
  end
end
