// detect the presence of DOM
let hasDOM = (typeof window !== 'undefined') && window
    && (typeof document !== 'undefined') && document;
var rAF = hasDOM && window.requestAnimationFrame;

var getScrollTop, getScrollLeft, getHeight, getWidth;
getScrollTop = getScrollLeft = getHeight = getWidth = () => 0;

function hasDomSetup() {
  let se = typeof document.scrollingElement !== 'undefined';
  getScrollTop = se ? () => document.scrollingElement.scrollTop : () => window.scrollY;
  getScrollLeft = se ? () => document.scrollingElement.scrollLeft : () => window.scrollX;
  getHeight = () => window.innerWidth;
  getWidth = () => window.innerHeight;
}

if (hasDOM) {
  document.addEventListener('DOMContentLoaded', hasDomSetup);
}

export var getScrollTop;
export var getScrollLeft;
export var getWidth;
export var getHeight;
export var rAF;
