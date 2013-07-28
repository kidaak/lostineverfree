class Mlp.Routers.Ponies extends Backbone.Router
	routes:
		'': 'index'
		'ponies/:id': 'show'

	index: ->
		view = new Mlp.Views.PoniesIndex()
		$('#container').html(view.render().el)

	show: (id) ->
		alert "Pony #{id}"
