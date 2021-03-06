import { Graph } from './graph';
import { DSU } from '../ds/dsu';

const mst = (graph: Graph) => {
  let mst = 0;
  let edges = [];
  let mstEdges = [];
  for (let i = 0; i < graph.g.length; i++) {
    for (let edge of graph.g[i]) {
      if (i < edge.to) {
        edges.push({
          from: i,
          to: edge.to,
          weight: edge.prop.weight,
        });
      }
    }
  }
  let dsu = new DSU(graph.g.length);
  edges.sort((edgeA, edgeB) => edgeA.weight - edgeB.weight);
  for (let edge of edges) {
    if (dsu.join(edge.from, edge.to)) {
      mst += edge.weight;
      mstEdges.push(edge);
    }
  }
  return {
    mst,
    mstEdges,
  };
};

export { mst };
