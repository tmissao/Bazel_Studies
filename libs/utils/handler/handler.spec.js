const concat = require('./handler').concat

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
});
  
  
describe("Handler", function() {
    it("Testing Concat Multiple", function() {
      expect(concat(["a", "b", "c"])).toBe("a,b,c");
    });
    it("Testing Concat", function() {
        expect(concat(["a"])).toBe("b");
    });
});
  