var SiteRouter = Backbone.Router.extend({
    routes: {
        'foo': 'fooRoute'
    },
    fooRoute: function() {
        // logic for the “/foo” or “#foo” route would go here

    }
});
var siteRouter = new SiteRouter();
Backbone.History.start(); // siteRouter won't work without this



SiteRouter = new Backbone.Router({
    initialize: function() {
        this.route('foo', 'fooRoute');
    },
    fooRoute: function() {
        // logic for the “/foo” or “#foo” route would go here

    }
});



// NOTE: In a real case user data would come from the server
var user = new Backbone.Model({isAdmin: true});
SiteRouter = new Backbone.Router({
     initialize: function(options) {
        if(user.get('isAdmin')) {
            this.addAdminRoutes();
        }
    },
    addAdminRoutes: function() {
        this.route('adminPage1', 'adminPage1Route');
        this.route('adminPage2', 'adminPage2Route');
        // etc.

    }
});



// File #1
window.addFooRoutes = function(router) {
    router.route('foo', function() {
        //...
    })
}

// File #2
SiteRouter = new Backbone.Router({
    initialize: function(options) {
        if(options.includeFooRoutes) {
            addFooRoutes(this);
        }
    }
});