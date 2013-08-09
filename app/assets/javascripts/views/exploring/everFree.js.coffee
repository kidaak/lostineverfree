class Mlp.Views.everFree extends Backbone.View
  template: JST['exploring/everFree']

  render: ->
    $(@el).html(@template())
    this