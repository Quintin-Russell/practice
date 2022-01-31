// 1) itterate thru string and if ! in map ? add to map (letter: [index])
// : map[letter].push(index)
// 2) at end, return map[letter].length == 1 else -1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    (s[i] in map)
      ? map[s[i]].push(i)
      : map[s[i]] = [i]
  };
  console.log('map:', map)
  for (const letter in map) {
    if (map[letter].length === 1) {
      return map[letter][0]
    }
  }
  return -1
};
