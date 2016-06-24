new Backbone.Router({
    routes: {
        'foo': function() {alert('bar')},
        ':splatThatCouldBeFoo': function() {alert('baz')}
    }
}) 
Backbone.history.start();
// navigating to #foo alerts('bar')