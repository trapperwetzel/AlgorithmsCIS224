export type WeightedGraphNode<T> = {
  value: T,
  neighbors: { node: WeightedGraphNode<T>, weight: number | null }[];
}
export type WeightedGraphEdge<T> = {
  Point1: WeightedGraphNode<T>,
  Point2: WeightedGraphNode<T>,
  weight: number | null
}



export class WeightedGraph<T> {
  private _nodes: WeightedGraphNode<T>[] = []; // This is our adjacency list 
  private _edges: WeightedGraphEdge<T>[] = [];


  add_node(nodeToAdd: WeightedGraphNode<T>): void {
    if (!this._nodes.includes(nodeToAdd)) {
      this._nodes.push(nodeToAdd)
    } else {
      throw new Error("Node already added!");
    }
    return
  }
  remove_node(nodeToRemove: WeightedGraphNode<T>): WeightedGraphNode<T> | void {
    const nodeIndex = this._nodes.indexOf(nodeToRemove);
    if (nodeIndex === -1) { return; }
    this._nodes.splice(nodeIndex, 1);

    for (const n of this._nodes) {
      n.neighbors = n.neighbors.filter(nodeObj => nodeObj.node != nodeToRemove);
    }

    this._edges = this._edges.filter(edge => edge.Point1 != nodeToRemove && edge.Point2 != nodeToRemove)
    return
  }


  add_edge(edgeToAdd: WeightedGraphEdge<T>): void {

    if (!this._nodes.includes(edgeToAdd.Point1)) {
      this.add_node(edgeToAdd.Point1)
    }

    if (!this._nodes.includes(edgeToAdd.Point2)) {
      this.add_node(edgeToAdd.Point2);
    }

    const alreadyConnectedPoint2 = edgeToAdd.Point1.neighbors.some(nodeObj => nodeObj.node === edgeToAdd.Point2);
    const alreadyConnectedPoint1 = edgeToAdd.Point2.neighbors.some(nodeObj => nodeObj.node === edgeToAdd.Point1);

    if (!alreadyConnectedPoint2) {
      edgeToAdd.Point1.neighbors.push({ node: edgeToAdd.Point2, weight: edgeToAdd.weight })
    }
    if (!alreadyConnectedPoint1) {
      edgeToAdd.Point2.neighbors.push({ node: edgeToAdd.Point1, weight: edgeToAdd.weight });
    }


    this._edges.push(edgeToAdd)
  }

  remove_edge(edgeToRemove: WeightedGraphEdge<T>): WeightedGraphNode<T> | void {
    const edgeIndex = this._edges.indexOf(edgeToRemove);
    if (edgeIndex === -1) { return; }
    this._edges.splice(edgeIndex, 1);

    edgeToRemove.Point1.neighbors = edgeToRemove.Point1.neighbors.filter(nodeObj => nodeObj.node != edgeToRemove.Point2)
    edgeToRemove.Point2.neighbors = edgeToRemove.Point2.neighbors.filter(nodeObj => nodeObj.node != edgeToRemove.Point1)

  }


  adjacent(node1: WeightedGraphNode<T>, node2: WeightedGraphNode<T>) {
    const tempEdge: WeightedGraphEdge<T> = {
      Point1: node1,
      Point2: node2,
      weight: null

    }
    for (const edge of this._edges) {
      if (edge.Point1 == tempEdge.Point1 && edge.Point2 == tempEdge.Point2) {
        console.log(node1, node2, "Is an edge!");
        return true;
      }
    }
  }


  dijkstra(startNode: WeightedGraphNode<T>) {
    /*
      distances: map the best distances to each node 
      previous: keep a list of where we came from for every node.
      unvisited: keep a list of nodes we still need to visit.  
    */
    const distances = new Map<WeightedGraphNode<T>, number>();
    const previous = new Map<WeightedGraphNode<T>, WeightedGraphNode<T> | null>();
    const unvisited: WeightedGraphNode<T>[] = [];

    for (const node of this._nodes) {
      // if this is the startNode we know that the distance is zero. If it is not, we set the distances to infinity until we visit them.
      node === startNode ? distances.set(node, 0) : distances.set(node, Infinity);
      previous.set(node, null);
      unvisited.push(node);
    }

    while (unvisited.length > 0) {
      unvisited.sort((a, b) => distances.get(a)! - distances.get(b)!);
      const closestNode = unvisited.shift();

      for (const neighborObj of closestNode!.neighbors) {

        const tempDistance = distances.get(closestNode!)! + neighborObj.weight!;
        const currentDistance = distances.get(neighborObj.node)!;

        if (tempDistance < currentDistance) {
          distances.set(neighborObj.node, tempDistance);
          previous.set(neighborObj.node, closestNode!);

        }
      }
    }


    return { distances, previous };
  }
  prims(startNode: WeightedGraphNode<T>) {

    const costs = new Map<WeightedGraphNode<T>, number>();
    const parents = new Map<WeightedGraphNode<T>, WeightedGraphNode<T> | null>();
    const unvisited: WeightedGraphNode<T>[] = [];

    for (const node of this._nodes) {
      if (node === startNode) {
        costs.set(node, 0);
      } else {
        costs.set(node, Infinity);
      }
      parents.set(node, null);
      unvisited.push(node);
    }

    while (unvisited.length > 0) {
      unvisited.sort((a, b) => costs.get(a)! - costs.get(b)!);
      const closestNode = unvisited.shift();
      if (costs.get(closestNode!) === Infinity) break;
      for (const neighborObj of closestNode!.neighbors) {
        const edgeWeight = neighborObj.weight!;
        if (unvisited.includes(neighborObj.node) && edgeWeight < costs.get(neighborObj.node)!) {
          costs.set(neighborObj.node, edgeWeight);
          parents.set(neighborObj.node, closestNode!);
        }
      }
    }

    return { parents };
  }
  kruskals() {

    const sortedEdges = [...this._edges].sort((a, b) => a.weight! - b.weight!);

    const clusterLeader = new Map<WeightedGraphNode<T>, WeightedGraphNode<T>>();

    for (const node of this._nodes) {
      clusterLeader.set(node, node);
    }

    const findLeader = (node: WeightedGraphNode<T>): WeightedGraphNode<T> => {
      if (clusterLeader.get(node) === node) {
        return node;
      }
      const leader = findLeader(clusterLeader.get(node)!);
      clusterLeader.set(node, leader);
      return leader;
    };

    const union = (node1: WeightedGraphNode<T>, node2: WeightedGraphNode<T>) => {
      const leader1 = findLeader(node1);
      const leader2 = findLeader(node2);
      clusterLeader.set(leader1, leader2);
    };

    const mstEdges: WeightedGraphEdge<T>[] = [];

    for (const edge of sortedEdges) {
      if (findLeader(edge.Point1) !== findLeader(edge.Point2)) {
        mstEdges.push(edge);
        union(edge.Point1, edge.Point2);
      }
    }

    return mstEdges;
  }


  /* Search methods 
  DFS
  BFS
  */

  breadthFirstSearch(startNode: WeightedGraphNode<T>): void {

    const costs = new Map<WeightedGraphNode<T>, number>();
    const _queue: WeightedGraphNode<T>[] = [];
    const visited: WeightedGraphNode<T>[] = [];
    costs.set(startNode, 0);
    _queue.push(startNode);
    visited.push(startNode);

    while (_queue.length > 0) {

      const currentNode = _queue.shift();
      if (!currentNode) { throw new Error("No more nodes left"); }
      const msg = "Visiting Node:";
      console.log(msg, currentNode.value);

      for (const nodeObj of currentNode.neighbors) {
        if (visited.includes(nodeObj.node)) {
          continue;
        } else {
          visited.push(nodeObj.node);
          _queue.push(nodeObj.node);
          costs.set(nodeObj.node, nodeObj.weight!);
        }
      }
    }

    costs.forEach((value, key) => {
      console.log("Traveling to", key.value, "costed", value);
    })

  }

  depthFirstSearch(startNode: WeightedGraphNode<T>): void {
    const visited: WeightedGraphNode<T>[] = [];
    visited.push(startNode);
    const dfsHelper = (helperNode: WeightedGraphNode<T>) => {
      console.log("Visiting: ", helperNode.value);
      for (const tempNode of helperNode.neighbors) {
        if (!visited.includes(tempNode.node)) {
          visited.push(tempNode.node);
          dfsHelper(tempNode.node);;
        }
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
    const createdNode: WeightedGraphNode<T> = {
      value: node,
      neighbors: [],
    }
    return createdNode;
  }
  makeEdge(point1: WeightedGraphNode<T>, point2: WeightedGraphNode<T>, weight: number | null) {
    const createdEdge: WeightedGraphEdge<T> = {
      Point1: point1,
      Point2: point2,
      weight: weight
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
      console.log(edge.Point1.value, "--->", edge.Point2.value, "|", "Weight: ", edge.weight);
      console.log("--------------------------------------------------------")
    })
  }

  printNodes() {
    this._nodes.forEach(node => {
      console.log("node:", node.value)
      console.log(node.neighbors);
    })
  }
}



