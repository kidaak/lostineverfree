class Mlp.Collections.Ponies extends Backbone.Collection
  url: '/api/ponies'
  model: Mlp.Models.Pony

  ponyUp: ->
    selected = @shuffle()[0]
    selected.select() if selected

  