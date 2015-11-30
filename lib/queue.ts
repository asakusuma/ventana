class Queue {
  name: string;
  items: Array<any>;
  constructor(name) {
    this.name = name;
    this.items = [];
  }
  push(element) {
    this.items.push({
      element: element
    });
  }
}

export default Queue;
