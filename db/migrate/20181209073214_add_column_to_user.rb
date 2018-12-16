class AddColumnToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :as, :user_id, :integer
  end
end
