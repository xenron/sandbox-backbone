var router = new Backbone.Router();
router.on('route:foo', function() {
    // do something whenever the route “foo” is navigated to
});



Backbone.history.on('route', function() { /* ... */ });