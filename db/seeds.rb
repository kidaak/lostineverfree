# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Pony.create!(name: "Queen Chrysalis", img_url: "http://fc06.deviantart.net/fs71/i/2012/316/d/7/queen_chrysalis_by_proenix-d5ksgw5.png")
Pony.create!(name: "Twilight Sparkle", img_url: "http://www.hasbro.com/mylittlepony/images/carousel/twilight-sparkle-slide.png")
Pony.create!(name: "Pinkie Pie", img_url: "http://www.hasbro.com/mylittlepony/images/carousel/pinkypie-slide.png")
Pony.create!(name: "Fluttershy", img_url: "http://www.hasbro.com/mylittlepony/images/carousel/fluttershy-slide.png")
Pony.create!(name: "Rarity", img_url: "http://www.hasbro.com/mylittlepony/images/carousel/rarity-slide.png")
Pony.create!(name: "Applejack", img_url: "http://www.hasbro.com/mylittlepony/images/carousel/applejack-slide.png")
Pony.create!(name: "Rainbow Dash", img_url: "http://www.hasbro.com/mylittlepony/images/carousel/rainbowdash-slide.png")
Pony.create!(name: "Princess Celestia", img_url: "http://www.hasbro.com/mylittlepony/images/carousel/princesscelestia-slide.png")


Setting.create!(in_everfree: false, name: "Canterlot Sunset", img_url:"http://fc05.deviantart.net/fs70/i/2011/109/9/1/canterlot_sunset___wallpaper_by_crappyunicorn-d3ece2n.jpg")
Setting.create!(in_everfree: false, name: "Canterlot Midday", img_url:"http://images3.wikia.nocookie.net/__cb20120612084332/mlp/pl/images/6/66/Canterlot.png")
Setting.create!(in_everfree: false, name: "Canterlot Winter", img_url:"http://images1.wikia.nocookie.net/__cb20111219011851/mlp/images/9/98/Canterlot_Entrance_S2E11.png")
Setting.create!(in_everfree: false, name: "Canterlot Street By Night", img_url:"http://fc00.deviantart.net/fs71/i/2012/166/e/7/ye_olde_canterlot_by_spiritto-d53lwox.png")
Setting.create!(in_everfree: false, name: "Canterlot Street By Day", img_url:"http://images3.wikia.nocookie.net/__cb20121212070759/mlp/images/e/e0/A_Canterlot_street_S2E9.png")
Setting.create!(in_everfree: true, north: 9, south: nil, east: 7, west: nil, name: "Everfree Mirror Pool", img_url:"http://images2.wikia.nocookie.net/__cb20121117175606/mlp/images/7/70/Pinkie_sees_the_Mirror_Pool_S3E03.png")
Setting.create!(in_everfree: true, north: 8, south: nil, east: nil, west: 6, name: "Everfree Entrance All Together", img_url:"http://images1.wikia.nocookie.net/__cb20120617213326/mlp/images/2/2c/Entrance_to_the_Everfree_Forest_S1E02.png")
Setting.create!(in_everfree: true, north: nil, south: 7, east: nil, west: 9, name: "Everfree Clearing By Night", img_url:"http://th08.deviantart.net/fs70/PRE/i/2012/179/a/9/nightmare_night_in_the_everfree_forest_by_hellswolfeh-d555w4a.png")
Setting.create!(in_everfree: true, north: nil, south: 6, east: 8, west: nil, name: "Everfree Bridge", img_url:"http://www.fimfiction-static.net/images/story_images/22445.png")



