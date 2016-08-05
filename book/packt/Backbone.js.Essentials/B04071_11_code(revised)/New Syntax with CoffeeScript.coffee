class HeaderView extends Backbone.View
    tagName: 'h1'
    initialize: ->
        @render
    render: ->
        $(@el).text 'Hello World!'
header = new  HeaderView