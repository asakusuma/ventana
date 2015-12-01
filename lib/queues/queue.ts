import QueueElement from './element';

class Queue {
  name: string;
  items: Array<QueueElement>;
  constructor(name: string) {
    this.name = name;
    this.items = [];
  }
  push(element: QueueElement) {
    this.items.push(element);
  }
  forEach(func: Function) {
    this.items.forEach(func);
  }
}

export default Queue;
