class Mlp.Views.Shoes extends Backbone.View
  template: JST['shopping/shoes_index']
  className: 'column span-4 last'

  events:
    'click .clothing-list-item': 'changeShoes'

  initialize: ->
    @shoes = @collection.shoes()
    this.on('change', @render, this)
    this.on('reset', @render, this)
    this.on('add', @appendShoe, this)
    this.on('render', @positionShoes, this)

  render: =>
    console.log("going shoe shopping...")
    console.log(@shoes)
    $(@el).html(@template())
    for shoe in @shoes
      @appendShoe(shoe)
    this

  appendShoe: (shoe) ->
    console.log("appending shoe...")
    console.log(shoe)
    shoe_view = new Mlp.Views.ClothingListItem(model: shoe, id: "shoes-#{shoe.get('id')}")
    @$('#shoes').append(shoe_view.render().el)

  positionShoes: ->
    for shoe in @shoes
      top = ((shoe.get('id') - @shoes[0].get('id'))*80)-110
      left = 17
      $("#shoes-#{shoe.get('id')}").css("top", "#{top}px")
    this

  changeShoes: (event) ->
    event.preventDefault()
    console.log("Changing Shoes yo...")
    shoe_id = event.currentTarget.id.split("-")[1]
    console.log(shoe_id)
    @collection.changeShoes(shoe_id)