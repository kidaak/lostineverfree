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
      $('#heroine').css("left", everfree_scene.get('pony_position_left'))
      $('#heroine').css("top", everfree_scene.get('pony_position_top'))
      $('#heroine').css("width", everfree_scene.get('pony_width'))
      if everfree_scene.get('pony_reversed') and not $('#heroine').hasClass('pony_reversed')
        $('#heroine').addClass('flipped-image')
      if not everfree_scene.get('pony_reversed')
        $('#heroine').removeClass('flipped-image')