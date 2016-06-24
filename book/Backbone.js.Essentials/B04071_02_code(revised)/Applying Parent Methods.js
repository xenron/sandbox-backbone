var Book = Backbone.Model.extend({
    destroy: function(optionsOrPagesToDestroy) {
        if (typeof optionsOrPagesToDestroy === 'number') {
            // optionsOrPagesToDestroy is pagesToDestroy:

            // call our version
            this.totalPages -=  optionsOrPagesToDestroy;
        } else {
            // optionsOrPagesToDestroy is an options object:

            // call the Backbone version
            Backbone.Model.prototype.destroy.apply(this,
 
              arguments);
        }
    }
});




var Book = Backbone.Model.extend({
    currentPage: 1,
    turnPage: function() {
        this.currentPage += 1;
    }});
var simpleBook = {currentPage: 20};
Book.prototype.turnPage.apply(simpleBook); //  
simpleBook.currentPage == 21

var Book = Backbone.Model.extend();
var book = new Book();
book.alertMessage = function(message, secondMessage) {
    alert(message + ' ' + secondMessage);
}
book.alertMessage.apply(null, ['hello', 'world']);// alerts "hello world"



var book = new Book();
book.alertMessage = function(message, secondMessage) {
    alert(message + ' ' + secondMessage);
}
book.alertMessage.call(null, 'hello', 'world');
// alerts "hello world"