import { latticePaths } from '../../src/euler/015';
import { TestCases } from '../../src/types';
import { b } from "../../src/helpers";

const testCases: TestCases<number, number> = [
  [1, 2],
  [2, 6],
  [3, 20],
  [20, 137846528820],
];

describe('Lattice Paths for n x n grid', (): void => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(latticePaths(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
});
