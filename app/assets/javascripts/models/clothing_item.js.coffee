class Mlp.Models.ClothingItem extends Backbone.Model

  select: ->
    @set(selected: true)
    @save()

  deselect: ->
    @set(selected: false)
    @save()
