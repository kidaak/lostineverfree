class Mlp.Models.Setting extends Backbone.Model
  collection: Mlp.Collections.Settings

  select: ->
    @set(selected: true)
    @save()
    @trigger('saddle')

  deselect: ->
    @set(selected: false)
    @save()

  inEverfree: ->
    console.log("in everfree")
    @get('in_everfree')