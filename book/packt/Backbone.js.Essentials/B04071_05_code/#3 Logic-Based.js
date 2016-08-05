var AuthorView = Backbone.View.extend({
  render: function() {
    var h1View = new Backbone.View({tagName: 'h1'});
    var emView = new Backbone.View({tagName: 'em'});
    emView.text(this.model.get('genre'));
    h1View.$el.html(this.model.get('firstName') + ' ' +
                    this.model.get('lastName') + ' was a ');
    h1View.$el.append(emView.el, ' author.');
    this.$el.html(h1View.el);
    return this;
  }
});