function isIsomorphic(s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], t[i]);

      let values = Array.from(map.values());
      let found = values.filter((item) => item === t[i]);
      if (found.length > 1) {
        return false;
      }
    } else {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }

  return true;
}
