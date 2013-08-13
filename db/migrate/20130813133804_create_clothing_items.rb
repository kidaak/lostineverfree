class CreateClothingItems < ActiveRecord::Migration
  def change
    create_table :clothing_items do |t|
      t.string :type
      t.string :name
      t.string :img_url

      t.timestamps
    end
  end
end
