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
export { default as RAFQueue } from './queues/raf-queue';
export { default as Queue } from './queues/queue';

export { default as Stream } from './streams/stream';
export { stream } from './streams/stream';
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

scroll.pipe((arg: any) => {
  listeners.move.forEach((callback) => {
    callback.call(null, arg);
  });
});

resize.pipe((arg: any) => {
  listeners.resize.forEach((callback) => {
    callback.call(null, arg);
  });
});

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

let cY = 0;
let cX = 0;
let cW = 0;
let cH = 0;

let taskQueue: Function[] = [];

pollStream.pipe((frame: Frame) => {
  cY = frame.scrollTop;
  cX = frame.scrollLeft;
  cW = frame.width;
  cH = frame.height;

  while (taskQueue.length > 0) {
    taskQueue.pop().call(null, frame);
  }
});

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

export function mapBoundingRectToAbsolute(boundingRect: ClientRect) {
  let dimensions = {
    top: boundingRect.top + cY,
    left: boundingRect.left + cX,
    width: boundingRect.width,
    height: boundingRect.height
  };
  return dimensions;
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

export function getWindowRect(offset: Offset) {
  offset = offset || {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  return {
    top: cY + offset.top,
    left: cX + offset.left,
    height: cH - offset.top - offset.bottom,
    width: cW - offset.left - offset.right
  };
}
