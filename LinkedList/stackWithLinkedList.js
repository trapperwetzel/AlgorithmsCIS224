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
    this.count = 0;
  }
  addNode(newNode) {
    this.count += 1;
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }
  removeNode() {
    if (this.isEmpty()) {
      console.log("Error, linked stack is empty!");
    }
    this.count -= 0;
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
  isEmpty() {
    return !this.count;
  }
}

const node1 = new Node(1);
const node2 = new Node(2, node1);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const _stack = new LinkedStack(node1);
_stack.addNode(node2);
_stack.addNode(node3);
_stack.addNode(node4);
_stack.addNode(node5);
console.log("This should show Node 5", _stack.tail);
const node6 = new Node(6);
_stack.addNode(node6);
console.log("This should show node 6 after adding it to the stack: ", _stack.tail);
_stack.removeNode();
console.log("This should show node 5 again after removing from the stack: ", _stack.tail);



