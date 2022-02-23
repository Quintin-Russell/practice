function solution(divisor, bound) {
  let ret = 1;
  let counter = 1;

  while (ret < bound) {
    if (counter * divisor > bound) {
      return ret
    } else if (counter * divisor < bound) {
      ret = counter * divisor
      counter++
    } else {
      return counter * divisor
    }
  }
}
