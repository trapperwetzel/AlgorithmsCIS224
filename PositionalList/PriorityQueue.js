import PositionalList from "./PositionalList.js"

class Item {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class SortedPriorityQueue {
  constructor() {
    this._data = new PositionalList();
  }
  isEmpty() {
    return this._data.size === 0;
  }
  size() {
    return this._data.size;
  }
  add(key, value) {
    const newItem = new Item(key, value);
    let walker = this._data.last();

    while (
      walker !== null &&
      newItem.key < walker.element().key
    ) {
      walker = this._data.before(walker);
    }
    if (walker === null) {
      this._data.addFirst(newItem);
    } else {
      this._data.addAfter(walker, newItem);
    }

  }

  min() {
    if (this.isEmpty()) throw new Error("PriorityQueue is empty");
    const item = this._data.first().element();
    return { key: item.key, value: item.value };
  }
  removeMin() {
    if (this.isEmpty()) throw new Error("Priority queue is empty");
    const firstPos = this._data.first();
    const item = firstPos.element();
    firstPos.node.previous.next = firstPos.node.next;
    firstPos.node.next.previous = firstPos.node.previous;
    this._data.size -= 1;
    return { key: item.key, value: item.value };
  }
}

const priorityQ = new SortedPriorityQueue();
priorityQ.add(5, "A");
priorityQ.add(4, "B");
priorityQ.add(7, "F");
priorityQ.add(1, "D");
console.log(priorityQ.removeMin()); // (1, D)
priorityQ.add(3, "J");
priorityQ.add(6, "L");
console.log(priorityQ.removeMin()); // (3, J)
console.log(priorityQ.removeMin()); // (4, B)
priorityQ.add(8, "G");
console.log(priorityQ.removeMin()); // (5, A)
priorityQ.add(2, "H");
console.log(priorityQ.removeMin()); // (2, H)
console.log(priorityQ.removeMin()); // (6, L)


