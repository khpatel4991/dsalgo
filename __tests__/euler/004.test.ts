import { largestPalindromeProduct } from "../../src/euler/004";
import { b } from "../../src/helpers";
import { TestCases } from '../../src/types';

const testCases: TestCases<number, number> = [
  [1, 9],
  [2, 9009],
  [3, 906609],
];

describe('Largest palindrome Product of 2 n digit numbers', () => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(largestPalindromeProduct(testCases[i][0])).toEqual(
        testCases[i][1],
      );
    });
  });
});
