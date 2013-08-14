class Mlp.Views.Shopping extends Backbone.View
  template: JST['shopping/shopping']
  className: 'fitting-room container'

  events:
    'click .clothing-list-item': 'clickedClothing'

  render: =>
    console.log("going shopping...")
    $(@el).html(@template())
    this

  clickedClothing: (event) ->
    event.preventDefault()
    clothing_dept = event.currentTarget.id.split("-")[0]
    clothing_id = event.currentTarget.id.split("-")[1]
    console.log(clothing_dept)
    console.log(clothing_id)
    Mlp.vent.trigger('clothing_item:clicked', clothing_dept, clothing_id)
