import type { GraphNode, GraphEdge } from "./Graph.ts";
import { Graph } from "./Graph.ts";

const testGraph: Graph<string> = new Graph<string>();

const pointA: GraphNode<string> = testGraph.makeNode("A");
const pointB: GraphNode<string> = testGraph.makeNode("B");
const pointC: GraphNode<string> = testGraph.makeNode("C");
const pointD: GraphNode<string> = testGraph.makeNode("D");
const pointE: GraphNode<string> = testGraph.makeNode("E");

const edge1: GraphEdge<string> = testGraph.makeEdge(pointA, pointB);
const edge2: GraphEdge<string> = testGraph.makeEdge(pointB, pointC);
const edge3: GraphEdge<string> = testGraph.makeEdge(pointC, pointD);
const edge4: GraphEdge<string> = testGraph.makeEdge(pointD, pointE);

testGraph.add_edge(edge1);
testGraph.add_edge(edge2);
testGraph.add_edge(edge3);
testGraph.add_edge(edge4);

testGraph.printNodes();
testGraph.printEdges();

testGraph.depthFirstSearch(pointA);




