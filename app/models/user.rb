class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :profile, dependent: :destroy
  has_many :photos, dependent: :destroy
  has_many :likes, dependent: :destroy

  def prepare_profile
    profile || build_profile
  end

  def has_liked?(photo)
    likes.exists?(photo_id: photo.id)
  end
end
