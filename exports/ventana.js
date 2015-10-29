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

// detect the presence of DOM
var hasDOM = typeof window !== 'undefined' && window && typeof document !== 'undefined' && document;

var rAF = hasDOM && window.requestAnimationFrame;

var se = typeof document.scrollingElement !== 'undefined';
var getScrollTop = se ? function () {
  return document.scrollingElement.scrollTop;
} : function () {
  return window.scrollY;
};
var getScrollLeft = se ? function () {
  return document.scrollingElement.scrollLeft;
} : function () {
  return window.scrollX;
};

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

function setupRafListeners(triggers) {
  var cY = 0;
  var cX = 0;
  var cW = window.innerWidth;
  var cH = window.innerHeight;
  var pollForAF = function pollForAF() {
    var nY = getScrollTop();
    var nX = getScrollLeft();
    var nH = window.innerWidth;
    var nW = window.innerHeight;
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
    rAF(pollForAF);
  };
  rAF(pollForAF);
}

// Setup native listeners
if (hasDOM) {
  var moveTrigger = generateTrigger('move');
  var resizeTrigger = generateTrigger('resize');

  if (rAF) {
    setupRafListeners({
      move: moveTrigger,
      resize: resizeTrigger
    });
  } else {
    window.addEventListener('scroll', moveTrigger);
    window.addEventListener('resize', resizeTrigger);
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
  mapBoundingRectToAbsolute: function mapBoundingRectToAbsolute(boundingRect) {
    var dimensions = {};
    dimensions.top = boundingRect.top + getScrollTop();
    dimensions.left = boundingRect.left + getScrollLeft();
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
      top: getScrollTop() + offset.top,
      left: getScrollLeft() + offset.left,
      height: window.innerHeight - offset.top - offset.bottom,
      width: window.innerWidth - offset.left - offset.right
    };
  }
};
module.exports = exports['default'];