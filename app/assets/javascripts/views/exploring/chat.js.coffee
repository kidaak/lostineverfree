class Mlp.Views.Chat extends Backbone.View
    template: JST['exploring/chat']

    render: =>
      $(@el).html(@template())
      this
