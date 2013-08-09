class Mlp.Views.Exploring extends Backbone.View
  template: JST['exploring/exploring']

  initialize: ->
    console.log('i miss canterlot')
    @model.on('reset', @render, this)
    console.log(@model)

  render: ->
    $(@el).html(@template())
    adventurePonyView = new Mlp.Views.adventurePony(model: @model)
    @$('#adventurePony').append(adventurePonyView.render().el)
    this