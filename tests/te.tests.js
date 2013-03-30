test("Should verify that templates are supported", function() {
  // arrange
  var expected = 'content' in document.createElement('template'),
  // act
      actual = te.supportsTemplate();
  // assert
  equal(actual, expected);
});