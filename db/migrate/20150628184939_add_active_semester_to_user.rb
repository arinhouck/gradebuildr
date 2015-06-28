class AddActiveSemesterToUser < ActiveRecord::Migration
  def change
    add_column :users, :active_semester, :string
  end
end
