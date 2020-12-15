export const pythagorianTripletWithSum = (
  n: number,
): [number, number, number] => {
  let triplet: [number, number, number] = [-1, -1, -1];
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      for (let k = j + 1; k <= n; k++) {
        if (i * i + j * j === k * k) {
          if (i + j + k === n) {
            triplet = [i, j, k];
            break;
          }
        }
      }
    }
  }
  return triplet;
};

export {};
