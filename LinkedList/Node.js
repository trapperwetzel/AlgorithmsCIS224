class Node {
  constructor(element, previous = null, next = null) {
    this.element = element;
    this.previous = previous;
    this.next = next;
  }
}

export default Node; 
