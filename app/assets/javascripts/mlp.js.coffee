window.Mlp =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: -> 
  	new Mlp.Routers.Application
  	Backbone.history.start(pushState: true)

$(document).ready ->
  Mlp.initialize()
