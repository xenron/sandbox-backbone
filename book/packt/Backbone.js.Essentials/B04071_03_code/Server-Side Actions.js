var Book = new Backbone.Model.extend({
    urlRoot: '/books'
});
new Book().save(); // will initiate a PUT request to "/books"



var Book = Backbone.extend({
    url: function() {
        if (this.get('fiction')) {
            return '/fiction;
        } else {
            return  '/nonfiction';
        }
    }
});
var theHobbit = new Book({fiction: true});
alert(theHobbit.url()); // alerts "/fiction"