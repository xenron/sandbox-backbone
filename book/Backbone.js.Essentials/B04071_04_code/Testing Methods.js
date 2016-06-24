var warAndPeace = new Backbone.Model();
var books = new Backbone.Collection([warAndPeace]);
books.contains(warAndPeace); // true
books.isEmpty(); // false



var books = new Backbone.Collection([
    {pages: 120, title: "Backbone Essentials 4: The Reckoning"},
    {pages: 20, title: "Even More Ideas For Fake Book Titles"}
]);
books.some(function(book)  {
    return book.get('pages') > 100;
}); // true
books.every(function(book)  {
    return book.get('pages') > 100;
}); // false