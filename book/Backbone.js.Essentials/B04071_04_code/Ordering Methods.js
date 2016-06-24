var books = new Backbone.Collection([
    {title: "Zebras Are Cool"},
    {title: "Alligators Are Also Cool"},
    {title: "Aardvarks!!"}
]);
var notAlphabeticalBooks = books.toArray();
notAlphabeticalBooks;// will contain Zebras, then Alligators, then  Aardvarks
var alphabeticalBooks = books.sortBy('title');
alphabeticalBooks;// will contain Alligators, then Aardvarks, then Zebras



var firstLetterGroupedBooks = books.groupBy(function(book) {
    return book.get('title')[0];
});
// will be an array of [Alligators, Aardvarks], [Zebras]