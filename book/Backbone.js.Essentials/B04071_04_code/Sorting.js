var Cats = Backbone.Collection.extend({comparator: 'name'});
var cartoonCats = new Cats();
cartoonCats.comparator; // 'name'



var cartoonCats = new Backbone.Collection([
    {name: 'Heathcliff'},
    {name: 'Garfield'}
], {
    comparator: 'name'
});
cartoonCats.at(0);// garfield, because his name sorts first alphabetically



var Cats = Backbone.Collection.extend({
    comparator: function(cat) {
        if (cat.get('name') == 'Heathcliff') return '0';
        return cat.get('name');
    }
});
var cartoonCats = new Cats([
    {name: 'Heathcliff'},    {name: 'Garfield'}
]);
cartoonCats.at(0);// heathcliff, because "0" comes before "garfield" alphabetically



var Cats = Backbone.Collection.extend({
    comparator: function(leftCat, rightCat) {
        // Special case sorting for Heathcliff
        if (leftCat.get('name') == 'Heathcliff') return -1;
        // Sorting rules for all other cats
        if (leftCat.get('name') > rightCat.get('name')) return 1;
        if (leftCat.get('name') < rightCat.get('name')) return -1;
        if (leftCat.get('name') == rightCat.get('name')) return 0;

    }
});
var cartoonCats = new Cats([
    {name: 'Heathcliff'},    {name: 'Garfield'}
]);
cartoonCats.at(0);// heathcliff, because any comparison of his name will return -1