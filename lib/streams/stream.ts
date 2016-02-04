import Queue from './../queues/queue';
class Stream {
  name: string;
  targets: Array<Stream | Queue | Function>;
  constructor (source?: (write: Function) => void | String, name = 'anonymous') {
    this.name = name;
    if (typeof source === 'function') {
      source.call(this, (...args:any[]) => {
        this.write.apply(this, args);
      });
    } else if (typeof source === 'string') {
      this.name = source;
    }
    this.targets = [];
  }
  write(value: any) {
    this.targets.forEach((target: Stream | Queue | Function) => {
      if (target instanceof Stream) {
        target.write(value);
      } else if (target instanceof Queue) {
        target.tap(value);
      } else if (typeof target === 'function') {
        (<Function>target)(value);
      }
    });
  }
  pipe(target: Stream | Queue | Function) {
    this.targets.push(target);
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
    let cache:any[] = new Array(args.length);
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
  filter(filter: Function) {
    let filteredStream = new Stream();
    this.pipe((value: any) => {
      let filtered = filter(value);
      if (filtered) {
        filteredStream.write(filtered);
      }
    });
    return filteredStream;
  }
}

export default Stream;
