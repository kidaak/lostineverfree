class AddOutgoingToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :outgoing, :boolean
  end
end
