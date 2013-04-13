test("Should verify using input that templates are supported", function () {
    // arrange
    var input = { 'content': '' },
        expected = true;
    // act
    actual = te.supportsTemplate(input);
    // assert
    equal(actual, expected);
});

test("Should verify using input that templates are not supported", function () {
    // arrange
    var input = {};
    expected = false;
    // act
    actual = te.supportsTemplate(input);
    // assert
    equal(actual, expected);
});

test("Should verify using 'document' that templates are supported", function () {
    // arrange
    var expected = 'content' in document.createElement('template'),
    // act
        actual = te.supportsTemplate();
    // assert
    equal(actual, expected);
});

test("Should activate template", function () {
    // arrange
    var parentSel = "#qunit-fixture",
        elSel = "#mytemplate",
        attrs = [{ 's': 'img', 'a': 'src', 'v': '1.png' }, { 's': '.comment', 'a': 'innerHTML', 'v': 'Hello, World!' }];
    // act
    te(parentSel, elSel, attrs);
    // assert
    equal(document.getElementById('myimg').getAttribute('src'), '1.png');
    equal(document.getElementById('mydiv').innerHTML, 'Hello, World!');
});

test("Check that template is disabled by default", function () {
    // arrange
    // act

    // assert
    equal(document.getElementById('myimg'), null);
    equal(document.getElementById('mydiv'), null);
});

test("Should activate template without parameters", function () {
    // arrange
    var parentSel = "#qunit-fixture",
        elSel = "#mytemplate";
    // act
    te(parentSel, elSel);
    // assert
    notEqual(document.getElementById('myimg'), null);
    notEqual(document.getElementById('mydiv'), null);
});

test("Should activate template without parameters and element selector using 'template' as selector", function () {
    // arrange
    var parentSel = "#qunit-fixture";
    // act
    te(parentSel);
    // assert
    notEqual(document.getElementById('myimg'), null);
    notEqual(document.getElementById('mydiv'), null);
});

test("Should not activate template without parent selector", function () {
    // arrange
    // act
    te();
    // assert
    equal(document.getElementById('myimg'), null);
    equal(document.getElementById('mydiv'), null);
});

test("Should initialize template without activating", function () {
    // arrange
    var elSel = "#mytemplate",
        attrsFirst = [{ 's': 'img', 'a': 'src', 'v': '1.png' }],
        attrsSecond = [{ 's': '.comment', 'a': 'innerHTML', 'v': 'Hello, World!' }];
    // act
    te.init(elSel, attrsFirst);
    te.init(elSel, attrsSecond)
    // assert
    equal(document.getElementById('mytemplate').content.querySelector('#myimg').getAttribute('src'), '1.png');
    equal(document.getElementById('mytemplate').content.querySelector('#mydiv').innerHTML, 'Hello, World!');
});

test("Should activate template that was previously initialized", function () {
    // arrange
    var parentSel = "#qunit-fixture",
        elSel = "#mytemplate",
        attrsFirst = [{ 's': 'img', 'a': 'src', 'v': '1.png' }],
        attrsSecond = [{ 's': '.comment', 'a': 'innerHTML', 'v': 'Hello, World!' }];
    te.init(elSel, attrsFirst);
    te.init(elSel, attrsSecond)
    // act
    te(parentSel, elSel);
    // assert
    equal(document.getElementById('myimg').getAttribute('src'), '1.png');
    equal(document.getElementById('mydiv').innerHTML, 'Hello, World!');
});

test("Should activate template with model", function () {
    // arrange
    var parentSel = "#qunit-fixture",
        elSel = "#templatemodel",
        attrs = {'altvalue':'Cool image', 'srcvalue':'2.png', 'textvalue':'Hello, World!'};
    te.init(elSel, attrs);
    // act
    te(parentSel, elSel);
    // assert
    equal(document.getElementById('imgmodel').getAttribute('alt'), 'Cool image');
    equal(document.getElementById('imgmodel').getAttribute('src'), '2.png');
    equal(document.getElementById('divmodel').innerHTML, 'Hello, World!');
});

test("Should initialize template that contains model without activating", function () {
    // arrange
    var elSel = "#templatemodel",
        attrsFirst = {'altvalue':'Cool image'},
        attrsSecond = {'srcvalue':'2.png', 'textvalue':'Hello, World!'};
    // act
    te.init(elSel, attrsFirst);
    te.init(elSel, attrsSecond)
    // assert
    equal(document.getElementById('templatemodel').content.querySelector('#imgmodel').getAttribute('alt'), 'Cool image');
    equal(document.getElementById('templatemodel').content.querySelector('#imgmodel').getAttribute('src'), '2.png');
    equal(document.getElementById('templatemodel').content.querySelector('#divmodel').innerHTML, 'Hello, World!');
});

test("Should activate mixed template that was previously initialized using different types of attributes", function () {
    // arrange
    var parentSel = "#qunit-fixture",
        elSel = "#templatemixed",
        attrsFirst = {'altvalue':'Cool image'},
        attrsSecond = [{ 's': '#imgmixed', 'a': 'src', 'v': '2.png' }],
        attrsThird = [{ 's': '.commentmixed', 'a': 'innerHTML', 'v': 'Hello, World!' }];
    te.init(elSel, attrsFirst);
    te.init(elSel, attrsSecond);
    te.init(elSel, attrsThird);
    // act
    te(parentSel, elSel);
    // assert
    equal(document.getElementById('imgmixed').getAttribute('alt'), 'Cool image');
    equal(document.getElementById('imgmixed').getAttribute('src'), '2.png');
    equal(document.getElementById('divmixed').innerHTML, 'Hello, World!');
});