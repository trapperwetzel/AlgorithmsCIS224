

class Node<T> {

  value: T;
  leftNode?: Node<T>;
  rightNode?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }

  printValue() {
    console.log("--------------");
    console.log(this.value);
    console.log("--------------");
  }
}

const numberNode = new Node<number>(1);
const stringNode = new Node<string>("This is the string node");
const numberNode2 = new Node<number>(2);
const stringNode2 = new Node<string>("This is string node 2");
numberNode.rightNode = numberNode2;
stringNode.rightNode = stringNode2;

class SimpleBinaryTree<T> {
  root?: Node<T>;

  insert(value: T): void {
    if (!this.root) {
      this.root = new Node<T>(value);
    } else {
      this.insertHelper(value, this.root);
    }
  }

  insertHelper(value: T, node: Node<T>): void {
    if (value < node.value) {
      // left logic
      !node.leftNode ? node.leftNode = new Node<T>(value) : this.insertHelper(value, node.leftNode);
    } else if (value > node.value) {
      // right logic
      !node.rightNode ? node.rightNode = new Node<T>(value) : this.insertHelper(value, node.rightNode);
    } else {
      throw new Error("value is already in the tree!");
    }
  }
}

const testTree = new SimpleBinaryTree<number>();
testTree.insert(25);
testTree.insert(10);
testTree.insert(3);
testTree.insert(2);
testTree.insert(33);
testTree.insert(1);
console.log(testTree);
