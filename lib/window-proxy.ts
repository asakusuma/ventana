// detect the presence of DOM
let hasDOM = (typeof window !== 'undefined') && window
    && (typeof document !== 'undefined') && document;
var rAF = hasDOM && (<any>window).requestAnimationFrame;

var getScrollTop, getScrollLeft, getHeight, getWidth;
getScrollTop = getScrollLeft = getHeight = getWidth = () => 0;

function hasDomSetup() {
  let se = typeof (<any>document).scrollingElement !== 'undefined';
  getScrollTop = se ? () => (<any>document).scrollingElement.scrollTop : () => (<any>window).scrollY;
  getScrollLeft = se ? () => (<any>document).scrollingElement.scrollLeft : () => (<any>window).scrollX;
  getHeight = () => (<any>window).innerWidth;
  getWidth = () => (<any>window).innerHeight;
}

if (hasDOM) {
  (<any>document).addEventListener('DOMContentLoaded', hasDomSetup);
}

export {
  getScrollTop,
  getScrollLeft,
  getWidth,
  getHeight,
  rAF
};
