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
  var te = function() {
  };

  te.supportsTemplate = function(el) {
    el = typeof el !== 'undefined' ? el : document.createElement('template');
    return 'content' in el;
  };

  return te;
}());