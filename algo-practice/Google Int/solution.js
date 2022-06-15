//n = str1.len
//m = str2.len

const rounds = (str1, str2) => {
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


console.log(rounds("sssssssr", "rrrrrrrrr"))
