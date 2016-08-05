var formView = new Backbone.View({tagName: 'form'});
formView.$el.is('form'); // returns true



var formView = new Backbone.View({
    el: '<form><input value=”foo” /></form>'
});
var $input = formView.$('input');
$input.val(); // == “foo”