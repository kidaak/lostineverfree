class Mlp.Views.FittingRoom extends Backbone.View
    template: JST['shopping/fitting_room']
    className: 'fitting-room-scene'

    initialize: =>
      Mlp.vent.on('tryon:save', @saveOutfit, this)

    render: =>
      console.log("going shopping...")
      console.log(this.model)
      $(@el).html(@template(shopping_pony: this.model))
      this

    saveOutfit: (outfit) ->
      console.log("saving outfit: #{outfit}")
      this.model.save
        clothing_items: outfit
      Mlp.vent.trigger('fitting_room:outfit_saved', this.model)


    