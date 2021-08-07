const graph = {
  A: ["C", "B"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: [],
};

export const dfsIterative = (graph, src, fn = console.log) => {
  const stack = [src];

  while (stack.length > 0) {
    const node = stack.pop();
    fn(node);
    graph[node].forEach((child) => {
      stack.push(child);
    });
  }
};

export const dfsRecursive = (graph, src, fn = console.log) => {
  fn(src);

  graph[src].forEach((child) => {
    dfsRecursive(graph, child, fn);
  });
};
