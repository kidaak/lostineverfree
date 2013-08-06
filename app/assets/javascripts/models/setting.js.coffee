class Mlp.Models.Setting extends Backbone.Model

  select: ->
    @set(selected: true)
    @save()
    @trigger('saddle')

  deselect: ->
    @set(selected: false)
    @save()