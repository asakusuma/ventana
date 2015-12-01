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
    this.items.forEach((element: QueueElement) => {
      if (!this.intercept(value, element)) {
        this.collect(value, element);
      }
    });
  }
  intercept(value: any, element:QueueElement) {
    return false;
  }
}

export default Queue;
