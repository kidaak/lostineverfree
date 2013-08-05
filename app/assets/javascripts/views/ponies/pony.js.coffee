class Mlp.Views.Pony extends Backbone.View
  template: JST['ponies/pony']
  tagName: 'li'
  className: 'pony'

  events:
    'click': 'showPony'

  initialize: ->
    @model.on('change', @render, this)
    @model.on('select', @selectPony, this)

  showPony: ->
    Backbone.history.navigate("ponies/#{@model.get('id')}", true)

  selectPony: ->
    $('.pony').removeClass('saddled')
    @$('.selected').addClass('saddled')

  render: =>
    console.log(this)
    $(@el).html(@template(pony: this.model))
    this