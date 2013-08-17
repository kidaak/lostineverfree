class MessagesController < ApplicationController
  respond_to :html, :json

  def index
    respond_with Message.all 
  end

  def create
    message = Message.create(params[:message])
    WriteToChat.push_message(message.content)
    respond_with Message.create(params[:message])
  end

  def destroy
    respond_with Message.destroy(params[:id])
  end
end