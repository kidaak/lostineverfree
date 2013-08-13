class Pony < ActiveRecord::Base
  attr_accessible :name, :img_url

  has_many :pony_clothing_items
  has_may :clothing_items, :through => :pony_clothing_items
end
