//n = str1.len
//m = str2.len

//itteration: O(n*m)
/* const rounds = (str1, str2) => {
  let counter = 0
  let i = 0
  let j = 0

  const str1Chars = {}
  for (const char of str1) {
    if (!str1Chars[char]) str1Chars[char] = 1
  }

  while (j < str2.length) {
    if (!str1Chars[str2[j]]) return -1

    if (str1[i] === str2[j]) {
      j++
      i++
      if (i === str1.length) {
        counter++
        i = 0
      }
    };

    if (str1[i] !== str2[j]) { i++ };

    if (i === str1.length) {
      counter++
      i = 0
    }
  }


  return counter;
}
*/

const rounds = (str1, str2) => {
  //PART 1
  const str1Chars = {}
  for (let idx = 0; idx < str1.length; idx++) {
    if (!str1Chars[str1[idx]]) {
      str1Chars[str1[idx]] = { "idxs": { [idx.toString()]: idx}}
    } else {
      str1Chars[str1[idx]].idxs[idx.toString()] = idx
    }
  }
  console.log('str1Chars:', str1Chars)
  //PART 2
  const findNextOccurence = (obj, tar, max) => {
    let rounds = 0
    while (tar <= max) {
        if (tar === max) {
          rounds++
          tar = 0
        }
        if (obj[tar.toString()] !== undefined){
        return {idx: obj[tar]+1, rounds}
      } else {
          tar++
    }
  }
  }
  //PART 3
  let numOfRounds = 1
  let i = 0

  for (const letter of str2) {
    if (!str1Chars[letter]) return null
    const nextOccurence = findNextOccurence(str1Chars[letter].idxs, i, str1.length)
    numOfRounds += nextOccurence.rounds
    i = nextOccurence.idx
  }
  return numOfRounds
}

console.log(rounds("aaabbce", "aacebbabc"))
