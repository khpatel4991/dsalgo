const gcd = (x: number, y: number): number => {
  if (x % y === 0) {
    return y;
  } else {
    return gcd(y, x % y);
  }
};

export const smallestMultiple = (n: number): number => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = (ans * i) / gcd(ans, i);
  }
  return ans;
};

export {};
