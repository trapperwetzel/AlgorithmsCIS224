const node1 = {
  value: 1,
  next: null
}
const node2 = {
  value: 2,
  next: null
}
const node3 = {
  value: 3,
  next: null
}
const node4 = {
  value: 4,
  next: null
}
const node5 = {
  value: 5,
  next: null
}
const node6 = {
  value: 6,
  next: null,
}
node1.next = node2;
node2.next = node3;
node4.next = node5;
node5.next = node6;

let currentNode = node1;
let count = 0;
while (currentNode !== null) {
  if (currentNode.next === null && count !== 1) {
    currentNode.next = node4;
    count += 1;
  } else {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
}
