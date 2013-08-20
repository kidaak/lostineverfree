class Mlp.Views.Message extends Backbone.View
    template: JST['exploring/message']

    initialize: ->
      console.log(this.model)
      @model.on('change', @render, this)
      @cameo_name = $('#cameo-name').html()

    render: =>
      console.log("rendering message...#{@model}")
      $(@el).html(@template(message: @model, cameo_name: @cameo_name))
      this