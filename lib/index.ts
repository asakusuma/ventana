import scroll from './streams/scroll';
import Element from './queues/element';
export { default as onViewport } from './implementations/viewport';

import Stream from './streams/stream';

type WriteFunction = (write: Function) => void;
type StreamOrWriteFunction = Stream | WriteFunction;

function toStream(sof:StreamOrWriteFunction):Stream {
  if (typeof sof === 'function') {
    return new Stream(<WriteFunction>sof);
  } else if (sof instanceof Stream) {
    return sof;
  }
}

export function onScroll(func: Function) {
  scroll.pipe(func);
};

export function stream(...args: StreamOrWriteFunction[]) {
  args[0] = args[0] || new Stream();
  return args.length > 1 ? Stream.join.apply(null, args.map(toStream)) : args[0];
};
