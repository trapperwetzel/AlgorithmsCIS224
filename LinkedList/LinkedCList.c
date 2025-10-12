#include <stdbool.h>
#include <stdio.h>

typedef struct Node {
  int element;
  struct Node *next;
} Node;
void swapNodes(Node *pNodeX, Node *pNodeY) {
  Node tempNodeX = *pNodeX;
  Node tempNodeY = *pNodeY;
  *pNodeX = tempNodeY;
  *pNodeY = tempNodeX;
}
int main() {

  Node node1;
  node1.element = 1;
  Node node2;
  node2.element = 2;
  swapNodes(&node1, &node2);
  printf("Node 1 element should be 2: %d", node1.element);
  return 0;
}
