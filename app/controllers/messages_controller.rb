class MessagesController < ApplicationController
  respond_to :html, :json

  def index
    respond_with Message.all 
  end

  def create
    respond_with Message.create(params[:message])
  end

  def destroy
    respond_with Message.destroy(params[:id])
  end
end