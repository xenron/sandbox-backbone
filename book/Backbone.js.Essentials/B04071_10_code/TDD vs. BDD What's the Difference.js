suite('Model', function() {
    var testModel;
    setUp(function() {
        testModel = new Backbone.Model();
    });
    suite('#set', function() {
        test('set adds a value to the model\'s attributes', function() {
            testModel.set('a', 1);
            expect(testModel.attributes.a).to.be(1);
        });
    });
});



describe('Model', function() {
    var testModel;
    beforeEach(function() {
        testModel = new Backbone.Model();
    });
    describe('#set', function() {
        it('sets a value that "get" can retrieve', function() {
            testModel.set('a', 1);
            expect(testModel.get('a')).to.be(1);
        });
    });
});