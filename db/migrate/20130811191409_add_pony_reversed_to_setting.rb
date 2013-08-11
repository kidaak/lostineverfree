class AddPonyReversedToSetting < ActiveRecord::Migration
  def change
    add_column :settings, :pony_reversed, :boolean
  end
end
