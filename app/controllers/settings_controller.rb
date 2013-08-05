class SettingsController < ApplicationController
respond_to :html, :json

def new
  respond_with setting.new
end

def index
  respond_with setting.all 
end

def show
  respond_with setting.find(params[:id])
end

def create
  @setting = setting.create(params[:setting])
  respond_with @setting
end

def update
  respond_with setting.update(params[:id], params[:setting])
end

def destroy
  respond_with setting.destroy(params[:id])
end

end