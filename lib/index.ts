import scroll from './streams/scroll';
import resize from './streams/scroll';
import Element from './queues/element';
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

export function on(eventName: string, callback: Function) {
  listeners[eventName].push(callback);
}
