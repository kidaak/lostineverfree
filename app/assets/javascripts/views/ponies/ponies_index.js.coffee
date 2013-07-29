class Mlp.Views.PoniesIndex extends Backbone.View

  template: JST['ponies/index']

  events:
  	'submit #new_pony': 'createPony'

  events:
    'submit #new_setting': 'changeSetting'

  initialize: ->
  	@collection.on('reset', @render, this)
  	@collection.on('add', @render, this)

  render: ->
  	$(@el).html(@template(ponies: @collection))
  	this

  createPony: (event) ->
  	event.preventDefault()
  	@collection.create(name: $('#new_pony_name').val(), img_url: $('#new_pony_img_url').val())

  changeSetting: (event) ->
    event.preventDefault()
    setting = document.getElementById "setting"
    new_src = $('#new_setting_img_url').val()
    console.log setting
    console.log new_src
    setting.src = new_src
