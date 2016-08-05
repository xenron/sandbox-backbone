var Cats = Backbone.Collection.extend({
     url: '/cats'
});
var cats = new Cats({name: 'Garfield'});
cats.save(); // saves Garfield to the server
cats.fetch(); // retrieves cats from the server and adds them