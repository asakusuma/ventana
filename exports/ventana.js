'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var listenerMap = {
  resize: [],
  move: [],
  destroy: [],
  hide: [],
  show: []
};

var _queue = [];

var cY = 0;
var cX = 0;
var cW = 0;
var cH = 0;
var getScrollTop = undefined;
var getScrollLeft = undefined;

// detect the presence of DOM
var hasDOM = typeof window !== 'undefined' && window && typeof document !== 'undefined' && document;

var rAF = hasDOM && window.requestAnimationFrame;

function generateTrigger(key) {
  return function () {
    var listeners = listenerMap[key],
        len = listeners.length,
        i = 0;
    for (i = 0; i < len; i++) {
      listeners[i].call(null);
    }
  };
}

function flushLoopQueue() {
  var func = _queue.pop();
  while (func) {
    func();
    func = _queue.pop();
  }
}

function setupRafListeners(triggers) {
  var pollForAF = function pollForAF() {
    var nY = getScrollTop();
    var nX = getScrollLeft();
    var nW = window.innerWidth;
    var nH = window.innerHeight;
    if (cY !== nY || cX !== nX) {
      cY = nY;
      cX = nX;
      triggers.move.call(null);
    }
    if (cH !== nH || cW !== nW) {
      cH = nH;
      cW = nW;
      triggers.resize.call(null);
    }
    flushLoopQueue();
    rAF(pollForAF);
  };
  rAF(pollForAF);
}

// Setup native listeners
if (hasDOM) {
  var se = typeof document.scrollingElement !== 'undefined';
  getScrollTop = se ? function () {
    return document.scrollingElement.scrollTop;
  } : function () {
    return window.scrollY;
  };
  getScrollLeft = se ? function () {
    return document.scrollingElement.scrollLeft;
  } : function () {
    return window.scrollX;
  };
  cW = window.innerWidth;
  cH = window.innerHeight;
  var moveTrigger = generateTrigger('move');
  var resizeTrigger = generateTrigger('resize');

  if (rAF) {
    setupRafListeners({
      move: moveTrigger,
      resize: resizeTrigger
    });
  } else {
    console.error('Venana requires requestAnimationFrame()');
  }
  window.addEventListener('unload', generateTrigger('destroy'));
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      generateTrigger('show')();
    } else {
      generateTrigger('hide')();
    }
  });
}

exports['default'] = {
  on: function on(e, callback) {
    var listeners = listenerMap[e];
    if (listeners) {
      listeners.push(callback);
    } else {
      throw 'Ventana does not understand the event "' + e + '"';
    }
  },
  off: function off(e, callback) {
    // TODO
  },
  queue: function queue(func) {
    _queue.push(func);
  },
  mapBoundingRectToAbsolute: function mapBoundingRectToAbsolute(boundingRect) {
    var dimensions = {};
    dimensions.top = boundingRect.top + cY;
    dimensions.left = boundingRect.left + cX;
    dimensions.width = boundingRect.width;
    dimensions.height = boundingRect.height;
    return dimensions;
  },
  getWindowRect: function getWindowRect(offset) {
    offset = offset || {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    return {
      top: cY + offset.top,
      left: cX + offset.left,
      height: cH - offset.top - offset.bottom,
      width: cW - offset.left - offset.right
    };
  }
};
module.exports = exports['default'];