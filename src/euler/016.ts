export const powerDigitSum = (n: number): number => {
  const exp: bigint = Array.from(Array(n), () => {
    return 2n;
  }).reduce((acc, n) => {
    return acc * n;
  }, 1n);
  return exp
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, n) => acc + n, 0);
};
