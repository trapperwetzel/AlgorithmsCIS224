export type GraphNode<T> = {
  value: T,
  neighbors: GraphNode<T>[];
}
export type GraphEdge<T> = {
  Point1: GraphNode<T>,
  Point2: GraphNode<T>
}


export class Graph<T> {
  private _nodes: GraphNode<T>[] = [];
  private _edges: GraphEdge<T>[] = [];


  add_node(nodeToAdd: GraphNode<T>): void {
    if (!this._nodes.includes(nodeToAdd)) {
      this._nodes.push(nodeToAdd)
    } else {
      throw new Error("Node already added!");
    }
    return
  }
  remove_node(nodeToRemove: GraphNode<T>): GraphNode<T> | void {
    const nodeIndex = this._nodes.indexOf(nodeToRemove);
    if (nodeIndex === -1) { return; }
    this._nodes.splice(nodeIndex, 1);

    for (const n of this._nodes) {
      n.neighbors = n.neighbors.filter(node => node != nodeToRemove);
    }

    this._edges = this._edges.filter(edge => edge.Point1 != nodeToRemove && edge.Point2 != nodeToRemove)
    return
  }


  add_edge(edgeToAdd: GraphEdge<T>): void {

    if (!this._nodes.includes(edgeToAdd.Point1)) {
      this.add_node(edgeToAdd.Point1)
    }

    if (!this._nodes.includes(edgeToAdd.Point2)) {
      this.add_node(edgeToAdd.Point2);
    }

    if (!edgeToAdd.Point1.neighbors.includes(edgeToAdd.Point2)) {
      edgeToAdd.Point1.neighbors.push(edgeToAdd.Point2);
    }
    if (!edgeToAdd.Point2.neighbors.includes(edgeToAdd.Point1)) {
      edgeToAdd.Point2.neighbors.push(edgeToAdd.Point1);
    }


    this._edges.push(edgeToAdd)
  }

  remove_edge(edgeToRemove: GraphEdge<T>): GraphNode<T> | void {
    const edgeIndex = this._edges.indexOf(edgeToRemove);
    if (edgeIndex === -1) { return; }
    this._edges.splice(edgeIndex, 1);

    edgeToRemove.Point1.neighbors = edgeToRemove.Point1.neighbors.filter(node => node != edgeToRemove.Point2)
    edgeToRemove.Point2.neighbors = edgeToRemove.Point2.neighbors.filter(node => node != edgeToRemove.Point1)

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
  /* Search methods 
  DFS
  BFS
  */
  depthFirstSearch(startNode: GraphNode<T>): void {
    const visitedNodes: GraphNode<T>[] = [];

    const dfsHelper = (helperNode: GraphNode<T>) => {
      if (visitedNodes.includes(helperNode)) { return; }
      else {
        console.log("--------------------------------")
        console.log("Visiting: ", helperNode.value);
        console.log("--------------------------------")
        visitedNodes.push(helperNode);
      }

      for (const neighbor of helperNode.neighbors) {
        dfsHelper(neighbor)
      }

    }

    dfsHelper(startNode);

  }



  /*
  node factory
  edge factory 
  methods to make creating nodes and edges easier 
  */
  makeNode(node: T) {
    const createdNode: GraphNode<T> = {
      value: node,
      neighbors: [],
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
      console.log("node:", node.value)
    })
  }
}



