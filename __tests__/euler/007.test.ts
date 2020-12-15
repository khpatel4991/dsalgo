import { nthPrime } from '../../src/euler/007';
import { b } from "../../src/helpers";

const testCases = [
  [1, 2],
  [2, 3],
  [3, 5],
  [4, 7],
  [5, 11],
  [6, 13],
  [7, 17],
  [8, 19],
  [10001, 104743],
];

describe('nth Prime', () => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(nthPrime(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
});
