class Mlp.Views.Hats extends Backbone.View
    template: JST['shopping/hats_index']
    className: 'column span-4'

    render: =>
      console.log("rendering a hat...")
      $(@el).html(@template())
      for hat in @collection
        @appendHat(hat)
      this

    appendHat: (hat) ->
      hat_view = new Mlp.Views.Hat(model: hat)
      @$('#hats').append(hat_view.render().el)