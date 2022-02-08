/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let maxProfit = 0;
  let min;
  for (const val of prices){
    if (min === undefined || val < min) min = val
    if (val - min > maxProfit) maxProfit = val - min
  }
  return maxProfit
};
