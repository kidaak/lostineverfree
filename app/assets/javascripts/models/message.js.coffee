class Mlp.Models.Message extends Backbone.Model

  stash: ->
    @set(heroine: "saved")

  trash: ->
    @destroy()