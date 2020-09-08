function titleToNumber(s) {
  let result = 0;
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (let c of s) {
    result = result * 26 + letters.indexOf(c) + 1;
  }

  return result;
}
