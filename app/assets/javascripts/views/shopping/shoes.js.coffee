class Mlp.Views.Shoes extends Backbone.View
    template: JST['shopping/shoes_index']
    className: 'column span-4 last'

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
      shoe_view = new Mlp.Views.Shoe(model: shoe)
      @$('#shoes').append(shoe_view.render().el)