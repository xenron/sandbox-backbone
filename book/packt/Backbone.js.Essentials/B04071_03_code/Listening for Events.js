var book = new Backbone.Model({pages: 50});
book.on('change:pages', function() { // triggers when the "pages" 
of book  change
    alert('the number of pages changed!');
});
book.set('pages', 51); // will alert "the number of pages has changed"
book.off('changes:pages');
book.set('pages', 52); // will no longer alert



book.on('change destroy', function() {
    // this callback will trigger after a change or a destroy
});



var Author = Backbone.Model.extend({
    listenForDeathOfRival: function(rival) {
        rival.on('destroy', function celebrateRivalDeath() {
            alert('Hurray!  I, ' + this.get('name') + ', hated ' +
                  rival.get('name') + '!');
        }, this); // "this" is our "context" argument
    }
});
var keats = new Author({name: 'John Keats');
var byron = new Author({name; 'Lord Byron'});
byron.listenForDeathOfRival(keats);
keats.destroy(); // will alert "Hurray!  I, Lord Byron, hated John Keats!"