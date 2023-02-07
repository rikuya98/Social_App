class Photo < ApplicationRecord
  belongs_to :user
  has_many_attached :image
end
