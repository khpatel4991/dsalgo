import { highestPrimeFactor } from './003';

export const nthPrime = (n: number): number => {
  let lp = 1;
  for (let i = 1; i <= n; i++) {
    let s = lp + 1;
    while (s !== highestPrimeFactor(s)) {
      s++;
    }
    lp = s;
  }
  return lp;
};

export {};
