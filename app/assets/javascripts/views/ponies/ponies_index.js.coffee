class Mlp.Views.PoniesIndex extends Backbone.View

  template: JST['ponies/index']

  events:
    'submit #new_pony': 'createPony'
    'submit #new_setting': 'changeSetting'

  initialize: ->
    @collection.on('reset', @render, this)
    @collection.on('add', @render, this)
    @collection.on('change', @render, this)

  render: ->
    $(@el).html(@template(ponies: @collection))
    this

  changeSetting: (event) ->
    event.preventDefault()
    setting = document.getElementById "setting"
    new_src = $('#new_setting_img_url').val()
    console.log setting
    console.log new_src
    setting.src = new_src

  createPony: (event) ->
    event.preventDefault()
    @collection.create(name: $('#new_pony_name').val(), img_url: $('#new_pony_img_url').val())


