class PonyClothingItem < ActiveRecord::Base
  attr_accessible :pony_id, :clothing_item_id

  belongs_to :pony
  belongs_to :clothing_item
end