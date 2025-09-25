/*
 * @lc app=leetcode.cn id=128 lang=javascript
 * @lcpr version=30204
 *
 * [128] 最长连续序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = new Map();
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      const leftCount = map.get(nums[i] - 1) || 0;
      const rightCount = map.get(nums[i] + 1) || 0;

      const curLength = 1 + leftCount + rightCount;
      map.set(nums[i] - leftCount, curLength);
      map.set(nums[i] + rightCount, curLength);
      map.set(nums[i], curLength);
      res = Math.max(res, curLength);
    }
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,2]\n
// @lcpr case=end

 */
