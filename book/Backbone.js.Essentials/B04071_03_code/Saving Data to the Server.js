var book = new Book({
    pages: 20,
    title: 'Ideas for Great Book Titles'
});
book.save().done(function(response) {
    alert(response); // alerts the the response's JSON
});



var Book = Backbone.Model.extend({
    toJSON: function(originalJson) {
        return {
            data:  originalJson,
            otherInfo: 'stuff'
        };
    }
});
var book = new Book({pages: 100);
book.save(); // will send: {book: {pages: 100}, otherInfo: 'stuff'}