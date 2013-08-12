class AddCameoPositioningToSettings < ActiveRecord::Migration
  def change
    add_column :settings, :cameo_reversed, :boolean
    add_column :settings, :cameo_position_left, :string
    add_column :settings, :cameo_position_top, :string
    add_column :settings, :cameo_width, :string
  end
end
