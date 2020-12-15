import { smallestMultiple } from "../../src/euler/005";
import { b } from "../../src/helpers";

const testCases = [
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 12],
  [5, 60],
  [6, 60],
  [10, 2520],
  [20, 232792560],
];

describe('Smallest multiple of all numbers between', () => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(smallestMultiple(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
});
