/**
* te.js - A JavaScript Node Creation Tool
*
* https://github.com/maxshell/te.js
*
* Copyright 2013 Maxim Shelupenko
* Released under the MIT license.
* http://en.wikipedia.org/wiki/MIT_License
*/
window.te = (function () {
  var te = function (elSel, parentSel, attrs) {

    elSel = typeof elSel !== 'undefined' ? elSel : "template";
    parentSel = typeof parentSel !== 'undefined' ? parentSel : "body";
    attrs = typeof attrs !== 'undefined' ? attrs : [];

    var templ = document.querySelector(elSel),
        parent = document.querySelector(parentSel);

    if (templ !== null && parent !== null && supportsTemplate(templ)) {
      for(var i = 0; i < attrs.length; i++) {
        var childEl = templ.content.querySelector(attrs[i].s);
        if (childEl !== null) {
          childEl[attrs[i].a] = attrs[i].v;
        }
      }
    var newNode = templ.content.cloneNode(true);
      parent.appendChild(newNode);
    }
  };

  var supportsTemplate =  function(el) {
    el = typeof el !== 'undefined' ? el : document.createElement('template');
    return 'content' in el;
  };

  te.supportsTemplate = supportsTemplate;

  return te;
}());