var bookReference = {
    fakeBook: new Book({title: 'Hamlet, Part 2: The Reckoning'})
};
delete bookReference.fakeBook;
// fakeBook now has no references, and will be collected as “garbage”



var exampleModel = new Backbone.Model();
var exampleView = new Backbone.View();
exampleModel.on('change', exampleView.render);
$(document.body).append(exampleView.el);
exampleView.remove();
// exampleView will NOT be garbage collected



example.model.off('change');



exampleModel = new Backbone.Model();
exampleView = new Backbone.View();
exampleModel.listenTo('change', exampleView.render);
$(document.body).append(exampleView.el);
exampleView.remove();
// exampleView WILL be garbage collected