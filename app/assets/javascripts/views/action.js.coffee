class Mlp.Views.Action extends Backbone.View
    template: JST['action']

    render: =>
      $(@el).html(@template())
      this