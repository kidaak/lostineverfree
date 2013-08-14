class Mlp.Views.ClothingItemOn extends Backbone.View
  template: JST['shopping/clothing']
  className: 'clothing-item-on'

  render: =>
    console.log("rendering hat...")
    console.log(@el)
    console.log(this)
    console.log(@model)
    $(@el).html(@template(clothing: @model))
    this