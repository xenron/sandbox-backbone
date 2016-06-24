var ListView1 = Backbone.View.extend({
    render: function() {
        this.$el.append(new ListItemView().render().el);
    }
});
var ListView2 = Backbone.View.extend({
    render: function() {
        this.$el.append('<li>');
        new ListItemView({el: this.$('li')}).render();
    }
});