import type { WeightedGraphNode, WeightedGraphEdge } from "./WeightedGraph.ts";
import { WeightedGraph } from "./WeightedGraph.ts";

const graph = new WeightedGraph<string>();

const nodeA: WeightedGraphNode<string> = graph.makeNode("A")
const nodeB: WeightedGraphNode<string> = graph.makeNode("B")
const nodeC: WeightedGraphNode<string> = graph.makeNode("C")
const nodeD: WeightedGraphNode<string> = graph.makeNode("D")
const nodeE: WeightedGraphNode<string> = graph.makeNode("E")

const edge1: WeightedGraphEdge<string> = graph.makeEdge(nodeA, nodeB, 2);
const edge2: WeightedGraphEdge<string> = graph.makeEdge(nodeA, nodeC, 2);
const edge3: WeightedGraphEdge<string> = graph.makeEdge(nodeB, nodeC, 4);
const edge4: WeightedGraphEdge<string> = graph.makeEdge(nodeB, nodeD, 2);
const edge5: WeightedGraphEdge<string> = graph.makeEdge(nodeB, nodeE, 6);
const edge6: WeightedGraphEdge<string> = graph.makeEdge(nodeC, nodeE, 3);
const edge7: WeightedGraphEdge<string> = graph.makeEdge(nodeD, nodeE, 1);


graph.add_edge(edge1);
graph.add_edge(edge2);
graph.add_edge(edge3);
graph.add_edge(edge4);
graph.add_edge(edge5);
graph.add_edge(edge6);
graph.add_edge(edge7);
graph.printEdges();

