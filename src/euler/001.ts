const sumOfMultiplesof3And5 = (n: number): number => {
  if (isNaN(n)) return 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      ans += i;
    }
  }
  return ans;
};

if (require.main === module) {
  (function () {
    const ans = sumOfMultiplesof3And5(Number(process.argv.slice(2)[0]));
    // eslint-disable-next-line no-console
    console.log(ans);
  })();
}

export {};
