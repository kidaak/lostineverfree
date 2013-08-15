class AddThumbsToClothingItems < ActiveRecord::Migration
  def change
    add_column :clothing_items, :thumb_url, :string
  end
end
