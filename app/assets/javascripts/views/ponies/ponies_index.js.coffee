class Mlp.Views.PoniesIndex extends Backbone.View

  template: JST['ponies/index']

  events:
  	'submit #new_pony': 'createPony'

  initialize: ->
  	@collection.on('reset', @render, this)
  	@collection.on('add', @render, this)

  render: ->
  	$(@el).html(@template(ponies: @collection))
  	this

  createPony: (event) ->
  	event.preventDefault()
  	@collection.create(name: $('#new_pony_name').val(), url: $('#new_pony_url').val())
