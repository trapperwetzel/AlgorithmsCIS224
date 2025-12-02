export type GraphNode<T> = {
  value: T,
}
export type GraphEdge<T> = {
  Point1: GraphNode<T>,
  Point2: GraphNode<T>
}

export class Graph<T> {
  private _nodes: GraphNode<T>[] = [];
  private _edges: GraphEdge<T>[] = [];


  add_node(nodeToAdd: GraphNode<T>): void {
    this._nodes.push(nodeToAdd)
    return
  }
  remove_node(): GraphNode<T> | void {
    return
  }

  add_edge(edgeToAdd: GraphEdge<T>): void {
    this._edges.push(edgeToAdd)
  }

  remove_edge(): GraphNode<T> | void {
    return;
  }

  adjacent(node1: GraphNode<T>, node2: GraphNode<T>) {
    const tempEdge: GraphEdge<T> = {
      Point1: node1,
      Point2: node2
    }
    for (const edge of this._edges) {
      if (edge.Point1 == tempEdge.Point1 && edge.Point2 == tempEdge.Point2) {
        console.log(node1, node2, "Is an edge!");
        return true;
      }
    }
  }

  printEdges() {
    this._edges.forEach(edge => {
      console.log("--------------------------------------------------------")
      console.log("Edge:", edge)
      console.log("--------------------------------------------------------")
    })
  }
}


