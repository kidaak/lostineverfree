class Mlp.Views.EverFree extends Backbone.View
  template: JST['exploring/everfree']
  className: 'everfree-scene'

  events:
    'click .navigate': 'navigate'

  initialize: ->
    @collection.randomReset()
    @everfree = @collection.where in_everfree: true
    @current = @everfree[0].select()
    @collection.on('reset', @render, this)
    @collection.on('change', @render, this)

  navigate: (event) ->
    event.preventDefault()
    console.log(@current)
    console.log("is there an echo in here? no? damn straight")
    direction = event.currentTarget.innerHTML
    @collection.navigate(@current, direction)
  
  appendEverfreeScene: (setting) =>
    console.log("appending")
    console.log(setting)
    view = new Mlp.Views.EverfreeScene(model: setting)
    @$('#everfree-scene').append(view.render().el)

  render: ->
    console.log("rendering everfree")
    console.log(@collection)
    console.log(@everfree)
    $(@el).html(@template())
    @collection.each(@appendEverfreeScene)
    this
