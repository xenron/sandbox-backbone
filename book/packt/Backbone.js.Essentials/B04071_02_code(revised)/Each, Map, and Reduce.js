var mythicalAnimals = ['Unicorn', 'Dragon', 'Honest Politician'];
_.each(mythicalAnimals, function(animalName, index) {
    alert('Animal #' + index + ' is ' + animalName);
});



var mythicalAnimals = ['Unicorn', 'Dragon', 'Honest Politician'];
for (var index = 0; index < mythicalAnimals.length; index++) {
    var animalName = mythicAnimals[index];
    alert('Animal #' + index + ' is ' + animalName);
}



for (var index in mythicalAnimals) {
    var animalName = mythicalAnimals[index];
    alert('Animal #' + index + ' is ' + animalName);
}



var stringNumbers = ["5", "10", "15"];
var BASE = 10; // when we parse strings in to numbers in
               // JavaScript we have to specify which base to use
var actualNumbers = _.map(stringNumbers, function(numberString, index) {
    return parseInt(numberString, BASE);
}); // actualNumbers == [5, 10, 15]



var total = _.reduce(actualNumbers, function(total, actualNumber) {
    return total +  actualNumber;
}, 0); // total == 30