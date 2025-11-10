
class BSTNode<K, V> {

  key: K;
  value: V;
  parent?: BSTNode<K, V>;
  leftNode?: BSTNode<K, V>;
  rightNode?: BSTNode<K, V>;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  printValue() {
    console.log("--------------");
    console.log(this.value);
  }
}

class BinarySearchTree<K, V> {

  root?: BSTNode<K, V>;

  /*
  * INSERT
  * METHODS
  */
  insert(key: K, value: V) {

    if (this.isEmpty()) {
      this.addRoot(key, value)
    }
    else {
      this._insert(key, value, this.root!);
    }
  }
  // insert helper function 
  _insert(key: K, value: V, node: BSTNode<K, V>) {
    if (key > node.key) {
      !node.rightNode ? node.rightNode = new BSTNode(key, value) : this._insert(key, value, node.rightNode);
    } else if (key < node.key) {
      !node.leftNode ? node.leftNode = new BSTNode(key, value) : this._insert(key, value, node.leftNode);
    } else {
      throw new Error("node is already in the tree")
    }
  }

  private addRoot(key: K, value: V) {
    if (!this.isEmpty()) {
      throw new Error("Tree is not empty");
    } else {
      this.root = new BSTNode(key, value);
    }

  }
  /*
   * SEARCH 
   * METHODS 
  */

  search(key: K) {
    // error handling if tree is empty 
    if (this.isEmpty()) {
      throw new Error("tree is empty");
    } else {
      this._search(key, this.root!)
    }
  }

  private _search(key: K, node: BSTNode<K, V>) {

    if (key === node.key) {
      console.log("found node!")
      return node;
    } else {
      if (key > node.key && node.rightNode) {
        this._search(key, node.rightNode);
      } else if (key < node.key && node.leftNode) {
        this._search(key, node.leftNode);
      }
    }
  }

  //////////////////////////////
  right(v: BSTNode<K, V>) {
    return v.rightNode;
  }

  left(v: BSTNode<K, V>) {
    return v.leftNode;
  }

  getRoot() {
    if (this.isEmpty()) {
      throw new Error("tree is empty");
    } else {
      return this.root;
    }
  }

  isEmpty() {
    if (this.root) {
      return false;
    } else {
      return true;
    }
  }



}

const tree = new BinarySearchTree<number, string>()
tree.insert(3, "C");
console.log(tree.getRoot());
tree.insert(5, "D");
tree.insert(1, "A");
tree.search(1);
