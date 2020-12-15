const sumOfEvenValuedFibonacciNumbersBelow = (upperBound: number): number => {
  if (isNaN(upperBound)) return 0;
  let n1 = 1;
  let n2 = 2;
  let ans = 2;
  while (n1 + n2 < upperBound) {
    const next = n1 + n2;
    if (next % 2 === 0) {
      ans += next;
    }

    n1 = n2;
    n2 = next;
  }
  return ans;
};

if (require.main === module) {
  (function () {
    const ans = sumOfEvenValuedFibonacciNumbersBelow(
      Number(process.argv.slice(2)[0]),
    );
    // eslint-disable-next-line no-console
    console.log(ans);
  })();
}

export {};
