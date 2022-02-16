var maxSubArray = function (nums) {
  const dp = []
  dp.push(nums[0]);
  let max = dp[0]

  for (let i = 0; i < nums.length; i++) {
    dp.push(Math.max(dp[i - 1] + nums[i], nums[i]))
    if (dp[i] > max) max = dp[i]
  }
  return max
};
