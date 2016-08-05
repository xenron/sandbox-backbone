var exampleObject = {};
exampleObject.alertThis = function() {
     alert(this);
};
window.setTimeout(exampleObject.alertThis); // alerts window



var exampleObject = {};
exampleObject.alertThisBuilder = function() {
    var alertThis = function() {
        alert(this);
    }
    var correctThis = this;
    return function() {
        alertThis.apply(correctThis);
    }
};
var alertThis = exampleObject.alertThisBuilder();
window.setTimeout(alertThis); // alerts exampleObject



var simpleBook = {};
simpleBook.alertThis = function() {
     alert(this);
};
simpleBook.alertThis = _.bind(simpleBook.alertThis, simpleBook);
window.setTimeout(simpleBook.alertThis); // now alerts simpleBook, 

                                         // not window not window




var Book = Backbone.Model.extend({
     initialize: function() {
          _.bindAll(this, 'alertThis');
     },
     alertThis: function() {
          alert(this);
     }
});
var  book = new Book();
window.setTimeout(book.alertThis); // alerts book, not window