class Mlp.Views.Skirts extends Backbone.View
  template: JST['shopping/skirts_index']
  className: 'column span-4'

  events:
    'click .clothing-list-item': 'changeSkirts'


  initialize: ->
    @skirts = @collection.skirts()
    this.on('change', @render, this)
    this.on('reset', @render, this)
    this.on('add', @appendSkirt, this)
    this.on('render', @positionSkirts, this)

  render: =>
    console.log("rendering a skirt...")
    $(@el).html(@template())
    for skirt in @skirts
      @appendSkirt(skirt)
    this

  appendSkirt: (skirt) ->
    skirt_view = new Mlp.Views.ClothingListItem(model: skirt, id: "skirts-#{skirt.get('id')}")
    @$('#skirts').append(skirt_view.render().el)

  positionSkirts: ->
    for skirt, i in @skirts
      skirt_id = skirt.get('id')
      switch i
        when 0
          left = -20
          top = 20
        when 1
          left = 80
          top = 35
        when 2
          left = 200
          top = 25
        else
          console.log("you added skirts, time to get a bigger skirt rack")
      $("#skirts-#{skirt_id}").css("left", "#{left}px")
      $("#skirts-#{skirt_id}").css("top", "#{top}px")
    this

  changeSkirts: (event) ->
    event.preventDefault()
    console.log("Changing Skirts yo...")
    skirt_id = event.currentTarget.id.split("-")[1]
    console.log("you clicked: #{skirt_id}")
    @collection.changeSkirts(skirt_id)