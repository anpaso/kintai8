class CreateAs < ActiveRecord::Migration[5.2]
  def change
    create_table :as do |t|
            t.string :selection
            t.time :start_time
            t.time :end_time
            t.time :break
            t.string :description
            t.timestamps
    end
  end
end
