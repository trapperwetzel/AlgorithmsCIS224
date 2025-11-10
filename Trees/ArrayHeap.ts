
type HeapNode = {
  value: number | string,
  left: any,
  right: any,
}
const createNode = (value: number | string, left: undefined | HeapNode, right: undefined | HeapNode) => {
  const NodeToReturn: HeapNode = {
    value: value,
    left: left,
    right: right,
  }
  return NodeToReturn;
}

const testNode: HeapNode = createNode(999, undefined, undefined);
const node11: HeapNode = createNode(11, undefined, undefined);
const node10: HeapNode = createNode(10, undefined, undefined);
const node9: HeapNode = createNode(9, undefined, undefined);
const node8: HeapNode = createNode(8, undefined, undefined)
const node7: HeapNode = createNode(7, undefined, undefined)
const node6: HeapNode = createNode(6, undefined, undefined);
const node5: HeapNode = createNode(5, node10, node11);
const node4: HeapNode = createNode(4, node8, node9);
const node3: HeapNode = createNode(3, node6, node7);
const node2: HeapNode = createNode(2, node4, node5);
const node1: HeapNode = createNode(1, node2, node3)


const heap: number[] = [];
const add = (element: number): void => {
  heap.push(element)
  let childIndex: number = heap.length - 1;
  while (childIndex > 0) {
    let parentIndex: number = Math.floor(childIndex - 1) / 2;
    if (heap[childIndex]! > heap[parentIndex]!) {
      const temp = heap[parentIndex]!;
      heap[parentIndex] = heap[childIndex]!;
      heap[childIndex] = temp;
      childIndex = parentIndex;
    } else {
      break;
    }
  }
}
add(1);
add(2);
add(3);
console.log(heap);

