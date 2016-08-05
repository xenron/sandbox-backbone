var books = new Backbone.Collection([
    {
        pages: 100, title: "Backbone Essentials 5: The Essentials Return"
    }, {
        pages: 100, title: "Backbone Essentials 6: We're Not Done Yet?"
    },{
        pages: 25, title: "Completely Fake Title"
    } 
]);
var hundredPageBooks = books.where({pages: 100});
//  hundredPageBooks = array of all of the books except Completely Fake Title
var firstHundredPageBook = books.findWhere({pages: 100});
firstHundredPageBook; // = Backbone Essentials 5: The Essentials Return



var books = new Backbone.Collection([
    {
        pages: 100, title: "Backbone Essentials 5: The Essentials Return"
    }, {
        pages: 200, title: "Backbone Essentials 7: How Are We Not Done Yet?"
    }, {
        pages: 25, title: "Completely Fake Title"
    }
]);
var hundredPageOrMoreBooks = books.filter(function(book)  {
    return book.get('pages') >= 100;
});
hundredPageOrMoreBooks;// again, this will be an array of all books but the last
var hundredPageOrMoreBooks = books.reject(function(book)  {
    return book.get('pages') < 100;
});
hundredPageOrMoreBooks;// this will still be an array of all books but the last