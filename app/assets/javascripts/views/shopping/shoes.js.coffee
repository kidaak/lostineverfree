class Mlp.Views.Shoes extends Backbone.View
  template: JST['shopping/shoes_index']
  className: 'column span-4 last'

  initialize: ->
    this.on('change', @render, this)
    this.on('reset', @render, this)
    this.on('add', @appendShoe, this)
    this.on('render', @positionShoes, this)

  render: =>
    console.log("going shoe shopping...")
    console.log(@collection)
    $(@el).html(@template())
    for shoe in @collection
      @appendShoe(shoe)
    this

  appendShoe: (shoe) ->
    console.log("appending shoe...")
    console.log(shoe)
    shoe_view = new Mlp.Views.Shoe(model: shoe, id: "shoe-#{shoe.get('id')}")
    @$('#shoes').append(shoe_view.render().el)

  positionShoes: ->
    for shoe in @collection
      top = ((shoe.get('id') - @collection[0].get('id'))*80)-110
      left = (21)
      $("#shoe-#{shoe.get('id')}").css("top", "#{top}px")
      $("#shoe-#{shoe.get('id')}").css("left", "#{left}%")
    this