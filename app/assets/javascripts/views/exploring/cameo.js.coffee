class Mlp.Views.Cameo extends Backbone.View
    template: JST['exploring/cameo']

    initialize: ->
      console.log(this.model)

    render: =>
      console.log("rendering cameo...")
      console.log(this.model)
      console.log($(@el))
      debugger
      $(@el).html(@template(cameo_pony: this.model))
      Mlp.vent.trigger('cameo:rendered')
      this

    close: ->
      this.remove()
      this.unbind()
