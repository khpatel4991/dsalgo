import { powerDigitSum } from '../../src/euler/016';
import { TestCases } from '../../src/types';
import { b } from "../../src/helpers";

const testCases: TestCases<number, number> = [
  [1, 2],
  [2, 4],
  [3, 8],
  [4, 7],
  [5, 5],
  [6, 10],
  [7, 11],
  [8, 13],
  [15, 26],
  [1000, 1366],
];

describe('Power Digit Sum', (): void => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(powerDigitSum(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
});
