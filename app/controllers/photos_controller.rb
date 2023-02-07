class PhotosController < ApplicationController
  before_action :authenticate_user!, only: %i[new create edit update destroy]

  def index
    @photos = Photo.all
  end

  def new
    @photo = current_user.photos.build
  end

  def create
    @photo = current_user.photos.build(photo_params)
    if @photo.save
      redirect_to photo_path(@photo), notice: '保存できたよ'
    else
      flash.now[:error] = '保存に失敗しました'
      render :new
    end
  end

  def edit
    @photo = current_user.photos.find(params[:id])
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update(photo_params)
      redirect_to photo_path(@photo), notice: '更新できました'
    else
      flash.now[:error] = '更新できませんでした'
      render :edit
    end
  end

  def destroy
    photo = current_user.photos.find(params[:id])
    photo.destroy!
    redirect_to root_path, notice: '記事が削除されました'
  end

  private

  def photo_params
    params.require(:photo).permit(:content, :image)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
