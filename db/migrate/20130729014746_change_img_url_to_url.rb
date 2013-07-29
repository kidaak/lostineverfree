class ChangeImgUrlToUrl < ActiveRecord::Migration
  def up
  	rename_column :ponies, :img_url, :url
  end

  def down
  	rename_column :ponies, :url, :img_url
  end
end
