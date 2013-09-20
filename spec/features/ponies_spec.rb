require 'spec_helper'

describe "ponies", type: :request, js: true do 
  let!(:pony) { FactoryGirl.create(:pony)}

  before do
    visit '/'
    print page.html
  end

  it 'displays the current ponies' do

    within 'span.last' do
      page.should have_content pony.name
    end

  end
  
end