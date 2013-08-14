class Mlp.Views.TryOn extends Backbone.View
  template: JST['shopping/try_on']

  initialize: ->
    Mlp.vent.on('changeHat:finished', @changeOutfit, this)
    Mlp.vent.on('changeShoes:finished', @changeOutfit, this)

  render: (clothing_dept, clothing_id) =>
    console.log("trying on...")
    console.log(clothing_dept)
    console.log(clothing_id)
    console.log(@collection.models)
    clicked_item = @collection.models[clothing_id]
    console.log(clicked_item)
    $('#shopping-pony-target').append(@template(clothing: clicked_item))
    this

  changeOutfit: =>
    console.log(this)
    console.log(@$el)
    @$el.remove()
    this.tryOn()

  tryOn: =>
    console.log("Trying on a NEW outfit...")
    console.log(@collection.selected_array())
    for clothing_item in @collection.selected_array()
      console.log(clothing_item)
      $('#shopping-pony-target').append(@template(clothing: clothing_item))
    this