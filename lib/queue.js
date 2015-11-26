class Queue {
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
