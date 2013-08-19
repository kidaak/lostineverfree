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
  faye = new Faye.Client "http://localhost:9292/faye"
  faye.setHeader 'Access-Control-Allow-Origin', 'http://localhost:3000'
  faye.subscribe "/receive", (data) ->
    $('#messages').append("<p>" + data.content + "</p>")