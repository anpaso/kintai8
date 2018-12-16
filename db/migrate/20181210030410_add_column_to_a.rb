class AddColumnToA < ActiveRecord::Migration[5.2]
  def change
    add_column :as, :d_id, :integer
  end
end
