import type { GraphNode, GraphEdge } from "./Graph.ts";
import { Graph } from "./Graph.ts";

const testGraph: Graph<string> = new Graph<string>();

const pointA = testGraph.makeNode("A");
const pointB = testGraph.makeNode("B");
const pointC = testGraph.makeNode("C");
const pointD = testGraph.makeNode("D");

const edge1: GraphEdge<string> = testGraph.makeEdge(pointA, pointB);
const edge2: GraphEdge<string> = testGraph.makeEdge(pointC, pointD);
const edge3: GraphEdge<string> = testGraph.makeEdge(pointA, pointC);


testGraph.add_edge(edge1);
testGraph.add_edge(edge2);
testGraph.add_edge(edge3);

testGraph.printNodes();
testGraph.printEdges();




