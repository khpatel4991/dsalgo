import { highestPrimeFactor } from './003';

const memo: Record<number, number> = {};

export const sumOfPrimesBelow = (n: number): number => {
  if (n < 3) return 0;
  if (memo[n]) return memo[n];
  let acc = 0;
  let lp = 2;
  const isPrime = (p: number) => p === highestPrimeFactor(p);
  while (lp < n) {
    if (isPrime(lp)) {
      acc += lp;
    }
    lp++;
  }
  memo[n] = acc;
  return acc;
};

export {};
