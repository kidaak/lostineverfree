class Mlp.Views.Main extends Backbone.View
    template: JST['main']

    render: =>
      $(@el).html(@template())
      this