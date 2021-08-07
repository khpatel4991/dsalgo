import { AdjacencyList } from "../types";

export const bfsIterative = (
  graph: AdjacencyList,
  start: string,
  fn: (n: string) => void
) => {
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    fn(node);
    graph[node].forEach((node) => {
      queue.push(node);
    });
  }
};
