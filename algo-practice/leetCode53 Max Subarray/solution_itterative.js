var maxSubArray = function (nums) {
  if (nums.length <= 1) return nums[0]

  let returnSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let x = i; x < nums.length; x++) {
      sum = sum + nums[x]
      if (sum >= returnSum) {
        returnSum = sum
      }
    }
  }
  return returnSum
};
