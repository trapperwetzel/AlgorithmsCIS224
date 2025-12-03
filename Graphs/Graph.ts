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

    if (!this._nodes.includes(edgeToAdd.Point1)) {
      this.add_node(edgeToAdd.Point1)
    }

    if (!this._nodes.includes(edgeToAdd.Point2)) {
      this.add_node(edgeToAdd.Point2);
    }

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
  /*
  node factory
  edge factory 
  methods to make creating nodes and edges easier 
  */
  makeNode(node: T) {
    const createdNode: GraphNode<T> = {
      value: node
    }
    return createdNode;
  }
  makeEdge(point1: GraphNode<T>, point2: GraphNode<T>) {
    const createdEdge: GraphEdge<T> = {
      Point1: point1,
      Point2: point2
    }
    return createdEdge;
  }


  /*
  #######################
       PRINT HELPERS
  #######################
  */
  printEdges() {
    console.log("Printing all edges");
    console.log("--------------------------------------------------------")
    this._edges.forEach(edge => {
      console.log(edge.Point1.value, "--->", edge.Point2.value);
      console.log("--------------------------------------------------------")
    })
  }

  printNodes() {
    this._nodes.forEach(node => {
      console.log("node:", node)
    })
  }
}



