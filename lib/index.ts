import w from './window-proxy';
import {
  resize,
  scroll,
  raf as RAFStream,
  poll as pollStream,
  measure as measureStream
} from './streams/streams';
export { default as QueueElement } from './queues/element';
import Frame from './streams/frame';
export { default as Queue } from './queues/queue';
import { Terminal } from './streams/stream';

export { default as Stream } from './streams/stream';
export { QueueElementInterface, StreamInterface, QueueInterface } from './interfaces';

interface ListenersMap {
  move: Function[],
  resize: Function[],
  destroy: Function[],
  hide: Function[],
  show: Function[],
  [key: string]: Function[];
}

let listeners:ListenersMap = {
  move: [],
  resize: [],
  destroy: [],
  hide: [],
  show: []
};

function generateTrigger(key: string) {
  return () => {
    let callbacks = listeners[key], len = callbacks.length, i = 0;
    for (i = 0; i < len; i++) {
      callbacks[i].call(null);
    }
  }
}

scroll.pipe(new Terminal((arg: any) => {
  listeners.move.forEach((callback) => {
    callback.call(null, arg);
  });
}));

resize.pipe(new Terminal((arg: any) => {
  listeners.resize.forEach((callback) => {
    callback.call(null, arg);
  });
}));

if (w.hasDOM) {
  window.addEventListener('unload', generateTrigger('destroy'));
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      generateTrigger('show')();
    } else {
      generateTrigger('hide')();
    }
  });
}

let taskQueue: Function[] = [];

pollStream.pipe(new Terminal((frame: Frame) => {
  while (taskQueue.length > 0) {
    taskQueue.pop().call(null, frame);
  }
}));

export function on(eventName: string, callback: Function) {
  listeners[eventName].push(callback);
}

export function queue(callback: Function) {
  taskQueue.push(callback);
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
  RAFStream
};
