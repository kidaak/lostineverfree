class Mlp.Views.SettingsIndex extends Backbone.View

  template: JST['settings/index']

  events:
    'submit #new_setting': 'changeSetting'

  initialize: ->
    console.log(@collection)

  changeSetting: (event) ->
    event.preventDefault()
    setting = document.getElementById "setting"
    new_src = $('#new_setting_img_url').val()
    console.log setting
    console.log new_src
    setting.src = new_src

  render: ->
    $(@el).html(@template())
    this