class MainController < ApplicationController
  def index
    respond_to :html, :json
    respond_with Message.all
  end

  def create
    @message = Message.create!(params[:message])
  end
end