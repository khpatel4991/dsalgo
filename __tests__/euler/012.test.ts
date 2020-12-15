import { triangleNumberWithMoreThanKDivisors } from '../../src/euler/012';
import { TestCases } from '../../src/types';
import { b } from "../../src/helpers";

const testCases: TestCases<number, number> = [
  [1, 3],
  [2, 6],
  [3, 6],
  [4, 28],
  [5, 28],
];

describe('First triangle number with over n divisors', (): void => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Case: ${testCases[i]}`, () => {
      expect(triangleNumberWithMoreThanKDivisors(testCases[i][0])).toEqual(
        testCases[i][1],
      );
    });
  });

  test.skip('euler case', () => {
    expect(triangleNumberWithMoreThanKDivisors(500)).toEqual(76576500);
  });
});
