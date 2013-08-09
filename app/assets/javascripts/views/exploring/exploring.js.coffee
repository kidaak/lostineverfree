class Mlp.Views.Exploring extends Backbone.View
  template: JST['exploring/exploring']

  initialize: ->
    console.log('i miss canterlot')
    console.log(@collection)
    @model.on('reset', @render, this)
    console.log(@model)

  render: ->
    $(@el).html(@template())
    adventurePonyView = new Mlp.Views.adventurePony(model: @model)
    @$('#adventure-pony').append(adventurePonyView.render().el)
    everFreeView = new Mlp.Views.everFree(collection: @collection)
    @$('#ever-free').append(everFreeView.render().el)
    this