class Mlp.Views.Choice extends Backbone.View
    template: JST['choice']

    render: =>
      console.log("rendering choice view...")
      console.log(this.model)
      $(@el).html(@template(choice_pony: this.model))
      this