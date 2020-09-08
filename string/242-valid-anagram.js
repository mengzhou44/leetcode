/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  let map = new Map();
  for (let c of s) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }

  for (let c of t) {
    if (!map.has(c)) {
      return false;
    } else {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) {
        map.delete(c);
      }
    }
  }

  return map.size === 0;
}
