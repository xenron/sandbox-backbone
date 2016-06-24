var BookView = ParentBookView.extend({
    className: ParentBookView.prototype.className + ' book-view',
    initialize: function(options) {
        this.template = options.template ;
        if (!this.template ) {
            throw new Error('The template option is required!');
        }
        _.bindAll(this, 'render');
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
   }
});



BookView = ParentBookView.extend2({
    boundMethods: ['render'],
    className: "book-view",
    propertyOptions: ['template'],
    requiredOptions: ['template']
});