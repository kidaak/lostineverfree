class Mlp.Views.Eyewear extends Backbone.View
  template: JST['shopping/eyewear_index']
  className: 'column span-4'

  events:
    'click .clothing-list-item': 'changeEyewear'


  initialize: ->
    @eyewear = @collection.eyewear()
    this.on('change', @render, this)
    this.on('reset', @render, this)
    this.on('add', @appendEyewear, this)
    this.on('render', @positionEyewear, this)

  render: =>
    console.log("rendering a eyewear...")
    $(@el).html(@template())
    for eyewear in @eyewear
      @appendEyewear(eyewear)
    this

  appendEyewear: (eyewear) ->
    eyewear_view = new Mlp.Views.ClothingListItem(model: eyewear, id: "eyewear-#{eyewear.get('id')}")
    @$('#eyewear').append(eyewear_view.render().el)

  positionEyewear: ->
    for eyewear, i in @eyewear
      eyewear_id = eyewear.get('id')
      switch i
        when 0
          top = 0
        when 1
          top = 50
        else
          console.log("you added eyewear, time to get a bigger eyewear rack")
      $("#eyewear-#{eyewear_id}").css("top", "#{top}px")
      $("#eyewear-#{eyewear_id}").css("left", "5px")
    this

  changeEyewear: (event) ->
    event.preventDefault()
    console.log("Changing Eyewear yo...")
    eyewear_id = event.currentTarget.id.split("-")[1]
    console.log("you clicked: #{eyewear_id}")
    @collection.changeEyewear(eyewear_id)