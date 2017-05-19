var assert = require('assert');
var jenkTest = require('./../app').jenkTest;
var jenkSuccTest = require('./../app').jenkSuccTest;

suite('jenkins test', function() {
  test('Jenkins Test should return Hello World', function() {
    assert.equal('helloWorld', jenkTest());
  });
  test("Jenkin Succ test", function(){
      assert.equal( 7, jenkSuccTest(6));
  });
});

