import { StreamInterface, QueueInterface } from './../interfaces';

class Stream implements StreamInterface {
  name: string;
  targets: Array<Stream | QueueInterface | Function>;
  targetEndpoints: Array<Stream>;
  constructor (source?: string|((write: Function) => void)) {
    this.name = name;
    if (typeof source === 'function') {
      source.call(this, (...args: any[]) => {
        this.write.apply(this, args);
      });
    } else if (typeof source === 'string') {
      this.name = source;
    }
    this.targets = [];
    this.targetEndpoints = [];
  }
  write(value: any) {
    this.targets.forEach((target: any, index: number) => {
      if (target instanceof Stream) {
        target.write(value);
      } else if (typeof target === 'function') {
        this.targetEndpoints[index].write((<Function>target)(value));
      } else if (typeof target.tap === 'function') {
        target.tap(value);
      }
    });
  }
  pipe(target: Stream | QueueInterface | Function): StreamInterface {
    this.targets.push(target);
    if (target instanceof Stream) {
      this.targetEndpoints.push(null);
      return target;
    } else if (target instanceof Function) {
      let endpoint = new Stream();
      this.targetEndpoints.push(endpoint);
      return endpoint;
    } else {
      this.targetEndpoints.push(null);
      return target.toStream();
    }
  }

  /**
   * Returns a stream. The resulting stream's behavior is defined by
   * the supplied streams. Given N streams passed in as arguments,
   * the resulting stream will recieve Array values of length N.
   * Values will be written any time any source stream has a new
   * value. Each value in the resulting stream value array
   * is the latest value from the corresponding argument stream.
   *
   * @param {...Stream} args - Any number of streams
   * @returns {Stream} - The generated stream
   */
  static join(...args: Stream[]) {
    let cache: any[] = new Array(args.length);
    return new Stream(function (write: Function) {
      args.forEach((stream, i) => {
        stream.pipe((value: any) => {
          cache[i] = value;
          this.write(cache);
        });
      });
    });
  }

  /**
   * Returns a new stream. The new stream's behavior is defined by the
   * original stream and the filter function. Values from the original
   * stream are passed into the filter function, and if the filter
   * function returns a truthy value, the value is passed onto the new
   * stream.
   *
   * @param {Function} filter - The filter function
   * @returns {Stream} - The filtered stream
   */
  filter(first: any, second?: Function) {
    let state = typeof first !== 'function' && first;
    let hasState: Boolean = !!state;
    let filter = hasState ? second : first;
    return new Stream((write) => {
      this.pipe((value: any) => {
        let filtered = hasState ? filter(state, value) : filter(value);
        if (filtered) {
          write(filtered);
        }
      });
    });
  }
}

export {
  Stream
};

export type WriteFunction = (write: Function) => void;
export type StreamOrWriteFunction = Stream | WriteFunction;

function toStream(sof: StreamOrWriteFunction): Stream {
  if (typeof sof === 'function') {
    return new Stream(<WriteFunction>sof);
  } else if (sof instanceof Stream) {
    return sof;
  }
}

export function stream(...args: StreamOrWriteFunction[]) {
  args[0] = args[0] || new Stream();
  return args.length > 1 ? Stream.join.apply(null, args.map(toStream)) : args[0];
};

export default Stream;
