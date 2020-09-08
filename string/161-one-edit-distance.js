//Given two strings S and T, determine if they are both one edit distance apart.

// There are 3 possiblities to satisify one edit distance apart:

// Insert a character into  s  to get  t
// Delete a character from  s  to get  t
// Replace a character of  s  to get  t

function isOneEditDistance(s, t) {
  let m = s.length;
  let n = t.length;
  if (m > n) return isOneEditDistance(t, s);
  if (n - m > 1) return false;

  let diff = 0;
  if (m === n) {
    for (let i = 0; i < m; i++) {
      if (s[i] !== t[i]) {
        diff++;
      }
    }
    return diff === 1;
  }

  let i = 0;
  diff = 0;
  while (i < n) {
    if (s[i] !== t[i]) {
      i++;
      diff++;
    }
    i++;
  }
  console.log(diff);
  return diff === 1;
}

console.log(isOneEditDistance("abc", "ab"));
console.log(isOneEditDistance("abc", "aec"));
