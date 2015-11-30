class Stream {
  name: string;
  targets: Array<any>;
  constructor (name = 'anonymous') {
    this.name = name;
    this.targets = [];
  }
  write(value) {
    this.targets.forEach(target => {
      if (target instanceof Stream) {
        target.write(value);
      } else if (typeof target === 'function') {
        target(value);
      }
    });
  }
  listen(target) {
    this.targets.push(target);
  }
  throttle() {

  }
  filter(filter) {
    let filteredStream = new Stream();
    this.listen(value => {
      let filtered = filter(value);
      if (filtered) {
        filteredStream.write(filtered);
      }
    });
    return filteredStream;
  }
  static merge(streams, reduce) {
    //for ()
  }
}

/* TODO
  - Add queue feature to listen. Allow ordered queues for a stream.
*/

export default Stream;
