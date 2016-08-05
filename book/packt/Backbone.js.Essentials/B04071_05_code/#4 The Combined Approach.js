var ListItemView = Backbone.View({
    tagName: 'li',
    template: _.template('<%= value1 %> <%= value2 %> are both ' +
                         'values, just like <%= value3 %>'),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
var ListView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    this.$el.toggleClass('boldList', this.model.get('isBold'));
    this.$el.toggleClass('largeFontList',
                         this.model.get('useLargeFont'));
    this.$el.empty();
    this.collection.each(function(model) {
        var itemView = new ListItemView({model: model});
        this.$el.append(itemView.render().el);
    }, this);
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});