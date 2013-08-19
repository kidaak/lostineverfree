class Mlp.Views.ClothingItemOn extends Backbone.View
  template: JST['shopping/outfit_item']
  className: 'clothing-item-on'

  render: =>
    console.log("rendering hat...")
    $(@el).html(@template(clothing: @model))
    this