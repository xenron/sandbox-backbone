var urls = {
    books: function() {
        return this.get('fiction') ? '/fiction' : '/nonfiction';
    },
    magazines: '/magazines'
};
var Book = Backbone.Model.extend({url:  urls.books});
var Magazine = Backbone.Model.extend({urlRoot:  urls.magazines});