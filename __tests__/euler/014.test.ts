import { longestCollatzSequence } from '../../src/euler/014';
import { TestCases } from '../../src/types';
import { b } from "../../src/helpers";

const testCases: TestCases<number, number> = [
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 3],
  [6, 3],
  [14, 9],
  [1000000, 837799],
];

describe('Longest Collatz Sequence', (): void => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(longestCollatzSequence(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
});
