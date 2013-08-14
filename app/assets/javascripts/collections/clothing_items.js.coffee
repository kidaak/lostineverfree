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
    previous_hat = this.selected()
    if previous_hat && previous_hat.get('dept') == "hats"
      console.log("I found a hat!")
      console.log(this.selected())
      previous_hat.deselect()
      console.log(previous_hat)
    new_hat = this.models[hat_id]
    console.log(new_hat)
    new_hat.select()
    Mlp.vent.trigger('changeHat:finished')

  changeShoes: (shoes_id) ->
    console.log("ok now i'm really changing shoes...")
    console.log(this)
    console.log(shoes_id)
    previous_shoes = this.selected()
    if previous_shoes && previous_shoes.get('dept') == "shoes"
      console.log("I found shoes!")
      console.log(this.selected())
      previous_shoes.deselect()
      console.log(previous_shoes)
    new_shoes = this.models[shoes_id]
    console.log(new_shoes)
    new_shoes.select()
    Mlp.vent.trigger('changeShoes:finished')
