var template = '<ul>' +
    '{{#each people}}' +
    '<li>' +
        '{{#if this.isMale}}Mr.{{else}}Ms.{{/if}} {{this.lastName}}' +
    '</li>' +
    '{{/each}}' +
'</ul>';
var compiledTemplate = Handlebars.compile(template);
var TemplatedView = Backbone.View.extend({
    render: function() {
        var templatedHtml = compiledTemplate(this.model.toJSON());
        this.$el.html(templatedHtml);
        return this;
    }
});