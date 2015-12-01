import scroll from './streams/scroll';
import raf from './streams/raf';
import Frame from './streams/frame';
import RAFQueue from './queues/raf-queue';
import Element from './queues/element';

// Queue of viewport tracked dom element
let viewportQueue = new RAFQueue('Viewport', (frame: Frame, el: Element) => {
  let inViewport = el.bcr.top < frame.height &&
    el.bcr.top + el.bcr.height > 0 &&
    el.bcr.left < frame.width &&
    el.bcr.left + el.bcr.width > 0;

  if (!el.inViewport && inViewport) {
    el.callback();
  }
  el.inViewport = inViewport;
});

raf.listen(viewportQueue);

let ventana = {
  init() {},
  onScroll(func: Function) {
    scroll.listen(func);
  }
  onViewport(id: string, el: Object, callback: Function) {
    let element: Element = {
      id,
      el,
      callback
    };
    viewportQueue.push(element);
  }
};

export default ventana;
