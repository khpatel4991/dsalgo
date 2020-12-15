import { sumOfPrimesBelow } from '../../src/euler/010';
import { TestCases } from '../../src/types';
import { b } from "../../src/helpers";

const testCases: TestCases<number, number> = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 2],
  [4, 5],
  [5, 5],
  [6, 10],
  [7, 10],
  [8, 17],
  [10, 17],
];

describe('Sum of all primes lower than n', (): void => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(sumOfPrimesBelow(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
  test.skip('euler project problem', () => {
    expect(sumOfPrimesBelow(2000000)).toEqual(142913828922);
  });
});
