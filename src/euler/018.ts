export const maximumPathSumForATriangle = (raw: string): number => {
  const lines = raw.trim().split('\n');
  const nums = lines.map((l) => l.trim().split(' ').map(Number));
  if (lines.length === 1) return nums[0][0];
  const arr = [nums[0][0]];
  let parentMaxIdx = 0;
  for (let i = 1; i < lines.length; i++) {
    const li = parentMaxIdx;
    const ri = parentMaxIdx + 1;
    const l = nums[i][li];
    const r = nums[i][ri];
    if (l > r) {
      parentMaxIdx = li;
      arr.push(l);
    } else {
      parentMaxIdx = li + 1;
      arr.push(r);
    }
  }
  return arr.reduce((acc, n) => acc + n, 0);
};
