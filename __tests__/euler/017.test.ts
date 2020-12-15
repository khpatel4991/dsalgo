import { numberLetterCount } from '../../src/euler/017';
import { TestCases } from '../../src/types';
import { b } from "../../src/helpers";

const testCases: TestCases<number, number> = [
  [1, 3],
  [2, 6],
  [3, 11],
  [4, 15],
  [5, 19],
  [6, 22],
  [7, 27],
  [8, 32],
  [20, 112],
  [21, 121],
  [114, 1113],
  [115, 1133],
  [999, 21113],
  [1000, 21124],
];

describe('Number letter counts', (): void => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(numberLetterCount(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
});
