class Mlp.Views.EverFree extends Backbone.View
  template: JST['exploring/everfree']
  className: 'everfree-scene'

  events:
    'click .navigate': 'navigate'

  initialize: ->
    @everfree = @collection.where in_everfree: true
    @current = @everfree[0]
    @current.on('change', @render, this)
    
  render: ->
    $(@el).html(@template(scene: @current))
    this

  navigate: (event) ->
    event.preventDefault()
    console.log(@current)
    direction = event.currentTarget.innerHTML
    @current = @collection.navigate(@current, direction)
