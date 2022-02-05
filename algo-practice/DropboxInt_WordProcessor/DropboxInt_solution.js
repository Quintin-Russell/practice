function solution(queries) {
  let ret = [];
  let currentStr = '';
  let cursor = 0;
  for (const q of queries) {
    if (q[0] === "APPEND") {
      currentStr = currentStr.substring(0, cursor) + q[1] + currentStr.substring(cursor, currentStr.length);
      ret.push(currentStr)
      cursor += q[1].length
    } else if (q[0] === "MOVE") {
      const newCursor = parseInt(q[1])
      cursor = newCursor
      ret.push(currentStr)
    } else if (q[0] === 'DELETE') {
      currentStr = currentStr.slice(0, cursor) + currentStr.slice(cursor + 1, currentStr.length)
      ret.push(currentStr)
    }
  }
  console.log('ret:', ret);
  return ret
}
