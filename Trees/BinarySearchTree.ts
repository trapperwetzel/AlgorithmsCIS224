

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

  search(value: T) {
    if (!this.root) {
      throw new Error("No nodes are inside the tree");
    } else {
      return this.searchHelper(value, this.root);
    }
  }

  searchHelper(value: T, node: Node<T>): Node<T> {
    if (value == node.value) {
      return node;
    } else if (value < node.value && node.leftNode) {
      return this.searchHelper(value, node.leftNode);
    } else if (value > node.value && node.rightNode) {
      return this.searchHelper(value, node.rightNode);
    } else {
      throw new Error("Can not find node inside tree");
    }
  }

  preOrderTraversal(): void {
    const preOrderHelper = (helperNode?: Node<T>) => {
      if (helperNode) {
        helperNode.printValue();
        preOrderHelper(helperNode.leftNode)
        preOrderHelper(helperNode.rightNode);
      }
    }
    if (this.root) {
      preOrderHelper(this.root);
    }
  }

  postOrderTraversal(): void {
    const postOrderHelper = (helperNode?: Node<T>) => {
      if (!helperNode) { return; }
      postOrderHelper(helperNode.leftNode)
      postOrderHelper(helperNode.rightNode);
      helperNode.printValue();
    }
    if (this.root) {
      postOrderHelper(this.root);
    }
  }

  lvs(target: T) {
    let currentNode = this.root;
    let candidateNode;

    while (currentNode) {
      if (currentNode.value < target) {
        candidateNode = currentNode.value;
        currentNode = currentNode.rightNode;
      } else {
        currentNode = currentNode.leftNode;
      }
    }
    return candidateNode;
  }

}






const testTree = new SimpleBinaryTree<number>();
testTree.insert(25);
testTree.insert(10);
testTree.insert(33);
testTree.insert(27);
testTree.insert(5);
testTree.insert(13);
testTree.insert(45);
const findNode33 = testTree.search(33);
const findNode10 = testTree.search(10);
console.log("find node 33: ", findNode33);
console.log("find node 10: ", findNode10);
console.log("preOrderTraversal");
testTree.preOrderTraversal();
console.log("postOrderTraversal");
testTree.postOrderTraversal();
const testnum = testTree.lvs(25);
console.log("NUMBER:", testnum);



