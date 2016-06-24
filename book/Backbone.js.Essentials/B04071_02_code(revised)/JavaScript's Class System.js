// Define Book's Initializer
var Book = function() {
    // define Book's default properties
    this.currentPage = 1;
    this.totalPages = 1;
}

// Define book's parent class
Book.prototype = new Backbone.Model();

// Define a method of Book
Book.prototype.turnPage = function() {
    this.currentPage += 1;
    return this.currentPage;
}