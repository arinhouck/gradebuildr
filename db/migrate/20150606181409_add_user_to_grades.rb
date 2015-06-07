class AddUserToGrades < ActiveRecord::Migration
  def change
    add_reference :grades, :user, index: true
    add_foreign_key :grades, :users
  end
end
