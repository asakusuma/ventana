let listenerMap = {
  resize: [],
  move: [],
  destroy: [],
  hide: [],
  show: []
};

// detect the presence of DOM
let hasDOM = (typeof window !== 'undefined') && window
    && (typeof document !== 'undefined') && document;

let rAF = hasDOM && window.requestAnimationFrame;

function generateTrigger(key) {
  return () => {
    let listeners = listenerMap[key], len = listeners.length, i = 0;
    for (i = 0; i < len; i++) {
      listeners[i].call(null);
    }
  }
}

function setupRafListeners(triggers) {
  let cY = window.pageYOffset;
  let cX = window.pageXOffset;
  let cW = window.innerWidth;
  let cH = window.innerHeight;
  let pollForAF = () => {
    let nY = window.pageYOffset;
    let nX = window.pageXOffset;
    let nH = window.innerWidth;
    let nW = window.innerHeight;
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
  }
  rAF(pollForAF);
}

// Setup native listeners
if (hasDOM) {
  let moveTrigger = generateTrigger('move');
  let resizeTrigger = generateTrigger('resize');

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
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      generateTrigger('show')();
    } else {
      generateTrigger('hide')();
    }
  });
}

export default {
  on(e, callback) {
    let listeners = listenerMap[e];
    if (listeners) {
      listeners.push(callback);
    } else {
      throw 'Ventana does not understand the event "' + e + '"';
    }
  },
  off(e, callback) {
    // TODO
  },
  mapBoundingRectToAbsolute(boundingRect) {
    let dimensions = {};
    dimensions.top = boundingRect.top + window.scrollY;
    dimensions.left = boundingRect.left + window.scrollX;
    dimensions.width = boundingRect.width;
    dimensions.height = boundingRect.height;
    return dimensions;
  },
  getWindowRect(offset) {
    offset = offset || {};
    return {
      top: (window.scrollY || window.pageYOffset) + (offset.top ? offset.top : 0),
      left: (window.scrollX || window.pageXOffset) + (offset.left ? offset.left : 0),
      height: window.innerHeight - (offset.top ? offset.top : 0) - (offset.bottom ? offset.bottom : 0),
      width: window.innerWidth - (offset.left ? offset.left : 0) - (offset.right ? offset.right : 0)
    };
  }
};
