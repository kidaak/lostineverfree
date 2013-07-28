class Mlp.Routers.Ponies extends Backbone.Router
	routes:
		'': 'index'
		'ponies/:id': 'show'

	initialize: ->
		@collection = new Mlp.Collections.Ponies()

	index: ->
		@collection.fetch success: =>
			view = new Mlp.Views.PoniesIndex(collection: @collection)
			$('#container').html(view.render().el)

	show: (id) ->
		alert "Pony #{id}"
