class Mlp.Views.TryOn extends Backbone.View
  template: JST['shopping/try_on']

  initialize: ->
    Mlp.vent.on('clothing_item:clicked', @render, this)
    @collection.on('change', @render, this)
    @collection.on('add', @render, this)

  render: (clothing_dept, clothing_id) =>
    console.log("trying on...")
    console.log(clothing_dept)
    console.log(clothing_id)
    console.log(@collection.models)
    clicked_item = @collection.models[clothing_id]
    console.log(clicked_item)
    $('#shopping-pony-target').append(@template(clothing: clicked_item))
    this