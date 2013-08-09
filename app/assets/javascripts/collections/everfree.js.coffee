class Mlp.Collections.Everfree extends Backbone.Subset
  parent: ->
    new Mlp.Collections.Settings()

  sieve: (setting) ->
    setting.inEverfree()