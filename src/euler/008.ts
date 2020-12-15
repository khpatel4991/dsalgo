export const highestKDigitProduct = (bn: bigint, window: number): number => {
  const s = bn.toString();
  let p = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= s.length - window; i++) {
    const prospective = s
      .slice(i, i + window)
      .split('')
      .reduce((acc, v) => acc * Number(v), 1);
    p = Math.max(p, prospective);
  }
  return p;
};

export {};
