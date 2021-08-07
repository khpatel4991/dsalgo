import { AdjacencyList } from "../types";

export const dfsIterative = (
  graph: AdjacencyList,
  src: string,
  fn: (n: string) => void
) => {
  const stack = [src];

  while (stack.length > 0) {
    const node = stack.pop();
    fn(node);
    graph[node].forEach((child) => {
      stack.push(child);
    });
  }
};

export const dfsRecursive = (
  graph: AdjacencyList,
  src: string,
  fn: (n: string) => void
) => {
  fn(src);

  graph[src].forEach((child) => {
    dfsRecursive(graph, child, fn);
  });
};
