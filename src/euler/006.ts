export const diffBetweenSums = (n: number): number => {
  let s1 = 0;
  let s2 = 0;
  for (let index = 1; index <= n; index++) {
    s1 += index;
    s2 += index * index;
  }
  s1 *= s1;
  return s1 - s2;
};

export {};
