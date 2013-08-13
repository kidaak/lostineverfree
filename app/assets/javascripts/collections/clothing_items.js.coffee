class Mlp.Collections.ClothingItems extends Backbone.Collection
  url: '/api/clothing_items'
  model: Mlp.Models.ClothingItem

  shoes: =>
    console.log(this)
    this.where dept: "shoes"

  hats: =>
    this.where dept: "hats"