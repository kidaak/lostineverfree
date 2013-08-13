class Mlp.Views.Hats extends Backbone.View
    template: JST['shopping/hats_index']

    render: =>
      console.log("going shoe shopping...")
      console.log(this.collection)
      $(@el).html(@template())
      @collection.each(@appendShoe)
      this

    appendShoe: (shoe) ->
      console.log(shoe)