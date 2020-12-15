// DP
const latticePathsTopDown = (
  i: number,
  j: number,
  memo: Map<string, number>,
): number => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (memo.has(`${i}:${j}`)) return memo.get(`${i}:${j}`)!;
  if (i === 0) {
    memo.set(`${i}:${j}`, j);
    return 1;
  }
  if (j === 0) {
    memo.set(`${i}:${j}`, i);
    return 1;
  }
  const fromleft = latticePathsTopDown(i - 1, j, memo);
  const frombottom = latticePathsTopDown(i, j - 1, memo);
  memo.set(`${i}:${j}`, fromleft + frombottom);
  return fromleft + frombottom;
};

export const latticePaths = (n: number): number => {
  const m = new Map<string, number>();
  return latticePathsTopDown(n, n, m);
};

export default {};
