var Cats = Backbone.Collection.extend({model: Cat});
var cats = new Cats(); // cats.model == Cat



var Cat = Backbone.Model.extend();
var Cats = Backbone.Collection.extend({model: Cat});
var Dog = Backbone.Model.extend();
var snoopy = new Dog({name: 'Snoopy'});
var cartoonCats = new Cats([snoopy]);
cartoonCats.models[0] instanceof Dog; // true



var snoopyAttributes = {id: 'dog1', name: 'Snoopy'};
var cartoonCats = new Cats([snoopyAttributes]);
cartoonCats.models[0] instanceof Cat; // true



var cartoonCats = new Cats();
var garfield = cats.create({name: 'Garfield'}); // equivalent to:
// var garfield = new Cat({name: 'Garfield'}); // cats.models.push(garfield);
// garfield.save();