render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
}



var author ={
    firstName: 'Isaac',
    lastName: 'Asimov',
    genre: 'science-fiction'
};
var templateString = '<%= firstName %> <%= lastName %> was a '+
                     'great <%= genre %> author.';
var template = _.template(templateString);
alert(template(author));
// will alert “Isaac Asimov was a great science-fiction author.”



var authorTemplate =  _.template(
    '<h1>' +
        '<%= firstName %> <%= lastName %> was a ' +
        '<em><%= genre %></em> author.' +
    '</h1>'
);
var AuthorView = Backbone.View.extend({
  template: authorTemplate,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
var tolkien = new Backbone.Model({
    firstName: 'J.R.R.', // Tolkien's actual first name was John
    lastName: 'Tolkien',
    genre: 'fantasy'
});
var tolkienView = new AuthorView({model: tolkien});
var tolkientHtml = tolkienView.render().$el.html();
alert(tolkienHtml);
// alerts “<h1>J.R.R. Tolkien was a <em>fantasy</em> author.</h1>”