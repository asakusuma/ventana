// detect the presence of DOM
let hasDOM = (typeof window !== 'undefined') && window
    && (typeof document !== 'undefined') && document;
var nop = () => 0;
var W = {};
W.getScrollTop = W.getScrollLeft = W.getHeight = W.getWidth = nop;

W.rAF = hasDOM && (<any>window).requestAnimationFrame.bind(window);

function hasDomSetup() {
  let se = typeof (<any>document).scrollingElement !== 'undefined';
  W.getScrollTop = se ? () => (<any>document).scrollingElement.scrollTop : () => (<any>window).scrollY;
  W.getScrollLeft = se ? () => (<any>document).scrollingElement.scrollLeft : () => (<any>window).scrollX;
  W.getHeight = () => (<any>window).innerWidth;
  W.getWidth = () => (<any>window).innerHeight;
}

if (hasDOM) {
  if ((<any>document).readyState !== 'loading') {
    hasDomSetup();
  } else {
    (<any>document).addEventListener('DOMContentLoaded', hasDomSetup);
  }
}

export default W;
