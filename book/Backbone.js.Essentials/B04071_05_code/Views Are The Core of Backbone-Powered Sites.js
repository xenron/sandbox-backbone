someModel.attributes.foo = 'bar'; // don't do this
$('#foo').append(someView.el); // feel free to do this



var MyView = Backbone.View.extend({
    // instance properties and methods of MyView go here
}, {
    // static properties and methods of MyView go here
});