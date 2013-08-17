class MessagesController < ApplicationController
  respond_to :html, :json

  def index
    respond_with Message.all 
  end

  def create
    debugger
    message = Message.create(params)
    WriteToChat.push_message(params["message"]["content"])
  end

  def destroy
    respond_with Message.destroy(params[:id])
  end
end