type Matrix<T> = T[][];

const gtom = (str: string): Matrix<number> => {
  const rows = str.trim().split(/\n/g);
  const nums = rows.map((row) => row.split(' ').map(Number));
  return nums;
};

export const highestGridProduct = (grid: string, window: number): number => {
  const mat = gtom(grid);
  if (!mat.length) {
    return 0;
  }
  if (window > mat[0].length) {
    return 0;
  }
  let ans = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      try {
        const r1 = Array.from(Array(window), (_, k) => mat[i + k][j]);
        const r2 = Array.from(Array(window), (_, k) => mat[i][j + k]);
        const r3 = Array.from(Array(window), (_, k) => mat[i + k][j + k]);
        const r4 = Array.from(Array(window), (_, k) => mat[i - k][j - k]);
        const r5 = Array.from(Array(window), (_, k) => mat[i - k][j + k]);
        const r6 = Array.from(Array(window), (_, k) => mat[i + k][j - k]);
        const p = (r: number[]) => r.reduce((acc, n) => acc * n, 1);
        const prospectives = [r1, r2, r3, r4, r5, r6].map(p);
        if (prospectives.some(isNaN)) {
          throw new Error('out of bounds');
        }
        ans = Math.max(ans, ...prospectives);
      } catch {
        continue;
      }
    }
  }
  return ans;
};
