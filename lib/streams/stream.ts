import Queue from './../queues/queue';
class Stream {
  name: string;
  targets: Array<Stream | Queue | Function>;
  constructor (name = 'anonymous') {
    this.name = name;
    this.targets = [];
  }
  write(value: any) {
    this.targets.forEach(function(target: Stream | Queue | Function) {
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
  throttle() {

  }

  /**
   * Returns a new stream. The new stream's behavior is defined by the
   * original stream and the filter function. Values from the original
   * stream are passed into the filter function, and if the filter
   * function returns a truthy value, the value is passed onto the new
   * stream.
   *
   * @param {Function} filter - The filter function
   * @returns {Stream} - The generates stream
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
