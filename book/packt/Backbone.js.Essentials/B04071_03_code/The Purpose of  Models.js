var Cat = Backbone.Model.extend({
     // The properties and methods of our "Cat" class would go here
});



var garfield = new Cat({
    name: 'Garfield',
    owner: 'John'
}, {
    estimateWeight: true
});