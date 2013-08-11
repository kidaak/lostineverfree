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

  navigate: (previous, direction) ->
    console.log("navigating...")
    next = this.where id: previous.get("#{direction}")
    previous.deselect()
    next[0].select()
    next[0]

  selected: ->
    selected = this.where selected: true
    selected[0]
