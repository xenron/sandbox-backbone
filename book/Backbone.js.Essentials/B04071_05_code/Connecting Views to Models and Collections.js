var book = new Backbone.Model({title: 'Another Fake Title? Why?'});
var bookView = new Backbone.View({model: book});
// book == bookView.model;



render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
}