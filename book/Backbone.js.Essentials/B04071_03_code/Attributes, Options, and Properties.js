var book = new Backbone.Model({pages: 200});
book.renderBlackAndWhite = true;
book.renderBlackAndWhite // is a property of book
book.attributes.pages; // is an attribute of book
book.attributes.currentPage = 1; // is also an attribute of book}



var Book = Backbone.Model.extend({
    defaults: {publisher: 'Packt Publishing'}
});
var book = new Book();
book.attributes.publisher; // 'Packt Publishing'



var Book = Backbone.Model.extend({
    defaults: {publisher: {name: 'Packt Publishing'}}
});
var book1 = new Book();
book1.attributes.publisher.name // == 'Packt Publishing'
var book2 = new Book();
book2.attributes.publisher.name = 'Wack Publishing';
book1.attributes.publisher.name // == 'Wack Publishing'!



var Book = Backbone.Model.extend({
    initialize: function(attributes, options) {
        this.renderBlackAndWhite =  options.renderBlackAndWhite;
    }
});



var book = new Book({pages: 200});
book.attributes.pages = 100; // don't do this!



book.set('pages', 100); // do this!



book.set({pages: 50, currentPage: 49});



book.unset('currentPage');// book.attributes.currentPage == undefined
delete book.attributes.currentPage;
// won't trigger an event; don't do this!



book.set({pages: 50});
var bookPages = book.get('pages'); // == 50
bookPages = book.attributes.pages;// same effect, but again don't 
do this!



get: function(attr) {
    return this.attributes[attr];
}



book.get('pages'); // good
book.attributes.pages; // bad?