var FormView = Backbone.View.extend({
    id: 'clickableForm',
    initialize: function() {
        this.$el.on('click', _.bind(this.handleClick, this));
    },
    handleClick: function() {
        alert('You clicked on ' + this.id + '!');
    }
});
var $form = new FormView().$el;
$form.click(); // alerts “You clicked on clickableForm!”



var FormView = Backbone.View.extend({
    events: {'click': 'handleClick'},
    id: 'clickableForm',

    handleClick: function() {
        alert('You clicked on ' + this.id + '!');
    }
});
var $form = new FormView().$el;
$form.click(); // alerts “You clicked on clickableForm!”



var formView = new Backbone.View({el: '#someForm'});
formView.setElement($('#someOtherForm'));
// formView.el == someOtherForm