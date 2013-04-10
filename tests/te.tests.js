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

test("Should activate template", function() {
  // arrange
  var parentSel = "#qunit-fixture",
      elSel = "#mytemplate",
      attrs = [{'s':'img','a':'src','v':'1.png'},{'s':'.comment','a':'innerHTML','v':'Hello, World!'}];
  // act
  te(parentSel, elSel, attrs);
  // assert
  equal(document.getElementById('myimg').getAttribute('src'), '1.png');
  equal(document.getElementById('mydiv').innerHTML, 'Hello, World!');
});

test("Check that template is disabled by default", function() {
  // arrange
  // act

  // assert
  equal(document.getElementById('myimg'), null);
  equal(document.getElementById('mydiv'), null);
});

test("Should activate template without parameters", function() {
  // arrange
  var parentSel = "#qunit-fixture",
      elSel = "#mytemplate";
  // act
  te(parentSel, elSel);
  // assert
  notEqual(document.getElementById('myimg'), null);
  notEqual(document.getElementById('mydiv'), null);
});

test("Should activate template without parameters and element selector using 'template' as selector", function() {
  // arrange
  var parentSel = "#qunit-fixture";
  // act
  te(parentSel);
  // assert
  notEqual(document.getElementById('myimg'), null);
  notEqual(document.getElementById('myimg'), null);
});

test("Should not activate template without parent selector", function() {
  // arrange
  // act
  te();
  // assert
  equal(document.getElementById('myimg'), null);
  equal(document.getElementById('myimg'), null);
});