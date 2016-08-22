import Stream from '../streams/stream';
import {
  StreamInterface,
  QueueInterface,
  QueueElementInterface
} from './../interfaces';

class Queue implements QueueInterface {
  name: string;
  private items: Array<QueueElementInterface>;
  collect: Function;
  private stream: Stream;
  private populateCallbacks: Array<Function>;
  constructor(name: string, collect: Function) {
    this.name = name;
    this.items = [];
    this.collect = collect;
    this.stream = new Stream(name + ' output stream');
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

  callOnPopulate(callback: Function) {
    if (this.items.length > 0) {
      callback.call(this);
    } else {
      this.populateCallbacks.push(callback);
    }
  }

  clear() {
    this.items = [];
  }

  push(element: QueueElementInterface) {
    this.items.push(element);
    while (this.populateCallbacks.length > 0) {
      this.populateCallbacks.pop().call(this);
    }
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
  intercept(value: any, element: QueueElementInterface) {
    return false;
  }
}

export default Queue;
