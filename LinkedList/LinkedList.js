
class Node {
  constructor(element, prev = null, next = null) {
    this.element = element;
    this.prev = prev,
      this.next = next;
  }
  getNodeElement() {
    return this.element;
  }
  getPrevNode() {
    return this.prev.this.getNodeElement();
  }
  getNextNode() {
    return this.next.this.getNodeElement();
  }

}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.trailer = head;
    this.elementCount = 0;
  }
  addNode(node) {
    this.trailer.next = node;
    node.prev = this.trailer;
    this.trailer = node;
    this.elementCount += 1;
  }
  removeNodeByElement(elementToRemove) {

    let dummyNode = this.head;
    while (dummyNode) {
      if (dummyNode.val == elementToRemove) {



      }
    }


  }

}
const node1 = new Node(4);
const node2 = new Node(2);
const node3 = new Node(3);

const myLinkedList = new LinkedList(node1);


myLinkedList.addNode(node2);

console.log(node2);
console.log(node2.prev);
myLinkedList.addNode(node3);
console.log(node2.next);
console.log("Trailer:");
console.log(myLinkedList.trailer);
