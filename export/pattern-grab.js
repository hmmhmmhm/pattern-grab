!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.patternGrab=t():e.patternGrab=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.patternGrab=t.getPositions=void 0;t.getPositions=function(e,t){for(var n=null,r=[],o=new RegExp(e);null!==(n=o.exec(t));)r.push([n.index,n.index+n[0].length]);return r};t.patternGrab=function(e){var n=e.regex,r=e.string,o=t.getPositions(n,r),u=[],i=[];if(0===o.length)return{data:u,positions:i};if(0!==o[0][0]){var s=o.shift();u.push(r.substr(0,s[0])),i.push(u.length),u.push(r.substr(s[0],s[1]-s[0]))}for(var f in o){var a=o[f],l=o[Number(f)+1];i.push(u.length),u.push(r.substr(a[0],a[1]-a[0])),l&&a[1]!=l[0]&&u.push(r.substr(a[1],l[0]-a[1]))}if(o[o.length-1]){var p=o[o.length-1][1];p!==r.length&&u.push(r.substr(p,r.length-p))}return{data:u,positions:i}},t.default=t.patternGrab}]).default}));