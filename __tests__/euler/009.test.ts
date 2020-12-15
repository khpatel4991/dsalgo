import { pythagorianTripletWithSum } from '../../src/euler/009';
import { TestCases } from '../../src/types';
import { b } from "../../src/helpers";

const testCases: TestCases<number, [number, number, number]> = [
  [12, [3, 4, 5]],
  [30, [5, 12, 13]],
  [1000, [200, 375, 425]],
];

describe('Greatest product of k consecutive digits in a number', (): void => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(pythagorianTripletWithSum(testCases[i][0])).toEqual(
        testCases[i][1],
      );
    });
  });
});
