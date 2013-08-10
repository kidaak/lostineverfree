class Mlp.Views.EverFree extends Backbone.View
  template: JST['exploring/everfree']
  className: 'everfree-scene'

  initialize: ->
    @everfree = @collection.where in_everfree: true
    console.log("Everfree #{@everfree[0].get('name')}")
    

  render: ->
    $(@el).html(@template(scene: @everfree[0]))
    this