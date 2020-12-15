import { highestPrimeFactor } from "../../src/euler/003";
import { b } from "../../src/helpers";
import { TestCases } from "../../src/types";

const testCases: TestCases<number, number> = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 2],
  [5, 5],
  [6, 3],
  [7, 7],
  [8, 2],
  [9, 3],
  [10, 5],
  [11, 11],
  [12, 3],
  [13, 13],
  [14, 7],
  [15, 5],
  [16, 2],
  [17, 17],
  [18, 3],
  [19, 19],
  [20, 5],
  [21, 7],
  [22, 11],
  [23, 23],
  [24, 3],
  [25, 5],
  [26, 13],
  [27, 3],
  [28, 7],
  [29, 29],
  [30, 5],
  [31, 31],
  [32, 2],
  [33, 11],
  [34, 17],
  [35, 7],
  [36, 3],
  [37, 37],
  [38, 19],
  [39, 13],
  [40, 5],
  [41, 41],
  [42, 7],
  [43, 43],
  [44, 11],
  [45, 5],
  [46, 23],
  [47, 47],
  [48, 3],
];

describe('Largest Prime Factor', () => {
  Array.from(Array(testCases.length), b).forEach((i) => {
    test(`Iter ${testCases[i]}`, () => {
      expect(highestPrimeFactor(testCases[i][0])).toEqual(testCases[i][1]);
    });
  });

  test('big ass', () => {
    expect(highestPrimeFactor(13195)).toEqual(29);
    expect(highestPrimeFactor(600851475143)).toEqual(6857);
  });
});
