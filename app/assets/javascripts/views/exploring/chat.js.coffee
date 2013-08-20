class Mlp.Views.Chat extends Backbone.View
  template: JST['exploring/chat']

  initialize: ->
    @collection.on('reset', @render, this)
    @collection.on('add', @appendMessage, this)
    @collection.on('change', @render, this)
    @chat = @collection.filter (x) -> x.get('heroine') == $('#heroine-name').html()


  events:
    'submit #new_message': 'createMessage'


  render: ->
    console.log("rendering chat..")
    $(@el).html(@template())
    console.log("the chat is #{@chat}")
    for message in @chat
      @appendMessage(message)
    this


  appendMessage: (message) =>
    if message.get('heroine') == $('#heroine-name').html()
      message_view = new Mlp.Views.Message(model: message)
      @$('#messages').append(message_view.render().el)


  createMessage: (event) ->
    event.preventDefault()

    attributes = 
      content: $('#new-message-content').val()
      heroine: $('#heroine-name').html()

    options =
      wait: true
      error: @handleError    

    @collection.create attributes, options
    $('#new-message-content').val("")


  handleError: (sent_message, response) -> 
    if response.status == 422
      errors = $.parseJSON(response.responseText).errors
      for attribute, messages of errors
        alert "#{attribute} #{message}" for message in messages

