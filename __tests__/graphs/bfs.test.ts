import { bfsIterative } from "../../src/graphs/bfs";
import { b } from "../../src/helpers";
import { TestCases, AdjacencyList } from "../../src/types";

const testCases: TestCases<[AdjacencyList, string], string[]> = [
  [
    [
      {
        A: ["C", "B"],
        B: ["D"],
        C: ["E"],
        D: ["F"],
        E: [],
        F: [],
      },
      "A",
    ],
    ["A", "C", "B", "E", "D", "F"],
  ],
];

describe("Iterative BFS", () => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      const arr = [];
      const pusher = (s: string) => arr.push(s);
      bfsIterative(testCases[i][0][0], testCases[i][0][1], pusher);
      expect(arr).toEqual(testCases[i][1]);
    });
  });
});
