class Mlp.Views.Hat extends Backbone.View
  template: JST['shopping/hat']
  tagName: 'li'
  className: 'clothing-list-item'

  initialize: ->
    @model.on('change', @render, this)

  render: =>
    console.log("rendering hat...")
    debugger
    console.log(@model)
    $(@el).html(@template(hat: @model))
    this