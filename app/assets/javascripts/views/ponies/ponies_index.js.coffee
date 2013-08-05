class Mlp.Views.PoniesIndex extends Backbone.View

  template: JST['ponies/index']

  events:
    'submit #new_pony': 'createPony'
    'submit #new_setting': 'changeSetting'
    'click #pony_up': 'ponyUp'

  initialize: ->
    @collection.on('reset', @render, this)
    @collection.on('add', @appendPony, this)
    @collection.on('change', @render, this)

  render: ->
    $(@el).html(@template())
    @collection.each(@appendPony)
    this

  appendPony: (pony) =>
    view = new Mlp.Views.Pony(model: pony)
    @$('#ponies').append(view.render().el)

  ponyUp: (event) ->
    event.preventDefault()
    @collection.ponyUp()

  changeSetting: (event) ->
    event.preventDefault()
    setting = document.getElementById "setting"
    new_src = $('#new_setting_img_url').val()
    console.log setting
    console.log new_src
    setting.src = new_src

  createPony: (event) ->
    event.preventDefault()
    pony = new Mlp.Models.Pony()
    pony.name = "pony"
    pony.img_url = "http://www.hasbro.com/mylittlepony/images/carousel/twilight-sparkle-slide.png"
    pony.save
    console.log(pony)
    @collection.create pony,
      wait: true
      success: -> $('#new_pony')[0].reset()
      error: @handleError

  handleError: (pony, response) -> 
    if response.status == 422
      errors = $.parseJSON(response.responseText).errors
      for attribute, messages of errors
        alert "#{attribute} #{message}" for message in messages


