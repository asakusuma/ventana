import scroll from './streams/scroll';
import resize from './streams/resize';
import Element from './queues/element';
import { poll } from './streams/raf';
import { Frame } from './streams/frame';
export { default as onViewport } from './implementations/viewport';
export { default as RAFQueue } from './queues/raf-queue';
export { raf as rafStream } from './streams/raf';

export { default as Stream } from './streams/stream';
export { stream } from './streams/stream';

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

scroll.pipe(() => {
  listeners.move.forEach((callback) => {
    callback.call(null);
  });
});

resize.pipe(() => {
  listeners.resize.forEach((callback) => {
    callback.call(null);
  });
});

let cY = 0;
let cX = 0;
let cW = 0;
let cH = 0;

poll.pipe((frame: Frame) => {
  cY = frame.scrollTop;
  cX = frame.scrollLeft;
  cW = frame.width;
  cH = frame.height;
});

export function on(eventName: string, callback: Function) {
  listeners[eventName].push(callback);
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
