class MessagesController < ApplicationController
  respond_to :html, :json

  def index
    respond_with Message.all 
  end

  def create
    if params[:message]
      message = Message.new(params[:message])
      message.heroine = params[:heroine]
      message.outgoing = true
      debugger
      message.save()
    else
      debugger
      message = Message.create_from_text(params)
    end
    WriteToChat.push_message(message.content, message.heroine, message.outgoing)
    respond_with message
  end

  def update
    respond_with Message.update(params[:id], params[:setting])
  end


  def destroy
    respond_with Message.destroy(params[:id])
  end
end