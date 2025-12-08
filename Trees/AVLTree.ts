import { BSTNode, BinarySearchTree } from "./BinarySearchTree.ts"



class AVLNode<K, V> extends BSTNode<K, V> {
  height: number;
  constructor(key: K, value: V) {
    super(key, value);
    this.height = 1;
  }
}
class AVLTree<K, V> extends BinarySearchTree<K, V> {

}

const tree = new AVLTree();
tree.insert(10, "A");
tree.insert(20, "B");
tree.insert(5, "C");
tree.search(10);
tree.search(20);
tree.search(5);
