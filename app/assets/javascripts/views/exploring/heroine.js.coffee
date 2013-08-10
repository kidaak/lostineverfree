class Mlp.Views.Heroine extends Backbone.View
  template: JST['exploring/heroine']

  events:
    'click #nemo': 'console'

  initialize: ->
    console.log("initialize heroine")
    console.log(@model)

  render: ->
    $(@el).html(@template(pony: this.model))
    this

  console: (event) ->
    event.preventDefault
    console.log("what it do?")