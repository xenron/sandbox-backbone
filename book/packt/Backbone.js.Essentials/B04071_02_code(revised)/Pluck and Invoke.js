var fakeBooks = [
    {
        author: 'Bob',
        pages: 50,
        title: 'Become English Better At'
    }, {
        author: 'Bob',        pages: 100,
        title: 'You Is Become Even Better at English'

    }, {
        author: 'Fred the Critic',
        pages: 200,
        title: 'Bob is a Terrible Author'
    }
];



var fakeTitles = _.pluck(fakeBooks, 'title');
// fakeTitles == ['Become English Better At', ...]



var Book = Backbone.Model.extend({
    getAuthor: function() {
        // the "get" method returns an attribute of a Model;
        // we'll learn more about it in the following chapter
        return this.get('author');
    }
});
var books = [
    new Book(fakeBooks[0]),    new Book(fakeBooks[1]),    new Book(fakeBooks[2])
];
var authors = _.invoke(books, 'getAuthor');
// authors == ['Bob', 'Bob', 'Fred the Critic'] 