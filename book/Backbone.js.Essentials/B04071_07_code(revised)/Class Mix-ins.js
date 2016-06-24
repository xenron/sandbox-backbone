var loggingMixin = {
    startLogging: function() {
        Logger.startLogging(this);
    },
    stopLogging: function() {
        Logger.stopLogging(this);
    }
}



var Book = Backbone.Model.extend({
    defaults: {currentPage: 1},

    read: function() {
        // TODO: add logic to read a book here
    }
});



var bookPrototype = {
    defaults: {currentPage: 1},

    read: function() {
        // TODO: add logic to read a book here
    }
};
Book = Backbone.Model.extend(bookPrototype);



bookPrototype.startLogging = loggingMixin.startLogging;
bookPrototype.stopLogging = loggingMixin.stopLogging;



_.extend(bookPrototype, loggingMixin);



bookPrototype = {
    defaults: {currentPage: 1},

    read: function() {
        // TODO: add logic to read a book here
    },
    startLogging: $.noop // don't log this class
};