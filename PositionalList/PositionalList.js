class Node {
  constructor(element, previous = null, next = null) {
    this.element = element;
    this.previous = previous;
    this.next = next;
  }
}

class Position {
  constructor(container, node) {
    this.container = container;
    this.node = node;
  }
  element() {
    return this.node.element;
  }
  isEqual(otherNode) {

    return this.node.element === otherNode.element;
  }
}

class PositionalList {

  constructor() {
    this.header = new Node(null);
    this.trailer = new Node(null);
    this.header.next = this.trailer;
    this.trailer.previous = this.header;
    this.size = 0; // need size in order to get positions and such 
  }
  makePosition(node) {
    if (node === this.header || node === this.trailer) { return null };
    return new Position(this, node);
  }
  insertBetween(element, predecessor, successor) {
    const nodeToBeInserted = new Node(element, predecessor, successor);
    predecessor.next = nodeToBeInserted;
    successor.previous = nodeToBeInserted;
    this.size += 1;
    return this.makePosition(nodeToBeInserted);
  }
  find(element) {
    let walker = this.first();
    while (walker !== null) {
      if (walker.element() === element) {
        return walker;
      } else {
        walker = this.after(walker);
      }
    }
    return null;
  }
  addFirst(element) {
    return this.insertBetween(element, this.header, this.header.next);
  }
  addLast(element) {
    return this.insertBetween(element, this.trailer.previous, this.trailer);
  }
  addBefore(position, element) {
    return this.insertBetween(element, position.node.previous, position.node);
  }
  addAfter(position, element) {
    return this.insertBetween(element, position.node, position.node.next);
  }

  first() {
    return this.makePosition(this.header.next);
  }
  last() {
    return this.makePosition(this.trailer.previous);
  };
  before(position) {
    return this.makePosition(position.node.previous);
  }
  after(position) {
    return this.makePosition(position.node.next);
  }

}


function max(L) {
  let walker = L.first();
  let maxVal = walker.element();

  while ((walker = L.after(walker)) !== null) {
    if (walker.element() > maxVal) {
      maxVal = walker.element();
    }
  } return maxVal;
}

const testList = new PositionalList();
testList.addLast(1);
testList.addLast(3);
testList.addLast(5);
testList.addLast(2);
testList.addLast(55);
testList.addLast(32);
const testNode2 = new Node(6);

console.log(testList.last());
const testMax = max(testList);
const testFind = testList.find(32);
//console.log(testMax);
//console.log("Should find that we have the number 32: ", testFind);





export default PositionalList; 
