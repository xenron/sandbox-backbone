if (!Backbone.history.start()) {
    // add logic to handle the “404 Page Not Found” case here
}



var SiteRouter = Backbone.Router.extend({
    initialize: function(options) {
        this.route('normalRoute/:id', 'normalRoute');
        this.route('*nothingMatched', 'pageNotFoundRoute');
    },
    pageNotFoundRoute: function(failedRoute) {
        alert( failedRoute + ' did not match any routes');
    }
});