function removeDuplicateLetters(s) {
  let map = new Map();
  for (let c of s) {
    if (map.has(c)) {
      let item = map.get(c);
      item.count++;
    } else {
      map.set(c, {
        count: 1,
        used: false,
      });
    }
  }

  let result = [];
  for (let c of s) {
    let item = map.get(c);
    item.count--;
    if (item.used === true) continue;
    adjustResult(result, c);
    result.push(c);
    item.used = true;
  }
  return result.join("");

  function adjustResult(result, c) {
    while (result.length > 0) {
      let lastLetter = result[result.length - 1];
      let lastLetterItem = map.get(lastLetter);

      if (lastLetter > c && lastLetterItem.count > 0) {
        lastLetterItem.used = false;
        result.pop();
      } else {
        break;
      }
    }
  }
}
