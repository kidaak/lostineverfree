class AddImgUrlToPony < ActiveRecord::Migration
  def change
  	add_column :ponies, :img_url, :string
  end
end
