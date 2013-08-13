class Mlp.Views.Shopping extends Backbone.View
    template: JST['shopping/shopping']
    className: 'fitting-room container'

    render: =>
      console.log("going shopping...")
      $(@el).html(@template())
      this
