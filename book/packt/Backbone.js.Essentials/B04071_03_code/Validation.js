var Book = Backbone.Model.extend({
    validate: function(attributes) {
        var isValid = this.get('pages') >= 10;
        return isValid;
    }
});
var tooShort = new Book({pages: 5});
var wasAbleToSave = tooShort.save(); // == false



tooShort.save().fail(function() {
    // this code will never be reached
});




var savePromise = tooShort.save();
if (savePromise) {
    savePromise.done(function() {
        // this code will be reached if both the validation and AJAX call succeed
    }).fail(function() {
        // this code will be reached if the validation passes but the AJAX fails
    });
} else {
     // this code will be reached if the validation fails
}