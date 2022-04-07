var maxArea = function (height) {
  //Pointers
  //initialize 2 pointers: one @ 0index and 1@ last index
  // for each pointer set:
  //multiply the min of the 2 times the x-distance apart; (> biggestCont) ? reassign biggestCont
  //if height[left] > height[right] ? right - 1 : left + 1
  let left = 0
  let right = height.length - 1
  let biggestCont = Math.min(height[left], height[right]) * (right)

  while (left !== right) {
    const lLTr = (height[left] < height[right])
    if (Math.min(height[left], height[right]) * (right - left) > biggestCont) biggestCont = Math.min(height[left], height[right]) * (right - left)
    if (lLTr) {
      left++
    } else {
      right--
    }
  }

  return biggestCont
};
