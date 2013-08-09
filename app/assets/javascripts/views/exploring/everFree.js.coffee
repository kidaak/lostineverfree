class Mlp.Views.everFree extends Backbone.View
  template: JST['exploring/everFree']

  initialize: ->
    console.log("Everfree #{@collection}")
    @collection.getEverfree

  render: ->
    $(@el).html(@template())
    this