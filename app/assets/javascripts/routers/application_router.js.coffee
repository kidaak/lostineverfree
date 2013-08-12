class Mlp.Routers.Application extends Backbone.Router
  routes:
    '': 'index'
    'ponies/:id': 'show'

  initialize: ->
    Mlp.vent.on('click', @exploring, this)
    @ponies = new Mlp.Collections.Ponies()
    @ponies.reset($('#container').data('ponies'))
    @settings = new Mlp.Collections.Settings()
    @settings.reset($('#container').data('settings'))


  index: ->
    mainview = new Mlp.Views.Main()
    $('#container').html(mainview.render().el)
    @ponies.fetch success: =>
      view = new Mlp.Views.PoniesIndex(collection: @ponies)
      $('#friends').html(view.render().el)
    @settings.fetch success: =>
      view = new Mlp.Views.SettingsIndex(collection: @settings)
      $('#venue').html(view.render().el)

  show: (id) ->
    console.log("Showing Pony #{id}")
    @pony = @ponies.get(id)
    console.log(@pony)


  exploring: (clickedpony) ->
    console.log(this)
    actionview = new Mlp.Views.Action()
    $('#container').html(actionview.render().el)
    @settings.fetch success: =>
      @settings.assign_cameos(@ponies)
      everfreeview = new Mlp.Views.Everfree(collection: @settings)
      $('#background').html(everfreeview.render().el)
    heroineview = new Mlp.Views.Heroine(model: clickedpony)
    $('#heroine').html(heroineview.render().el)


