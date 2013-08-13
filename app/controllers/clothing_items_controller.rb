class ClothingItemsController < ApplicationController
respond_to :html, :json

def new
  respond_with ClothingItem.new
end

def index
  respond_with ClothingItem.all 
end

def show
  respond_with ClothingItem.find(params[:id])
end

def create
  respond_with ClothingItem.create(params[:pony])
end

def update
  respond_with ClothingItem.update(params[:id], params[:pony])
end

def destroy
  respond_with ClothingItem.destroy(params[:id])
end

end
