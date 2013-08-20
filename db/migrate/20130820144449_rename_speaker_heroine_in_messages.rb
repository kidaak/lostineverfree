class RenameSpeakerHeroineInMessages < ActiveRecord::Migration
  def change
    rename_column :messages, :speaker, :heroine
  end
end
