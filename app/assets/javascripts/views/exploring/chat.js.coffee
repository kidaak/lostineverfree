class Mlp.Views.Chat extends Backbone.View
  template: JST['exploring/chat']

  events:
    'submit #new_message': 'createMessage'

  render: =>
    $(@el).html(@template())
    @collection.each(@appendMessage)
    this

  appendMessage: (message) =>
    pony_view = new Mlp.Views.Message(model: message)
    @$('#messages').append(pony_view.render().el)

  createMessage: (event) ->
    event.preventDefault()

    attributes = 
      content: $('#new-message-content').val()

    options =
      wait: true
      error: @handleError    

    @collection.create attributes, options

  handleError: (pony, response) -> 
    if response.status == 422
      errors = $.parseJSON(response.responseText).errors
      for attribute, messages of errors
        alert "#{attribute} #{message}" for message in messages

