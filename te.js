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
  var templSel = 'template',
      undefType = 'undefined';

  var te = function (parentSel, elSel, attrs) {

    if (typeof parentSel !== undefType) {
      elSel = typeof elSel !== undefType ? elSel : templSel;
      attrs = typeof attrs !== undefType ? attrs : [];

      var templ = document.querySelector(elSel),
          parent = document.querySelector(parentSel);

      if (templ !== null && parent !== null && supportsTemplate(templ)) {
        for (var i = 0; i < attrs.length; i++) {
          var childEl = templ.content.querySelector(attrs[i].s);
          if (childEl !== null) {
            childEl[attrs[i].a] = attrs[i].v;
          }
        }
        var newNode = templ.content.cloneNode(true);
        parent.appendChild(newNode);
      }
    }
  };

  var supportsTemplate = function (el) {
    el = typeof el !== undefType ? el : document.createElement(templSel);
    return 'content' in el;
  };

  te.supportsTemplate = supportsTemplate;

  return te;
}());