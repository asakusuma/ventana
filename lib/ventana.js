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

export default {
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