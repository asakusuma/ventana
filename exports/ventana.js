!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.linkedinventana=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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

exports['default'] = {
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
      top: window.scrollY + (offset.top ? offset.top : 0),
      left: window.scrollX + (offset.left ? offset.left : 0),
      height: window.innerHeight - (offset.top ? offset.top : 0) - (offset.bottom ? offset.bottom : 0),
      width: window.innerWidth - (offset.left ? offset.left : 0) - (offset.right ? offset.right : 0)
    };
  }
};
},{}]},{},[1])
(1)
});