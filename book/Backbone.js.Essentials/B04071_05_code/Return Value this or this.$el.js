var ViewThatReturnsThis = Backbone.View.extend({
    render: function() {
        // do the rendering
        return this;
    }
});
var childView = new ViewThatReturnsThis();
parentView.$el.append(childView.render().$el);



var ViewThatReturns$el = Backbone.View.extend({
    render: function() {
        // do the rendering
        return this.$el;
    }
});
var childView = new ViewThatReturns$el();
parentView.$el.append(childView.render());