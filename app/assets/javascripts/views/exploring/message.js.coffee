class Mlp.Views.Message extends Backbone.View
    template: JST['exploring/message']

    initialize: ->
      console.log(this.model)

    render: =>
      console.log("rendering message...#{this.model}")
      $(@el).html(@template(message: this.model))
      this