window.Mlp =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: -> 
  	new Mlp.Routers.Ponies
  	Backbone.history.start()

$(document).ready ->
  Mlp.initialize()
