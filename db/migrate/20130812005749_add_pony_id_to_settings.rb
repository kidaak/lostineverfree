class AddPonyIdToSettings < ActiveRecord::Migration
  def change
    add_column :settings, :pony_id, :integer
  end
end
