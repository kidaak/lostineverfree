class Mlp.Views.Setting extends Backbone.View
    template: JST['settings/setting']

    render: =>
      $(@el).html(@template(setting: this.model)) if this.model.get('selected')
      this