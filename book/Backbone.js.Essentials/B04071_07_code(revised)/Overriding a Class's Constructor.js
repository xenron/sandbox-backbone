var FictionOrNonFictionBooks = Backbone.Collection.extend({
    constructor: function(models, options) {
        if (models[0].isFiction) {
            options.model = FictionBook;
        } else {
            options.model = NonFictionBook;
        }
        return Backbone.Collection.apply(models, options);
    }
});