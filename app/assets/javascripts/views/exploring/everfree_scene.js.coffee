class Mlp.Views.EverfreeScene extends Backbone.View
    template: JST['exploring/everfree_scene']

    render: =>
      console.log("rendering everfree_scene")
      console.log(this.model)
      $(@el).html(@template(scene: this.model)) if this.model.get('selected')
      this