function convertToTitle(n) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let result = [];
  while (n > 0) {
    let temp = (n - 1) % 26;
    result.unshift(letters[temp]);
    n = Math.floor((n - 1) / 26);
  }

  return result.join("");
}
