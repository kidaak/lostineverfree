class Mlp.Collections.Ponies extends Backbone.Collection
  url: '/api/ponies'
  model: Mlp.Models.Pony

  ponyUp: ->
    selected = @shuffle()[0]
    console.log(selected)
    selected.select() if selected

  ponyDown: ->
    for model in this.models
      model.deselect()