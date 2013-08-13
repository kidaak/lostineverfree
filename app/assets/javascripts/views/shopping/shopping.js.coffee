class Mlp.Views.Shopping extends Backbone.View
    template: JST['shopping/shopping']
    className: 'fitting-room container'

    render: =>
      console.log("going shopping...")
      console.log(this.model)
      $(@el).html(@template(shopping_pony: this.model))
      this