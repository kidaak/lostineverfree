class Mlp.Views.Heroine extends Backbone.View
  template: JST['exploring/heroine']
  id: "heroine"

  initialize: ->
    console.log("initialize heroine")
    console.log(@model)

  render: ->
    $(@el).html(@template(pony: this.model))
    this