class Mlp.Views.ClothingListItem extends Backbone.View
  template: JST['shopping/clothing']
  tagName: 'li'
  className: 'clothing-list-item'

  render: =>
    console.log("rendering a clothing item...")
    $(@el).html(@template(clothing: @model))
    this