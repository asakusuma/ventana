import Stream from '../streams/stream';
import {
  StreamInterface,
  QueueInterface,
  QueueElementInterface,
  QueueDOMElementInterface
} from './../interfaces';

class Queue implements QueueInterface {
  name: string;
  items: Array<QueueElementInterface>;
  stream: Stream;
  private populateCallbacks: Array<Function> = [];
  constructor(name: string) {
    this.name = name;
    this.items = [];
    this.stream = new Stream();
  }

  remove(identifier: Element|string) {
    let predicate: Function;
    if (typeof identifier === 'string') {
      predicate = (element: QueueElementInterface) => element.id === identifier;
    } else {
      predicate = (element: QueueElementInterface) => element.el === identifier;
    }
    let len = this.items.length;
    for (let i = 0; i < len; i++) {
      if (predicate(this.items[i])) {
        this.items.splice(i, 1);
        i--;
        len--;
      }
    }
  }

  clear() {
    this.items = [];
  }

  push(element: QueueElementInterface) {
    if (this.items.length === 0) {
      this.populateCallbacks.forEach((callback: Function) => callback());
    }
    this.items.push(element);
  }

  toStream() {
    return this.stream;
  }

  callOnPopulate(callback: Function) {
    this.populateCallbacks.push(callback);
  }
}

export default Queue;
export class DOMQueue extends Queue {
  items: Array<QueueDOMElementInterface>;
}
