FactoryGirl.define do 
  factory :setting do
    name "Canterlot Sunset"
    img_url "/assets/canterlot_sunset.jpg"
    in_everfree false
  end

  factory :everfree_setting, class: Setting do
    name "Everfree Mirror Pool"
    img_url "/assets/everfree_mirror_pond.png"
    in_everfree true
  end
end

