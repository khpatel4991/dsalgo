const isPalindrome = (n: number): boolean => {
  const str = n.toString();
  const r = str.split('').reverse().join('');
  return str === r;
};

export const largestPalindromeProduct = (digits: number): number => {
  if (digits < 1) return 0;
  const max = Number(Array.from(Array(digits), () => '9').join(''));
  let ans = Number.NEGATIVE_INFINITY;

  for (let i = max; i > 1; i--) {
    for (let j = i; j >= 1; j--) {
      if (isPalindrome(i * j)) {
        ans = Math.max(i * j, ans);
      }
    }
  }
  return ans;
};

export {};
