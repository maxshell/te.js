/**
* te.js - A JavaScript Node Creation Tool
*
* https://github.com/maxshell/te.js
*
* Copyright 2013 Maxim Shelupenko
* Released under the MIT license.
* http://en.wikipedia.org/wiki/MIT_License
*/
var te = (function (document) {
    'use strict';
    var templSel = 'template',
        supportsTemplate = function (el) {
            el = el !== undefined ? el : document.createElement(templSel);
            return el.hasOwnProperty('content');
        },
        init = function (elSel, attrs) {
            elSel = elSel !== undefined ? elSel : templSel;
            attrs = attrs !== undefined ? attrs : [];
            var templ = document.querySelector(elSel),
                i,
                childEl,
                templInner,
                isModel = false,
                result = null;
            if (!(attrs instanceof Array)) {
                isModel = true;  
            }
            if (templ !== null && supportsTemplate(templ)) {
                if (!isModel) {
                    for (i = 0; i < attrs.length; i = i + 1) {
                        childEl = templ.content.querySelector(attrs[i].s);
                        if (childEl !== null) {
                            childEl[attrs[i].a] = attrs[i].v;
                        }
                    }
                }
                else {
                    templInner = templ.innerHTML;
                    for(i in attrs) {
                        templInner = templInner.replace('{{'+i+'}}', attrs[i]);
                    }
                    templ.innerHTML = templInner;
                }
                result = templ;
            }
            return result;
        },
        te = function (parentSel, elSel, attrs) {
            if (parentSel !== undefined) {
                var parent = document.querySelector(parentSel),
                    templ = init(elSel, attrs),
                    newNode;
                if (parent !== null && templ !== null) {
                    newNode = templ.content.cloneNode(true);
                    parent.appendChild(newNode);
                }
            }
        };
    te.init = init;
    te.supportsTemplate = supportsTemplate;

    return te;
}(document));
