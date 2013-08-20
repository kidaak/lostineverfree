class AddSpeakerToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :speaker, :string
  end
end
