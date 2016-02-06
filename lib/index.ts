import scroll from './streams/scroll';
import Element from './queues/element';
export { default as onViewport } from './implementations/viewport';
export { default as RAFQueue } from './queues/raf-queue';
export { raf as rafStream } from './streams/raf';

export { default as Stream } from './streams/stream';
export { stream } from './streams/stream';

export function onScroll(func: Function) {
  scroll.pipe(func);
};
