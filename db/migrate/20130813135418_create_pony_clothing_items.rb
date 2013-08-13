class CreatePonyClothingItems < ActiveRecord::Migration
  def change
    create_table :pony_clothing_items do |t|
      t.integer :pony_id
      t.integer :clothing_item_id

      t.timestamps
    end
  end
end
