class Setting < ActiveRecord::Base
  attr_accessible :name, :img_url, :in_everfree, :north, :south, :east, :west
end