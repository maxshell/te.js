/**
* te.js - A JavaScript Node Creation Tool
*
* https://github.com/maxshell/te.js
*
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
*/
var te = (function (document) {
    'use strict';
    var templSel = 'template',
        supportsTemplate = function (el) {
            el = el !== undefined ? el : document.createElement(templSel);
            return el.content !== undefined;
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
                } else {
                    templInner = templ.innerHTML;
                    for (i in attrs) {
                        if (attrs.hasOwnProperty(i)) {
                            templInner = templInner.replace('{{' + i + '}}', attrs[i]);
                        }
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
