class Mlp.Views.Hats extends Backbone.View
  template: JST['shopping/hats_index']
  className: 'column span-4'

  initialize: ->
    this.on('change', @render, this)
    this.on('reset', @render, this)
    this.on('add', @appendHat, this)
    this.on('render', @positionHats, this)

  render: =>
    console.log("rendering a hat...")
    $(@el).html(@template())
    for hat in @collection
      @appendHat(hat)
    this

  appendHat: (hat) ->
    hat_view = new Mlp.Views.Hat(model: hat, id: "hat-#{hat.get('id')}")
    @$('#hats').append(hat_view.render().el)

  positionHats: ->
    for hat in @collection
      $("#hat-#{hat.get('id')}").css("top", "#{hat.get('id')*40}px")
    this