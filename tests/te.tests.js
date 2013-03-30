test("Should verify that templates are supported", function() {
  // arrange
  var input = {'content':''};
  var expected = true;
  // act
  var actual = te.supportsTemplate(input);
  // assert
  equal(actual, expected);
});

test("Should verify that templates are not supported", function() {
  // arrange
  var input = {};
  var expected = false;
  // act
  var actual = te.supportsTemplate(input);
  // assert
  equal(actual, expected);
});