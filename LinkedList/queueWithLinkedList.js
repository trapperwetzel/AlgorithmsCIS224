import Node from "./Node.js"
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(addedNode) {
    if (!this.head) {
      this.head = addedNode
      this.tail = addedNode;
      this.size += 1;
    } else {
      this.tail.next = addedNode;
      this.tail = addedNode;
      this.size += 1;
    }

  }
  dequeue() {
    const removedElement = this.head.element;
    this.head = this.head.next;
    this.size -= 1;
    return removedElement;
  }

  getFirstNode() {
    return this.head;
  }

  getFirstElement() {
    return this.head.element;
  }
  getLength() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }

  getAllElements() {
    let dummyNode = new Node(-Infinity, null, this.head);
    while (dummyNode.next) {
      console.log("---------");
      console.log("Element", dummyNode.next.element);
      console.log("---------")
      dummyNode = dummyNode.next;
    }
  }
}
const linkedList = new LinkedQueue();
linkedList.enqueue(node1);
linkedList.enqueue(node2);
linkedList.enqueue(node3);
linkedList.enqueue(node4);
linkedList.enqueue(node5);
linkedList.getAllElements();

