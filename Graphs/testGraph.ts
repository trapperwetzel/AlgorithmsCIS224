import type { GraphNode, GraphEdge } from "./Graph.ts";
import { Graph } from "./Graph.ts";


const pointA: GraphNode<string> = {
  value: "A"
}
const pointB: GraphNode<string> = {
  value: "B"
}
const testEdge: GraphEdge<string> = {
  Point1: pointA,
  Point2: pointB
}
const testGraph: Graph<string> = new Graph<string>();
testGraph.add_edge(testEdge);
testGraph.printEdges();

