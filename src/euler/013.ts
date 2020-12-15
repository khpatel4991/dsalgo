export const firstKDigitOfSum = (
  ns: bigint[],
  k: number,
  carry = 0n,
): bigint => {
  if (ns.length === 0) return 0n;
  const ipdigits = ns[0].toString().length;
  if (ipdigits === 1) {
    return BigInt(
      ns
        .reduce((acc, n) => acc + BigInt(n), carry)
        .toString()
        .slice(0, k),
    );
  } else {
    return BigInt(
      ns
        .reduce((acc, n) => acc + BigInt(n), carry)
        .toString()
        .slice(0, k),
    );
  }

  return -1n;
};
