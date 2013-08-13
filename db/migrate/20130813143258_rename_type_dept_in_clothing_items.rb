class RenameTypeDeptInClothingItems < ActiveRecord::Migration
  def change
    rename_column :clothing_items, :type, :dept
  end
end
