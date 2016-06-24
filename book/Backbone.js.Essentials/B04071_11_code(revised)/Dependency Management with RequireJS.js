// All RequireJS modules start by calling a special “define”
// function
define([
    // The module's dependencies are the first argument
    'collections/Books', // dependency on collections/Books.js
    'models/Book'       // dependency on models/Book.js

// The function that defines the module is the second argument
], function(
    // The variable names for each dependency make up the
    // arguments to that function
    Books, // alias the  “collections/Books” module as “Books”
    Book   // alias the “models/Book” module as “Book”
) {
    // The actual module itself goes here
    var BookList = Backbone.View.extend({
        // Logic for our BookList View would go here; presumably 
        // it would use both Book and Books
    });
    // To tell RequireJS what variable this module should “define” 
    // simply returnthat variable at the end
    return BookList;
    // in other words, whatever is returned will be what is passed 
    // into other modules that depend on this one
});



// Dependencies are brought in by using the “require” function
// The module aliases are defined on the same line using the 
standard
// JavaScript syntax for declaring a variable
var books = require('collections/Books');
var book = require('models/Book');
// Just as before, the contents of the module are defined using
// standard JavaScriptBookList = Backbone.View.extend({
    // Logic for our BookList View would go here; presumably it
    // would use both Book and Books
});
// Instead of returning what the module defines, in CommonJS 

// modules are “exported” by assigning them to a “module.exports”
module.exports.BookList = BookList;