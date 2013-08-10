class AddInEverfreeToSettings < ActiveRecord::Migration
  def change
    add_column :settings, :in_everfree, :boolean
  end
end
