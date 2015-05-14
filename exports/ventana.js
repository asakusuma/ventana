(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['ventana'] = factory();
  }
}(this, function () {

var _require = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ventana":[function(_dereq_,module,exports){
'use strict';

var listenerMap = {
  resize: [],
  move: [],
  destroy: [],
  hide: [],
  show: []
};

function generateTrigger(key) {
  return function() {
    var listeners = listenerMap[key], len = listeners.length, i = 0;
    for (i = 0; i < len; i++) {
      listeners[i].call(null);
    }
  }
}


// Setup native listeners
window.addEventListener('scroll', generateTrigger('move'));
window.addEventListener('resize', generateTrigger('resize'));
window.addEventListener('unload', generateTrigger('destroy'));
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    generateTrigger('show')();
  } else {
    generateTrigger('hide')();
  }
});

module.exports = {
  on: function(e, callback) {
    var listeners = listenerMap[e];
    if (listeners) {
      listeners.push(callback);
    } else {
      throw 'Ventana does not understand the event "' + e + '"';
    }
  },
  off: function(e, callback) {
    // TODO
  },
  mapBoundingRectToAbsolute: function(boundingRect) {
    var dimensions = {};
    dimensions.top = boundingRect.top + window.scrollY;
    dimensions.left = boundingRect.left + window.scrollX;
    dimensions.width = boundingRect.width;
    dimensions.height = boundingRect.height;
    return dimensions;
  },
  getWindowRect: function(offset) {
    offset = offset || {};
    return {
      top: (window.scrollY || window.pageYOffset) + (offset.top ? offset.top : 0),
      left: (window.scrollX || window.pageXOffset) + (offset.left ? offset.left : 0),
      height: window.innerHeight - (offset.top ? offset.top : 0) - (offset.bottom ? offset.bottom : 0),
      width: window.innerWidth - (offset.left ? offset.left : 0) - (offset.right ? offset.right : 0)
    };
  }
};
},{}]},{},["ventana"]);

return _require("ventana");

}));
