class CreatePonies < ActiveRecord::Migration
  def change
    create_table :ponies do |t|
      t.string :name
      t.boolean :beautymarks

      t.timestamps
    end
  end
end
