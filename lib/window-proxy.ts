// detect the presence of DOM
var nop = () => 0;

interface WindowProxy {
  hasDOM: boolean;
  getScrollTop: Function;
  getScrollLeft: Function;
  getHeight: Function;
  getWidth: Function;
  rAF: Function;
}

let hasDOM = !!((typeof window !== 'undefined') && window && (typeof document !== 'undefined') && document);

let W: WindowProxy = {
  hasDOM,
  getScrollTop: nop,
  getScrollLeft: nop,
  getHeight: nop,
  getWidth: nop,
  rAF: hasDOM && (<any>window).requestAnimationFrame.bind(window)
};

function hasDomSetup() {
  let se = typeof (<any>document).scrollingElement !== 'undefined';
  W.getScrollTop = se ? () => (<any>document).scrollingElement.scrollTop : () => (<any>window).scrollY;
  W.getScrollLeft = se ? () => (<any>document).scrollingElement.scrollLeft : () => (<any>window).scrollX;
  W.getHeight = () => (<any>window).innerHeight;
  W.getWidth = () => (<any>window).innerWidth;
}

if (hasDOM) {
  if ((<any>document).readyState !== 'loading') {
    hasDomSetup();
  } else {
    (<any>document).addEventListener('DOMContentLoaded', hasDomSetup);
  }
}

export {
  WindowProxy
};

export default W;
