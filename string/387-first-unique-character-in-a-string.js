function firstUniqChar(s) {
  let map = new Map();
  for (let c of s) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}


function firstUniqChar(s) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    let item = array.find((item) => s[item.pos] === s[i]);
    if (item !== undefined) {
      item.count++;
    } else {
      array.push({
        pos: i,
        count: 1,
      });
    }
  }

  for (let item of array) {
    if (item.count === 1) return item.pos;
  }

  return -1;
}
