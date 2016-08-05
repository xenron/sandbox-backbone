var router = new Backbone.Router({
    routes: {
        foo: function() {
            alert('You have navigated to the "foo" route!');
        }
    }
});
router.navigate('foo', {trigger: true});


router.navigate('bar', {replace: true, trigger: true});