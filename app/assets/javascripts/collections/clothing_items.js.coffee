class Mlp.Collections.ClothingItems extends Backbone.Collection
  url: '/api/clothing_items'
  model: Mlp.Models.ClothingItem

  shoes: =>
    console.log(this)
    this.where dept: "shoes"

  hats: =>
    this.where dept: "hats"

  skirts: =>
    this.where dept: "skirts"

  eyewear: =>
    this.where dept: "eyewear"

  agnostic_filter: (dept_name) =>
    this.where dept: dept_name

  selected: =>
    selected = this.where selected: true
    selected[0]

  selected_array: =>
    selected = this.where selected: true

  changeHat: (hat_id) ->
    console.log("ok now i'm really changing hats...hat: #{hat_id}")
    previous_clothes = this.selected_array()
    for clothing_item in previous_clothes
      if clothing_item.get('dept') == "hats"
        console.log("I found a hat!")
        clothing_item.deselect()
      console.log(clothing_item)
    new_hat = (this.models.filter (x) -> x.get('id') == parseInt(hat_id))[0]
    console.log(new_hat)
    console.log("the new hat is: #{new_hat.get('id')}")
    new_hat.select()
    console.log("selected hats: #{this.selected_array()}")
    Mlp.vent.trigger('changeHat:finished')

  changeShoes: (shoes_id) ->
    console.log("ok now i'm really changing shoes...")
    previous_clothes = this.selected_array()
    for clothing_item in previous_clothes
      if clothing_item.get('dept') == "shoes"
        console.log("I found shoes!")
        clothing_item.deselect()
        console.log(clothing_item)
    new_shoes = (this.models.filter (x) -> x.get('id') == parseInt(shoes_id))[0]
    console.log("the new shoes are: #{new_shoes.get('id')}")
    new_shoes.select()
    Mlp.vent.trigger('changeShoes:finished')

  changeSkirts: (skirt_id) ->
    console.log("ok now i'm really changing skirt...")
    previous_clothes = this.selected_array()
    for clothing_item in previous_clothes
      if clothing_item.get('dept') == "skirts"
        console.log("I found a skirt!")
        clothing_item.deselect()
        console.log(clothing_item)
    new_skirt = (this.models.filter (x) -> x.get('id') == parseInt(skirt_id))[0]
    console.log("the new skirt are: #{new_skirt.get('id')}")
    new_skirt.select()
    Mlp.vent.trigger('changeSkirts:finished')

  changeEyewear: (eyewear_id) ->
    console.log("ok now i'm really changing eyewear...")
    previous_clothes = this.selected_array()
    for clothing_item in previous_clothes
      if clothing_item.get('dept') == "eyewear"
        console.log("I found eyewear!")
        clothing_item.deselect()
        console.log(clothing_item)
    new_eyewear = (this.models.filter (x) -> x.get('id') == parseInt(eyewear_id))[0]
    console.log("the new eyewear are: #{new_eyewear.get('id')}")
    new_eyewear.select()
    Mlp.vent.trigger('changeEyewear:finished')
