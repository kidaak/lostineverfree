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
    console.log(this)
    $(@el).html(@template(pony: this.model))
    this