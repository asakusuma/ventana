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
  listen(target: Stream | Queue | Function) {
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

export default Stream;
