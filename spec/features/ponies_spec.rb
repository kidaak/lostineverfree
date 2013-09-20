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
      page.should have_xpath("//img[@src=\"#{pony.img_url}\"]")
    end

  end

  it 'adds a pony to the list' do

    fill_in 'new_pony_name', :with => "Applejack"
    fill_in 'new_pony_img_url', :with => "http://fc03.deviantart.net/fs71/i/2012/218/0/0/applejack_leaning_by_vladimirmacholzraum-d53ne7e.png"
    click_on 'add-pony'

    within 'span.last' do
      page.should have_content "Applejack"
      page.should have_xpath("//img[@src=\"http://fc03.deviantart.net/fs71/i/2012/218/0/0/applejack_leaning_by_vladimirmacholzraum-d53ne7e.png\"]")
    end

  end
  
end