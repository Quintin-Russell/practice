/// https://www.youtube.com/watch?v=ZI2z5pq0TqA

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 1) return 0

  let l = 0
  let r = height.length - 1
  let maxL = height[l]
  let maxR = height[r]

  let totalRain = 0

  while (l < r) {
    if (maxL < maxR) {
      l++
      if (height[l] > maxL) maxL = height[l]
      const rainAtL = maxL - height[l]
      if (rainAtL > 0) totalRain += rainAtL


    } else {
      r--
      if (height[r] > maxR) maxR = height[r]
      const rainAtR = maxR - height[r]
      if (rainAtR > 0) totalRain += rainAtR


    }
  }
  return totalRain
};
