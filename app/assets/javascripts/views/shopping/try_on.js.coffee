class Mlp.Views.TryOn extends Backbone.View
  template: JST['shopping/try_on']

  initialize: ->
    Mlp.vent.on('changeHat:finished', @render, this)
    Mlp.vent.on('changeShoes:finished', @render, this)

  render: () =>
    $(@el).html(@template())
    for clothing_item in @collection.selected_array()
      clothing_item_on_view = new Mlp.Views.ClothingItemOn(model: clothing_item)
      @$('#shopping-pony-outfit').append(clothing_item_on_view.render().el)
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
      $('#shopping-pony-outfit').append(@template(clothing: clothing_item))
    this