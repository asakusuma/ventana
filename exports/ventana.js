!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ventana",[],e):"object"==typeof exports?exports.ventana=e():t.ventana=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var o,r;o=[n,e,n(1),n(7)],r=function(t,e,n,o){var r={init:function(){},onScroll:function(t){n["default"].listen(t)},onViewport:o["default"]};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r;o=[n,e,n(2),n(6)],r=function(t,e,n,o){var r=-1;Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n["default"].filter(function(t){var e=t.scrollTop;return t.phase===o.RAFPhase.MEASURE&&e!==r?(r=e,{timestamp:t.timestamp,position:e}):void 0})}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r,i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};o=[n,e,n(3),n(5),n(6)],r=function(t,e,n,o,r){var u=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.write=function(e){var n=new r.Frame;n.phase=r.RAFPhase.MEASURE,n.scrollTop=o["default"].getScrollTop(),n.scrollLeft=o["default"].getScrollLeft(),n.width=o["default"].getWidth(),n.height=o["default"].getHeight(),t.prototype.write.call(this,n),n.phase=r.RAFPhase.MUTATE,t.prototype.write.call(this,n)},e}(n["default"]),c=new u("requestAnimationFrame"),a=function(){c.write(Date.now()),o["default"].rAF(a)};o["default"].rAF(a),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=c}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r;o=[n,e,n(4)],r=function(t,e,n){var o=function(){function t(t){void 0===t&&(t="anonymous"),this.name=t,this.targets=[]}return t.prototype.write=function(e){this.targets.forEach(function(o){o instanceof t?o.write(e):o instanceof n["default"]?o.tap(e):"function"==typeof o&&o(e)})},t.prototype.listen=function(t){this.targets.push(t)},t.prototype.throttle=function(){},t.prototype.filter=function(e){var n=new t;return this.listen(function(t){var o=e(t);o&&n.write(o)}),n},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r;o=[n,e],r=function(t,e){var n=function(){function t(t,e){this.name=t,this.items=[],this.collect=e}return t.prototype.push=function(t){this.items.push(t)},t.prototype.tap=function(t){var e=this;this.items.forEach(function(n){e.intercept(t,n)||e.collect(t,n)})},t.prototype.intercept=function(t,e){return!1},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r;o=[n,e],r=function(t,e){function n(){var t="undefined"!=typeof document.scrollingElement;i.getScrollTop=t?function(){return document.scrollingElement.scrollTop}:function(){return window.scrollY},i.getScrollLeft=t?function(){return document.scrollingElement.scrollLeft}:function(){return window.scrollX},i.getHeight=function(){return window.innerHeight},i.getWidth=function(){return window.innerWidth}}var o="undefined"!=typeof window&&window&&"undefined"!=typeof document&&document,r=function(){return 0},i={};i.getScrollTop=i.getScrollLeft=i.getHeight=i.getWidth=r,i.rAF=o&&window.requestAnimationFrame.bind(window),o&&("loading"!==document.readyState?n():document.addEventListener("DOMContentLoaded",n)),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r;o=[n,e],r=function(t,e){var n;!function(t){t[t.MEASURE=0]="MEASURE",t[t.MUTATE=1]="MUTATE"}(n||(n={})),e.RAFPhase=n;var o=function(){function t(){}return t.prototype.isMeasure=function(){return this.phase===n.MEASURE},t}();e.Frame=o}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r,i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};o=[n,e,n(2),n(8),n(9)],r=function(t,e,n,o,r){function u(t,e,n){var o=new c(t,e,n);a.push(o)}var c=function(t){function e(e,n,o){this.id=e,this.el=n,this.callback=o,t.call(this)}return i(e,t),e}(r["default"]),a=new o["default"]("Viewport",function(t,e){var n=e.bcr.top<t.height&&e.bcr.top+e.bcr.height>0&&e.bcr.left<t.width&&e.bcr.left+e.bcr.width>0;!e.inViewport&&n&&e.callback(),e.inViewport=n});n["default"].listen(a),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r,i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};o=[n,e,n(4)],r=function(t,e,n){var o=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.intercept=function(t,e){return t.isMeasure()?(e.bcr=e.el.getBoundingClientRect(),!0):!1},e}(n["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o}.apply(e,o),!(void 0!==r&&(t.exports=r))},function(t,e,n){var o,r;o=[n,e],r=function(t,e){var n=function(){function t(){}return t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}.apply(e,o),!(void 0!==r&&(t.exports=r))}])});