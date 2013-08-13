class ClothingItem < ActiveRecord::Base
  attr_accessible :type, :name, :img_url
  
  has_many :pony_clothing_items
  has_may :ponies, :through => :pony_clothing_items
end