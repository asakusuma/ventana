import QueueElement from './element';

class Queue {
  name: string;
  items: Array<QueueElement>;
  collect: Function;
  constructor(name: string, collect: Function) {
    this.name = name;
    this.items = [];
    this.collect = collect;
  }
  push(element: QueueElement) {
    this.items.push(element);
  }
  tap(value: any) {
    this.items.forEach((element) => {
      this.collect(value, element);
    });
  }
}

export default Queue;
