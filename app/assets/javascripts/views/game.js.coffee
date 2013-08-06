class Mlp.Views.Game extends Backbone.View
    template: JST['game']

    render: =>
      $(@el).html(@template())
      this