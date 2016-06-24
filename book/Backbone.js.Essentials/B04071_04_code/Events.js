var cartoonCats = new Cats([{name: 'Garfield'}]);
cartoonCats.on('change', function(changedModel) {
    alert( changedModel.get('name') + ' just changed!');
});
cartoonCats.at(0).set('weight', 'a whole lot'); // alerts 
"Garfield just changed!"