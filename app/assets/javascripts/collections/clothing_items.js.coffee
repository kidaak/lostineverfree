class Mlp.Collections.ClothingItems extends Backbone.Collection
  url: '/api/clothing_items'
  model: Mlp.Models.ClothingItem

  shoes: =>
    console.log(this)
    this.where dept: "shoes"

  hats: =>
    this.where dept: "hats"

  agnostic_filter: (dept_name) =>
    this.where dept: dept_name

  selected: =>
    selected = this.where selected: true
    selected[0]

  selected_array: =>
    selected = this.where selected: true

  changeHat: (hat_id) ->
    console.log("ok now i'm really changing hats...")
    console.log(this)
    console.log(hat_id)
    previous_clothes = this.selected_array()
    for clothing_item in previous_clothes
      if clothing_item.get('dept') == "hats"
        console.log("I found a hat!")
        console.log(this.selected())
        clothing_item.deselect()
      console.log(clothing_item)
    new_hat = this.models[parseInt(hat_id) - 1]
    console.log(new_hat)
    new_hat.select()
    Mlp.vent.trigger('changeHat:finished')

  changeShoes: (shoes_id) ->
    console.log("ok now i'm really changing shoes...")
    console.log(this)
    console.log(shoes_id)
    previous_clothes = this.selected_array()
    for clothing_item in previous_clothes
      if clothing_item.get('dept') == "shoes"
        console.log("I found shoes!")
        console.log(this.selected())
        clothing_item.deselect()
        console.log(clothing_item)
    new_shoes = this.models[parseInt(shoes_id) - 1]
    console.log(new_shoes)
    new_shoes.select()
    Mlp.vent.trigger('changeShoes:finished')
