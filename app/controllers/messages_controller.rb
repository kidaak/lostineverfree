class MessagesController < ApplicationController
  respond_to :html, :json

  def index
    respond_with Message.all 
  end

  def create
    if params[:message]
      message = Message.create(params[:message])
      message.heroine = params[:heroine]
      message.outgoing = true
      message.save()
      Texter.send_with_twilio(message.heroine, message.content)
    else
      message = Message.create_from_text(params)
    end
    WriteToChat.push_message(message.content, message.heroine, message.outgoing)
    respond_with Message.create(params[:message])
  end


  def destroy
    respond_with Message.destroy(params[:id])
  end
end