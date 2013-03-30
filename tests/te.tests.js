test("Should verify using input that templates are supported", function() {
  // arrange
  var input = {'content':''},
  	  expected = true;
  // act
      actual = te.supportsTemplate(input);
  // assert
  equal(actual, expected);
});

test("Should verify using input that templates are not supported", function() {
  // arrange
  var input = {};
      expected = false;
  // act
      actual = te.supportsTemplate(input);
  // assert
  equal(actual, expected);
});

test("Should verify using 'document' that templates are supported", function() {
  // arrange
  var expected = 'content' in document.createElement('template'),
  // act
      actual = te.supportsTemplate();
  // assert
  equal(actual, expected);
});