class Mlp.Models.Pony extends Backbone.Model

  select: ->
    @set(selected: true)
    @save()
    @trigger('saddle')

  deselect: ->
    @set(selected: false)
    @save()
