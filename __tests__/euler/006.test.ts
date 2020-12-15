import { diffBetweenSums } from '../../src/euler/006';
import { b } from "../../src/helpers";

const testCases = [
  [0, 0],
  [1, 0],
  [2, 4],
  [3, 22],
  [10, 2640],
  [100, 25164150],
];

describe('Difference between "square of sum of digits" and "sum of digits squared"', () => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(diffBetweenSums(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });
});
