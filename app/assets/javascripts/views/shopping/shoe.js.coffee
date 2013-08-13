class Mlp.Views.Shoe extends Backbone.View
  template: JST['shopping/shoe']
  tagName: 'li'
  className: 'clothing-list-item'

  initialize: ->
    @model.on('change', @render, this)

  render: =>
    console.log("rendering shoe...")
    console.log(@model)
    $(@el).html(@template(shoe: @model))
    this