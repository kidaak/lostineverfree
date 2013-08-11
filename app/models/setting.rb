class Setting < ActiveRecord::Base
  attr_accessible :name, :img_url, :in_everfree, :north, :south, :east, :west, :pony_position_left, :pony_position_top, :pony_width
end