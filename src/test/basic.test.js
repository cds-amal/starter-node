const subject = require("../index.js");
const assert = require("assert");

describe("Main Functionality", () => {

  it("displays path", () => {
    let fn = subject.magic(".", "a", "b", "c");
    const expected = "a/b/c";
    assert.strictEqual(
      fn,
      expected
    ); 
  });

  describe('on [ @win ]', () => {
    it("displays path [ @win ]", () => {
      let fn = subject.magic(".", "a", "b", "c");
      const expected = "a\\b\\c";
      assert.strictEqual(
        fn,
        expected
      ); 
    });
  });

});
