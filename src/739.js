/**
 * https://leetcode-cn.com/problems/daily-temperatures/
 * @param {number[]} T
 * @return {number[]}
 */
// n2
var dailyTemperatures = function (T) {
  let result = [];
  for (let i = T.length - 1; i > -1; i--) {
    result.unshift(getPos(i, T));
  }
  return result;

  function getPos(index, arr) {
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] > arr[index]) {
        return i - index;
      }
    }
    return 0;
  }
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
//[1, 1, 4, 2, 1, 1, 0, 0]
