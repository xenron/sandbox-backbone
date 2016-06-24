var VariableTagView = Backbone.View.extend({
    tagName: function() {
        if (this.collection) {
            return 'select';
        } else {
            return 'input';
        }
    }
});