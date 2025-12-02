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


  add_node(): void {
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
    if (this._edges.includes(tempEdge)) {
      return true;
    } else {
      return false;
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


