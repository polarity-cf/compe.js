const {
  Reader, proc,                        // IO & Processor
  multiArray, vectorArray,             // Fast array generators
  TreeSet, Deque, DSU, PriorityQueue,  // Data structures
  Graph, dfs, bfs, mst, dijkstra,      // Graph Algorithms
  setMod, add, sub, pow, inv, mul,     // Modular integer operations
  factSetup, fact, binom               // Modular combinatorics
} = require('compe');
// DO NOT EDIT THIS LINE //
function main(rl, wr) {
  let rd = new Reader(rl);
  // write your code from here
  let x = rd.readArray();
  let sum = 0;
  for (let y of x) {
    sum += y;
  }
  wr(sum);
}
proc(main, 'input.txt');