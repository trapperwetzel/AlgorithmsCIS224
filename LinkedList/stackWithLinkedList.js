class Node {
  constructor(element, previous = null, next = null) {
    this.element = element;
    this.previous = previous;
    this.next = next;
  }
}
class LinkedStack {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }
  addNode(newNode) {
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }
  removeNode() {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2, node1);
const _stack = new LinkedStack(head = node1);
_stack.addNode(node2);
const node3 = new Node(3);
_stack.addNode(node3);
console.log(_stack);
_stack.removeNode();
console.log(_stack);





