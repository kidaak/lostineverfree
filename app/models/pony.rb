class Pony < ActiveRecord::Base
  attr_accessible :name, :img_url

  has_many :pony_clothing_items
  has_many :clothing_items, :through => :pony_clothing_items

  def update_outfit(clothing_items)
    previous_outfit = PonyClothingItem.where :pony_id => self.id
    previous_outfit.each {|clothing_item| clothing_item.destroy}
    clothing_items.each do |clothing_item|
      PonyClothingItem.create(pony_id: self.id, clothing_item_id: clothing_item["id"])
    end
  end

  def self.names
    self.all.collect do |pony|
      pony.name
    end
  end
end
