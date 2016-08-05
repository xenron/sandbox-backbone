var Book = Backbone.Model.extend({urlRoot: '/book/'});
var Page = Backbone.View.extend({
    render: function() {
        var data = this.model ? this.model.toJSON() : {};
        this.$el.html(this.template(data));
        return this;
    }
});
var BookPage = Page.extend({
   template: 'Title: <%= title %>' 
});
var SiteRouter = new Backbone.Router({
    route: {
        'book/:bookId(/)': 'bookRoute'
    },
    bookRoute: function(bookId) {
        var book = new Book({id:  bookId});
        book.fetch().done(function() {
            var page = new BookPage({model: book});
            page.render();
        });
    }
});




var StandardSidebar = Backbone.View.extend({
    // Logic for rendering the standard sidebar

});
Page = Backbone.View.extend({
    sideBarClass:  StandardSidebar,

    render: function() {
        // render the base page HTML
        this.$el.html('<div id=”sidebar”></div>' +
                      '<div id=”content”></div>');

        // render the sidebar
        var sidebar = new this.sideBarClass({
            el: this.$('#sidebar')
        });
        sidebar.render();

        // logic for rendering the content area would go here
        return this;
    }
});
var AlternateSidebar  = Backbone.View.extend({
    // Logic for rendering the alternate sidebar
});
var AlternateSidebarPage = Page.extend({
   sidebarClass: AlternateSidebar
});