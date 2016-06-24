foo: function() {
    this.bar += 1;
    this.baz();
}



fetchThenDoFoo: function() {
    this.fetch().done(this.foo);
}



describe('foo', function() {
    var bazStub,
        example;
    beforeEach(function() {
        example = new ExampleModel();
        // Replace "baz" with a fake version that does nothing
        bazStub = sinon.stub(example, 'baz');
    });
    it('calls baz', function() {
        example.foo();
        expect(bazStub.calledOnce).to.be(true); // was baz called?
    });
    afterEach(function() {
        // Restore the original baz (in case another test uses it)
        baz.restore();
    });
});



 var fetchStub,
        fooStub,
        example;
    beforeEach(function() {
        example = new ExampleModel();
        // Replace the real "fetch" with a fake one that returns
        // an already-resolved $.Deferred
        var deferred = new $.Deferred().resolve();
        fetchStub = sinon.stub(example, 'fetch')
                         .returns(deferred);
        // Since we only want to test whether or not foo was 

        // called, we can also use a stub for it
        fooStub = sinon.stub(example, 'foo');
    });
    it('calls foo after fetch completes', function() {
        example.fetchThenDoFoo();
        expect(fooStub.calledOnce).to.be(true);
    });
    afterEach(function() {
        // Restore the original versions of our stubss
        fetchStub.restore();
        fooStub.restore();
    });
});