var Cats = Backbone.Collection.extend({
     // The properties and methods of Cats would go here
});



var cartoonCats = new Cats([{id: 'cat1', name: 'Garfield'}]);
var garfield = cartoonCats.models[0]; // garfield is a  Model



var cartoonCats = new Cats([{name: 'Garfield'}, {name: 'Heathcliff'}]);
cartoonCats.models.length; // 2, but instead you can do ...
cartoonCats.length; // also 2