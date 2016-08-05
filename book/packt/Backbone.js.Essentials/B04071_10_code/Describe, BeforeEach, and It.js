expect(1).to.be(1); // asserts that 1 === 1
expect(1).not.to.be(2); // asserts that 1 !== 2
expect(1).to.eql("1") // asserts that 1 == "1"
expect(1).to.be.ok(); // asserts that 1 is "truthy"
expect(1).to.be.a('number'); // asserts typeof 1 === 'number'