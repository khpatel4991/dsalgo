export const tng = (m: number): number => (1 / 2) * m * (m + 1);

// Sourced from:
// https://sites.google.com/site/problemsolvingme/home/project-euler/problem-12
export const triangleNumberWithMoreThanKDivisors = (n: number): number => {
  if (n < 1) return 0;
  if (n === 1) return 3;
  let ans = 0;
  let found = false;
  let count;
  for (let i = 1; !found; i++) {
    count = 2;
    const t = tng(i);
    for (let k = 2; k <= Math.sqrt(t); k++) {
      if (t % k === 0) {
        count += 2;
      }
      if (count > n) {
        found = true;
        ans = t;
      }
    }
  }
  return ans;
};

export {};
