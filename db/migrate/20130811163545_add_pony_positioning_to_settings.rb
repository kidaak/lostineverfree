class AddPonyPositioningToSettings < ActiveRecord::Migration
  def change
    add_column :settings, :pony_position_left, :string
    add_column :settings, :pony_position_top, :string
    add_column :settings, :pony_width, :string
  end
end
