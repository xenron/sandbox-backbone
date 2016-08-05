var Book = Backbone.Model.extend({idAttribute: 'deweyDecimalNumber'})
var warAndPeace = new Book({{deweyDecimalNumber: '082 s 891.73/3'});
warAndPeace.get('deweyDecimalNumber'); // '082 s 891.73/3'
warAndPeace.id; // also '082 s 891.73/3'



var warAndPeace = new Book({deweyDecimalNumber: '082 s 891.73/3'});
var fiftyShades = new Book();
warAndPeace.isNew(); // false
fiftyShades.isNew(); // true



var warAndPeace = new Backbone.Model({{id: 55});
var shades = new Backbone.Model();
var bookGroup = {};
bookGroup[warAndPeace.id] =  warAndPeace; // bookGroup = {55: 
warAndPeace}
bookGroup[shades.id] = shades;// doesn't work because shades.id is undefined



var bookGroup = {};
bookGroup[warAndPeace.cid] = warAndPeace;// bookGroup = {c1: 
warAndPeace}
bookGroup[fiftyShades .cid] = fiftyShades;
// bookGroup = {c1: warAndPeace, c2: fiftyShades};