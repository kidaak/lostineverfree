class MessagesController < ApplicationController
  respond_to :html, :json

  def new
  respond_with Message.new
  end

  def index
    respond_with Message.all 
  end

  def show
    respond_with Message.find(params[:id])
  end

  def create
    debugger
    @message = Message.create!(params[:message])
  end

  def update
    respond_with ClothingItem.update(params[:id], params[:pony])
  end

  def destroy
    respond_with ClothingItem.destroy(params[:id])
  end
end