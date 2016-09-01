import w from './window-proxy';
import {
  resize,
  scroll,
  raf as RAFStream,
  poll as pollStream,
  measure as measureStream
} from './streams/streams';
import { default as QueueElement, QueueDOMElement } from './queues/element';
import Frame from './streams/frame';
import { default as Queue, DOMQueue } from './queues/queue';
import { Terminal, default as Stream } from './streams/stream';
import { QueueElementInterface, QueueDOMElementInterface, StreamInterface, QueueInterface } from './interfaces';

interface ListenersMap {
  move: Queue,
  resize: Queue,
  destroy: Queue,
  hide: Queue,
  show: Queue,
  [key: string]: Queue;
}

let queues:ListenersMap = {
  move: new Queue('move'),
  resize: new Queue('resize'),
  destroy: new Queue('destroy'),
  hide: new Queue('hide'),
  show: new Queue('show')
};

let hideStream = new Stream();
let showStream = new Stream();
let destroyStream = new Stream();
let taskQueue: Queue = new Queue('tasks');

let process = (frame: Frame, item: QueueElementInterface) => {
  return item.callback;
};
let callbackTerminal = new Terminal((callback: Function) => callback());

hideStream.pipe(new Stream({
  queue: queues.hide,
  process
})).pipe(callbackTerminal);

destroyStream.pipe(new Stream({
  queue: queues.destroy,
  process
})).pipe(callbackTerminal);

showStream.pipe(new Stream({
  queue: queues.show,
  process
})).pipe(callbackTerminal);

scroll.pipe(new Stream({
  queue: queues.move,
  process
})).pipe(callbackTerminal);

resize.pipe(new Stream({
  queue: queues.resize,
  process
})).pipe(callbackTerminal);

pollStream.pipe(new Stream({
  consume: true,
  queue: taskQueue,
  process
})).pipe(callbackTerminal);

if (w.hasDOM) {
  window.addEventListener('unload', (e: any) => {
    destroyStream.write.call(destroyStream, e);
  });
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      showStream.write(Date.now());
    } else {
      hideStream.write(Date.now());
    }
  });
}

export function on(eventName: string, callback: Function) {
  queues[eventName].push({
    callback,
    id: null
  });
}

export function queue(callback: Function) {
  taskQueue.push({
    callback,
    id: null
  });
}

interface AbsoluteRect {
  top: number;
  bottom: number;
  width: number;
  height: number;
}

interface Offset {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export {
  Offset,
  Frame,
  RAFStream,
  QueueElementInterface,
  QueueDOMElementInterface,
  StreamInterface,
  QueueInterface,
  Stream,
  Queue,
  DOMQueue,
  QueueElement,
  QueueDOMElement,
  Terminal
};
