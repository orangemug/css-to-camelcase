var assert = require("assert");
var convert = require("../");

var tests = [
  ["-webkit-column-count", "webkitColumnCount"],
  ["column-count", "columnCount"]
];

describe('css-to-camelcase', function() {
  tests.forEach(function(item, idx) {
    it("test"+idx, function() {
      var out = convert(item[0]);
      assert.equal(out, item[1]);
    });
  });
});

