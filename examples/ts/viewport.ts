import { raf } from './../streams/raf';
import RAFQueue from './../queues/raf-queue';
import QueueElement from './../queues/element';
import { Frame, RAFPhase } from './../streams/frame';

class ViewportElement extends QueueElement {
  inViewport: Boolean;
  constructor(id: string, el: Element, callback: Function) {
    super();
    this.id = id;
    this.el = el;
    this.callback = callback;
  }
}

// Queue of viewport tracked dom element
let viewportQueue = new RAFQueue('Viewport', (write: Function, frame: Frame, el: ViewportElement) => {
  let inViewport = el.bcr.top < frame.height &&
    el.bcr.top + el.bcr.height > 0 &&
    el.bcr.left < frame.width &&
    el.bcr.left + el.bcr.width > 0;

  if (!el.inViewport && inViewport) {
    el.callback();
  }
  el.inViewport = inViewport;

  write(el);

  return el;
});

raf.pipe(viewportQueue);

export default function(id: string, el: Element, callback: Function) {
  let element = new ViewportElement(id, el, callback);
  viewportQueue.push(element);
};
