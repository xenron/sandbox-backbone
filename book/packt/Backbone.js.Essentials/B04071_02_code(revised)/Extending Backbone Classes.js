var Book = Backbone.Model.extend();
// Book.prototype.__proto__ == Backbone.Model.prototype;
var book = new Book();
book.destroy();



var Book = Backbone.Model.extend({
    currentPage: 1,
    turnPage: function() {
        this.currentPage += 1;
    }
});
var book = new Book();
book.currentPage; // == 1
book.turnPage(); // increments book.currentPage by one



var Book = Backbone.Model.extend({}, {
    areBooksGreat: function() {
        alert("yes they are!");
    }
});
Book.areBooksGreat(); // alerts "yes they are!"
var book = new Book();
book.areBooksGreat(); // fails because static methods must be 
// called on a class