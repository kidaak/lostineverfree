class Mlp.Views.Pony extends Backbone.View

  template: JST['ponies/pony']
  tagName: 'li'

  events:
    'click': 'showPony'

  initialize: ->
    @model.on('change', @render, this)
    @model.on('select', @selectPony, this)

  showPony: ->
    Backbone.history.navigate("ponies/#{@model.get('id')}", true)

  selectPony: ->
    $('.selected').removeClass('saddled')
    @$('.selected').addClass('saddled')

	render: =>
    $(@el).html(@template())
    console.log("before")
    console.log(this)
    console.log("after")
    this