class Mlp.Views.Hat extends Backbone.View
  template: JST['shopping/clothing']
  tagName: 'li'
  className: 'clothing-list-item'

  initialize: ->
    @model.on('change', @render, this)

  render: =>
    console.log("rendering hat...")
    console.log(@el)
    console.log(this)
    console.log(@model)
    $(@el).html(@template(clothing: @model))
    this