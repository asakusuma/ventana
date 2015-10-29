let listenerMap = {
  resize: [],
  move: [],
  destroy: [],
  hide: [],
  show: []
};

let cY = 0;
let cX = 0;
let cW = 0;
let cH = 0;

// detect the presence of DOM
let hasDOM = (typeof window !== 'undefined') && window
    && (typeof document !== 'undefined') && document;

let rAF = hasDOM && window.requestAnimationFrame;

let se = typeof document.scrollingElement !== 'undefined';
let getScrollTop = se ? () => document.scrollingElement.scrollTop : () => window.scrollY;
let getScrollLeft = se ? () => document.scrollingElement.scrollLeft : () => window.scrollX;

function generateTrigger(key) {
  return () => {
    let listeners = listenerMap[key], len = listeners.length, i = 0;
    for (i = 0; i < len; i++) {
      listeners[i].call(null);
    }
  }
}

function setupRafListeners(triggers) {
  let pollForAF = () => {
    let nY = getScrollTop();
    let nX = getScrollLeft();
    let nW = window.innerWidth;
    let nH = window.innerHeight;
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
  cW = window.innerWidth;
  cH = window.innerHeight;
  let moveTrigger = generateTrigger('move');
  let resizeTrigger = generateTrigger('resize');

  if (rAF) {
    setupRafListeners({
      move: moveTrigger,
      resize: resizeTrigger
    });
  } else {
    console.error('Venana requires requestAnimationFrame()');
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
    dimensions.top = boundingRect.top + cY;
    dimensions.left = boundingRect.left + cX;
    dimensions.width = boundingRect.width;
    dimensions.height = boundingRect.height;
    return dimensions;
  },
  getWindowRect(offset) {
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
