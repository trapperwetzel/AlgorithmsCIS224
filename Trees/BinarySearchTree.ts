
export class BSTNode<K, V> {

  key: K;
  value: V;
  parent?: BSTNode<K, V>;
  leftNode?: BSTNode<K, V>;
  rightNode?: BSTNode<K, V>;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  printNode() {
    console.log("--------------");
    console.log("Key: ", this.key);
    console.log("Value: ", this.value);
  }
}

export class BinarySearchTree<K, V> {

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
      return this._search(key, this.root!)
    }
  }

  private _search(key: K, node: BSTNode<K, V>) {

    if (key === node.key) {
      node.printNode();
      return node;
    } else {
      if (key > node.key && node.rightNode) {
        this._search(key, node.rightNode);
      } else if (key < node.key && node.leftNode) {
        this._search(key, node.leftNode);
      }
    }
  }

  /* 
   * TODO: 
   * DELETE  
   * METHODS

  delete(key: K) {
    const nodeToDelete = this.search(key);
    // this means it has two children 
    if (nodeToDelete!.leftNode && nodeToDelete!.rightNode) {
      const replacementNode = this.getMaxInLeftSubTree(nodeToDelete);
      this.replace(nodeToDelete,replacementNode);
    }
  }


  replace(node,replacementNode){

    const oldKey = node.key;
    const oldValue = node.value;
    node.key = replacementNode.key;
    node.value = replacementNode.value;

  }

  getMaxInLeftSubTree(node: BSTNode<K,V>){

  }

  */
  _delete(node: BSTNode<K, V>) {


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


