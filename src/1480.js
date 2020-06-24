/**
 * https://leetcode-cn.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 */

// 84ms 22.50% 34.9MB 100.00%
var runningSum = function (nums) {
  let sum = 0;
  return nums.map((value) => {
    sum += value;
    return sum;
  });
};

// 72ms 77.31 35.1MB 100%
var runningSum2 = function (nums) {
  let sum = 0,
    arr = [],
    length = nums.length;
  for (let i = 0; i < length; i++) {
    sum += nums[i];
    arr[i] = sum;
  }
  return arr;
};

console.log(runningSum2([1, 2, 3, 4]));
