class Stream {
  name: string;
  targets: Array<Stream | Function>;
  constructor (name = 'anonymous') {
    this.name = name;
    this.targets = [];
  }
  write(value: any) {
    this.targets.forEach(target => {
      if (target instanceof Stream) {
        target.write(value);
      } else if (typeof target === 'function') {
        target(value);
      }
    });
  }
  listen(target: Stream | Function) {
    this.targets.push(target);
  }
  throttle() {

  }
  filter(filter: Function) {
    let filteredStream = new Stream();
    this.listen((value: any) => {
      let filtered = filter(value);
      if (filtered) {
        filteredStream.write(filtered);
      }
    });
    return filteredStream;
  }
}

/* TODO
  - Add queue feature to listen. Allow ordered queues for a stream.
*/

export default Stream;
