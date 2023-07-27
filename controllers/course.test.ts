var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present sir', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var a = 2;
describe('testing', function(){
    it("test", function () {
        if (a !== 2)
            throw new Error("a should equal 2");
    });
});
// it("test", function () {
//     if (a !== 2)
//         throw new Error("a should equal 2");
// });