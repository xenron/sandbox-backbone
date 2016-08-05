var cats = new Backbone.Collection();
cats.add({name: 'Garfield'});
cats.models[0] instanceof Cat; // true



var cats = new Backbone.Collection([{name: 'Garfield'}]);
cats.reset([{name: 'Heathcliff'}]);
cats.models[0].get('name'); // "Heathcliff"
cats.length; // 1, not 2, because we replaced Garfield with Heathcliff