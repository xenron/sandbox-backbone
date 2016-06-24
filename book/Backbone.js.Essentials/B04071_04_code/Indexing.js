var garfield = new Cat({id: 'cat1', name: 'Garfield'});
var cats = new Backbone.Collection([garfield]);
cats.get('cat1'); // garfield
cats.get(garfield.cid); // also garfield
cats.get('cat2'); // returns undefined



var cats = new Backbone.Collection([{
    id: 'cat1',    name: 'Garfield'
}]);
cats.remove('cat1');
cats.length; // 0



var cats = new Backbone.Collection([
    {name: 'Garfield'},    {name: 'Heathcliff'}
]);
cats.at(1); // returns heathcliff