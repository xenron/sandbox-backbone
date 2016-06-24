book.turnPage = function() 
    this.currentPage += 1;
};



book.__proto__.turnPage();



book.__proto__ = {
    turnPage: function() {
        this.currentPage += 1;
    }
};



var Book = function() {};
Book.prototype.turnPage = function() {
    this.currentPage += 1;
};
var book = new Book();
book.turnPage(); // this works because book.__proto__ ==
 Book.prototype