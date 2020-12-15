export const highestPrimeFactor = (n: number, log = false): number => {
  let t = n;
  for (let i = 2; i * i <= n; i++) {
    let multiples = 0;
    while (t % i === 0) {
      multiples++;
      t = t / i;
    }
    if (multiples > 0) {
      if (t === 1) {
        t = i;
      }
    }
  }
  // eslint-disable-next-line no-console
  if (log) console.log(t);
  return t;
};

export {};
