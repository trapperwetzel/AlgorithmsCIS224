const node1 = {
  prev: null,
  next: null,
  value: 1,
}
const node2 = {
  prev: null,
  next: null,
  value: 2,
}
const node3 = {
  prev: null,
  next: null,
  value: 3,
}
const node4 = {
  prev: null,
  next: null,
  value: 4
}
const node5 = {
  prev: null,
  next: null,
  value: 5
}
node1.next = node2;
node2.next = node3;
node3.next = node4;
node2.prev = node1;
node3.prev = node2;
node4.prev = node3;
node5.prev = node4;


let head = node1;
let fast = head;
let slow = head;
while (fast && fast.next) {
  fast = fast.next.next;
  slow = slow.next;
}
console.log(slow.value);


