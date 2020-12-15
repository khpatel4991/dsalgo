const getTokens = (n: number): string[] => {
  const known: Record<number, string> = Object.freeze({
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  });
  const tokens: string[] = [];
  if (n > 999) {
    const d = Math.floor(n / 1000);
    tokens.push(known[d], 'thousand', 'and');
    n -= d * 1000;
  }
  if (n === 0) {
    return tokens.slice(0, -1);
  }
  if (n > 99) {
    const d = Math.floor(n / 100);
    tokens.push(known[d], 'hundred', 'and');
    n -= d * 100;
  }
  if (n === 0) {
    return tokens.slice(0, -1);
  }
  // n is now 2 digit
  if (known[n]) {
    tokens.push(known[n]);
    return tokens;
  } else {
    const d = Math.floor(n / 10);
    const r = n % 10;
    tokens.push(known[d * 10], known[r]);
    return tokens;
  }
};

export const numberLetterCount = (n: number): number => {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const tokens = getTokens(i);
    ans += tokens.join('').length;
  }
  return ans;
};

export default {};
