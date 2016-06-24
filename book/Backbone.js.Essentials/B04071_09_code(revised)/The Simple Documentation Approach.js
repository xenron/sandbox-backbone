var BookView = Backbone.View.extend({
    initialize: function() {
        this.bookModel = this.model;
    }
});



// This View takes a “Book” Model
BookView = Backbone.View.extend();



/**
 * This View takes a “Book” Model
 */
BookView = Backbone.View.extend();



BookView = Backbone.View.extend({
    /**
     * This “foo” method does foo stuff
     */
    foo: function() {
        doSomeFooStuff();
    },
    /*
     * This “bar” method takes a “Baz” argument and does bar stuff
     */
    bar: function(baz) {
        doBarStuffWith(baz);
    }
});