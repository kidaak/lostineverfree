class AddNorthSouthEastWestToSettings < ActiveRecord::Migration
  def change
    add_column :settings, :north, :integer
    add_column :settings, :south, :integer
    add_column :settings, :east, :integer
    add_column :settings, :west, :integer
  end
end
