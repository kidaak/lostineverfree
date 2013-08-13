class Mlp.Views.FittingRoom extends Backbone.View
    template: JST['shopping/fitting_room']
    className: 'fitting-room-scene'

    render: =>
      console.log("going shopping...")
      console.log(this.model)
      $(@el).html(@template(shopping_pony: this.model))
      this

    