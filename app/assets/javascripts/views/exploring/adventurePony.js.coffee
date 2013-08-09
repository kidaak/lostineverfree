class Mlp.Views.adventurePony extends Backbone.View
  template: JST['exploring/adventurePony']

  initialize: ->
    console.log("gimme the loot")
    console.log(@model)

  render: ->
    $(@el).html(@template(pony: this.model))
    this