var book = new Book({id: 55});
book.fetch({
    success: function() {
        alert('the fetch completed successfully');
    },
    error: function() {
        alert('an error occurred during the fetch');
    }
});




var promise = book.fetch().done(function() {
        alert('the fetch completed successfully');
}).fail(function() {
        alert('an error occurred during the fetch');
});



var warAndPeace = new Backbone.Model({{id: 55});
var fiftyShades = new Backbone.Model({id: 56});
var warAndPeacePromise = warAndPeace.fetch();
var fiftyShadesPromise = fiftyShades.fetch();
$.when( warAndPeacePromise, fiftyShadesPromise).then(function() {
    alert('Both books have now been successfully fetched!');
});



var Book = Backbone.Model.extend({
    parse: function(response) {
        return response.pages; // Backbone will call this.set(response.pages);
    }
});