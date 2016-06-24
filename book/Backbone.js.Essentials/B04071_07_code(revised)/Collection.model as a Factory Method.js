var FictionBook = Backbone.Model.extend({
    // insert logic for fiction books here
});
var NonFictionBook = Backbone.Model.extend({
    // insert logic for non-fiction books here
});
var FictionAndNonFictionBooks = Backbone.Collection.extend({
    model: function(attributes, options) {
        if (attributes.isFiction) {
            return new FictionBook(attributes, options);
        } else {
            return new NonFictionBook(attributes, options);
        }
    },
    url: '/book'
});