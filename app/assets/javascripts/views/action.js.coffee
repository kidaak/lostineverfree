class Mlp.Views.Action extends Backbone.View
    template: JST['action']

    initialize: ->
      Mlp.vent.on('everfree:navigated', @positionHeroine, this)
      Mlp.vent.on('everfree:navigated', @positionCameo, this)

    render: =>
      $(@el).html(@template())
      this

    positionHeroine: (everfree_scene) ->
      console.log("positioning heroine...")
      console.log(everfree_scene)
      $('#heroine').css("left", everfree_scene.get('pony_position_left'))
      $('#heroine').css("top", everfree_scene.get('pony_position_top'))
      $('#heroine').css("width", everfree_scene.get('pony_width'))
      if everfree_scene.get('pony_reversed') and not $('#heroine').hasClass('pony_reversed')
        $('#heroine').addClass('flipped-image')
      if not everfree_scene.get('pony_reversed')
        $('#heroine').removeClass('flipped-image')

    positionCameo: (everfree_scene) ->
      console.log("positioning cameo...")
      $('#cameo').css("left", everfree_scene.get('cameo_position_left'))
      $('#cameo').css("top", everfree_scene.get('cameo_position_top'))
      $('#cameo').css("width", everfree_scene.get('cameo_width'))
      if everfree_scene.get('cameo_reversed') and not $('#cameo').hasClass('cameo_reversed')
        $('#cameo').addClass('flipped-image')
      if not everfree_scene.get('cameo_reversed')
        $('#cameo').removeClass('flipped-image')