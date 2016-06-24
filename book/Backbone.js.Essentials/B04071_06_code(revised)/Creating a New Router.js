var MyRouter = Backbone.Router.extend({
    // instance methods/properties go here
}, {
    // static methods/properties go here
});




var myRouter = new Backbone.Router({
    routes: {
        'foo': function() {
            // logic for the “/foo” or “#foo” route would go here
        }
    }
});
Backbone.History.start(); // myRouter won't work without this