class Mlp.Views.Cameo extends Backbone.View
  template: JST['exploring/cameo']

  initialize: ->
    Mlp.vent.trigger('everfree:navigated', @removeView)
    Mlp.vent.on('everfree_scene:rendered', @render, this)
    console.log("initialize cameo")
    console.log(@collection)

  render: (pony_id) ->
    console.log("rendering cameo exp...")
    if pony_id
      @cameo = @collection.where id: pony_id
      console.log(@cameo[0])
      $('#cameo').html(@template(cameo: @cameo[0]))
      this

  removeView: ->
    this.remove()
    this.unbind()