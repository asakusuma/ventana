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

  /**
   * Applies a value to every queue element.
   *
   * @param {Any} value - The value to tap into the queue
   * @returns {Object} - Object with percent hidden properties
   */
  tap(value: any) {
    this.items.forEach((element: QueueElement) => {
      if (!this.intercept(value, element)) {
        this.collect(value, element);
      }
    });
  }

  /**
   * Override to specify a function that can prevent individual queue
   * items from being tapped. Return true if a given value, QueueElement
   * combination should not get tapped.
   *
   * @param {Any} value - The value being tapped into the queue
   * @param {QueueElement} element - The element about to be tapped
   * @returns {Boolean} - Should be true if value/element pair shouldn't
   * be tapped
   */
  intercept(value: any, element:QueueElement) {
    return false;
  }
}

export default Queue;
