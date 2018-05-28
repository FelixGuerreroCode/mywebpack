const assert = require("assert");
const add = require("../src/add");
const R = require( "ramda" );

describe("Demo Config assss", () => {
	it("should add correctly for once", () => {
		assert.equal(add(1, 1), 2);
	});
});
