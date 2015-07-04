class AddCanceledSubscriptionToUser < ActiveRecord::Migration
  def change
    add_column :users, :canceled_subscription, :boolean
  end
end
