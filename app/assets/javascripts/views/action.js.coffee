class Mlp.Views.Action extends Backbone.View
    template: JST['action']

    initialize: ->
      Mlp.vent.on('everfree:navigated', @position, this)

    render: =>
      $(@el).html(@template())
      this

    position: (everfree_scene) ->
      console.log("positioning...")
      console.log(everfree_scene)
      $('#heroine').css("left", "25%")