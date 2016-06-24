var cats = new Backbone.Collection([
    {name: 'Garfield'},    {name: 'Heathcliff'}
]);
cats.each(function(cat) {
    alert(cat.get('name'));
}); // will alert "Garfield", then "Heathcliff"