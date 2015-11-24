class Stream {
  constructor () {
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
}

export default Stream;
