import scroll from './streams/scroll';
import raf from './streams/raf';
import Frame from './streams/frame';
import Queue from './queues/queue';
import Element from './queues/element';

let viewportQueue = new Queue('Viewport', (frame: Frame, element: Element) => {
  if (frame.isMeasure()) {
    element.bcr = element.el.getBoundingClientRect();
  } else {
    let bcr = element.bcr;
    let inViewport = bcr.top < frame.height && bcr.top + bcr.height > 0;
    if (!element.inViewport && inViewport) {
      element.callback();
    }
    element.inViewport = inViewport;
  }
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
