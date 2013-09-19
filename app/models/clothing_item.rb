class ClothingItem < ActiveRecord::Base
  attr_accessible :name, :img_url, :dept, :thumb_url
  
  has_many :pony_clothing_items
  has_many :ponies, :through => :pony_clothing_items
end