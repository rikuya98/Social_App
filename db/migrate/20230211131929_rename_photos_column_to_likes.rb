class RenamePhotosColumnToLikes < ActiveRecord::Migration[6.0]

  def change
    rename_column :likes, :photos_id, :photo_id
  end
end
