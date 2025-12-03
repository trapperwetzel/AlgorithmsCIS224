import type { GraphNode, GraphEdge } from "./Graph.ts";
import { Graph } from "./Graph.ts";

const testGraph: Graph<string> = new Graph<string>();

const pointA: GraphNode<string> = {
  value: "A"
}
const pointB: GraphNode<string> = {
  value: "B"
}
const pointC: GraphNode<string> = {
  value: "C"
}
const pointD: GraphNode<string> = {
  value: "D"
}
const edge1: GraphEdge<string> = testGraph.make_edge(pointA, pointB);
const edge2: GraphEdge<string> = testGraph.make_edge(pointC, pointD);
const edge3: GraphEdge<string> = testGraph.make_edge(pointA, pointC);


testGraph.add_edge(edge1);
testGraph.add_edge(edge2);
testGraph.add_edge(edge3);

testGraph.printNodes();
testGraph.printEdges();




