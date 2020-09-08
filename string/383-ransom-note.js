function canConstruct(ransomNote, magazine) {
  let map = new Map();

  for (let c of magazine) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }

  for (let c of ransomNote) {
    if (!map.has(c) || map.get(c) === 0) {
      return false;
    } else {
      map.set(c, map.get(c) - 1);
    }
  }

  return true;
}
