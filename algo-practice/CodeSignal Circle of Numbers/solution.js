function solution(n, firstNumber) {
  const arr = Array.from(Array(n).keys())
  const ind = (firstNumber < n / 2) ? firstNumber + n / 2 : firstNumber - n / 2
  return arr[ind]
}
