function wordPattern(pattern, str) {
  let words = str.split(" ");

  if (pattern.length !== words.length) return false;

  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) {
        return false;
      }
    } else {
      let values = Array.from(map.values());
      if (values.includes(words[i])) {
        return false;
      }
      map.set(pattern[i], words[i]);
    }
  }

  return true;
}
