class Mlp.Views.Outfit extends Backbone.View
  template: JST['outfit']

  render: () =>
    $(@el).html(@template())
    for clothing_item in @collection
      clothing_item_on_view = new Mlp.Views.ClothingItemOn(model: clothing_item)
      @$('#outfit').append(clothing_item_on_view.render().el)
    this

