class Mlp.Models.Pony extends Backbone.Model
  collection: Mlp.Collections.Ponies

  select: ->
    @set(selected: true)
    @save()
    @trigger('saddle')

  deselect: ->
    @set(selected: false)
    @save()

