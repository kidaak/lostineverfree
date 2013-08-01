window.Mlp =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: -> 
  	new Mlp.Routers.Ponies
  	Backbone.history.start(pushState: true)

$(document).ready ->
  Mlp.initialize()
