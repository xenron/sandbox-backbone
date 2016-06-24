var book = new Backbone.Model({pages: 20, title: 'Short Title'};
var attributeKeys = _.keys(book.attributes);
alert(attributeKeys); // alerts ['pages', 'title']



var attributeKeys =  book.keys();
alert(attributeKeys); // alerts ['pages', 'title'];