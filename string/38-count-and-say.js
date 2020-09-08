function countAndSay(n) {
  if (n === 1) return "1";

  let temp = countAndSay(n - 1);

  return helper(temp);
}

function helper(str) {
  let result = [];
  let current = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === current) {
      count++;
    } else {
      result.push(count);
      result.push(current);
      current = str[i];
      count = 1;
    }
  }

  result.push(count);
  result.push(current);

  return result.join("");
}
