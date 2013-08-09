class Mlp.Collections.Settings extends Backbone.Collection
  url: '/api/settings'
  model: Mlp.Models.Setting

  randomSetting: ->
    selected = @shuffle()[0]
    console.log(selected)
    selected.select() if selected

  randomReset: ->
    for model in this.models
      model.deselect()

  getEverFree: ->