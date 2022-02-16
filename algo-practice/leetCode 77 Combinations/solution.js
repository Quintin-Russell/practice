/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 1) generate all possible numbers arr and result arr
  const possibilities = Array(n).fill(0).map((_, i) => i+1);
  const res = [];

  // 2)generate self calling function that takes 2 arrays:
  // arr1: aray of targets; arr2: the rest
  const work = (target, rest) => {
    //2a) push target to result if target.length === k
    // (desired combo number)
    if (target.length === k) res.push(target)
    // 2b) itterate thru rest using explicit for loop
    for (let i = 0; i < rest.length; i++) {
    // 2c) call function on target + rest[i] and copy of rest from
    //i+1 to end
    const workingRest = rest.slice(i+1)
    work([...target, rest[i]], workingRest)
    }
  }

  // 3) call function with empty target array and all possible array
  work([], possibilities)
  return res
};
