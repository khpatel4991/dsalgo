import { dfsIterative, dfsRecursive } from "../../src/graphs/dfs";
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
    ["A", "B", "D", "F", "C", "E"],
  ],
];

const testCases2: TestCases<[AdjacencyList, string], string[]> = [
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
    ["A", "C", "E", "B", "D", "F"],
  ],
];

describe("Iterative DFS", () => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      const arr = [];
      const pusher = (s: string) => arr.push(s);
      dfsIterative(testCases[i][0][0], testCases[i][0][1], pusher);
      expect(arr).toEqual(testCases[i][1]);
    });
  });
});

describe("Recursive DFS", () => {
  Array.from(Array(testCases2.length), b).forEach((i) => {
    test(`Iter ${testCases2[i]}`, () => {
      const arr = [];
      const pusher = (s: string) => arr.push(s);
      dfsRecursive(testCases2[i][0][0], testCases2[i][0][1], pusher);
      expect(arr).toEqual(testCases2[i][1]);
    });
  });
});
