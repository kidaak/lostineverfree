class Mlp.Views.Pony extends Backbone.View
	template: JST['ponies/pony']

	render: ->
		$(@el).html(@template())
		this