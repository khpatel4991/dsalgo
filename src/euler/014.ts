const collatzSequenceCount = (n: number): number => {
  if (n === 1) return 1;
  let o = n;
  let c = 0;
  while (o !== 1) {
    if (o % 2 === 0) o = o / 2;
    else o = 3 * o + 1;
    c++;
  }
  return c;
};

export const longestCollatzSequence = (n: number): number => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  if (n === 3) return 2;
  let longestSeen = 2;
  let ans = 2;
  for (let i = 2; i < n; i++) {
    const curr = collatzSequenceCount(i);
    if (curr > longestSeen) {
      longestSeen = curr;
      ans = i;
    }
  }
  return ans;
};

export {};
