class Mlp.Views.PoniesIndex extends Backbone.View

  template: JST['ponies/index']

  render: ->
  	$(@el).html(@template(ponies: "Ponies go here"))
  	this
