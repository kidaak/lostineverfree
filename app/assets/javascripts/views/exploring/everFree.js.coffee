class Mlp.Views.everFree extends Backbone.View
  template: JST['exploring/everFree']

  initialize: ->
    console.log(@collection)

  render: ->
    $(@el).html(@template())
    this