import raf from './../streams/raf';
import Frame from './../streams/frame';
import RAFQueue from './../queues/raf-queue';
import Element from './../queues/element';

class ViewportElement implements Element {
  el: Object;
  callback: Function;
  id: string;
  bcr: ClientRect;
  inViewport: Boolean;
  constructor(id: string, el: Object, callback: Function) {
    this.id = id;
    this.el = el;
    this.callback = callback;
  }
}

// Queue of viewport tracked dom element
let viewportQueue = new RAFQueue('Viewport', (frame: Frame, el: ViewportElement) => {
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

export default function(id: string, el: Object, callback: Function) {
  let element = new ViewportElement(id, el, callback);
  viewportQueue.push(element);
};
