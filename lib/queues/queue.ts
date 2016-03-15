import Stream from '../streams/stream';
import {
  StreamInterface,
  QueueInterface,
  QueueElementInterface
} from './../interfaces';

class Queue implements QueueInterface {
  name: string;
  items: Array<QueueElementInterface>;
  collect: Function;
  stream: Stream;
  constructor(name: string, collect: Function) {
    this.name = name;
    this.items = [];
    this.collect = collect;
    this.stream = new Stream(name + ' output stream');
  }
  push(element: QueueElementInterface) {
    this.items.push(element);
  }

  toStream() {
    return this.stream;
  }

  /**
   * Applies a value to every queue element.
   *
   * @param {Any} value - The value to tap into the queue
   * @returns {Object} - Object with percent hidden properties
   */
  tap(value: any) {
    this.items.map((element: QueueElementInterface) => {
      if (!this.intercept(value, element)) {
        return this.collect(this.stream.write.bind(this.stream), value, element);
      }
      return element;
    });
  }

  /**
   * Override to specify a function that can prevent individual queue
   * items from being tapped. Return true if a given value, QueueElementInterface
   * combination should not get tapped.
   *
   * @param {Any} value - The value being tapped into the queue
   * @param {QueueElementInterface} element - The element about to be tapped
   * @returns {Boolean} - Should be true if value/element pair shouldn't
   * be tapped
   */
  intercept(value: any, element:QueueElementInterface) {
    return false;
  }
}

export default Queue;
