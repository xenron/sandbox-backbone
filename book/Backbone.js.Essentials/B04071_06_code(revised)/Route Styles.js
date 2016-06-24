var SiteRouter = new Backbone.Router({
    initialize: function(options) {
        this.route('book/1', 'book1Route'); // for book #1
        this.route('book/2', 'book2Route'); // for book #2
        this.route('book/3', 'book3Route'); // for book #3
        // this will get old fast
    }
});



SiteRouter = new Backbone.Router({
    initialize: function(options) {
        // This regex will match "book/" followed by a number
        this.route(/^book\/(\d+)$/, 'bookRoute');
    },
    bookRoute: function(bookId) {
        // book route logic would go here
    }
});



SiteRouter = new Backbone.Router({
    initialize: function(options) {
        this.route('book/:bookId', 'bookRoute');
    },
    bookRoute: function(bookId) {
        // book route logic would go here
    }
});



SiteRouter = new Backbone.Router({
    initialize: function(options) {
        this.route('book/*bookId', 'bookRoute');
    },
    bookRoute: function(bookId) {
        // book route logic would go here
    }
});
// if we now navigate to "book/example/with/slash/5" our route
// method will receive an argument of "example/with/slash/5"