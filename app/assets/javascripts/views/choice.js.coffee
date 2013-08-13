class Mlp.Views.Choice extends Backbone.View
    template: JST['choice']

    events:
      'click #go-exploring': 'goExploring'
      'click #go-shopping': 'goShopping'

    render: =>
      console.log("rendering choice view...")
      console.log(this.model)
      $(@el).html(@template(choice_pony: this.model))
      this

    goExploring: ->
      console.log(@model)
      console.log(this.model)
      Mlp.vent.trigger('choice:exploring', @model)

    goShopping: =>
      console.log(@model)
      console.log(this.model)
      Mlp.vent.trigger('choice:shopping', @model)
      this.remove()
      this.unbind()
