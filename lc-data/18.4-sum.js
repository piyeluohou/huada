/*
 * @lc app=leetcode.cn id=18 lang=javascript
 * @lcpr version=30204
 *
 * [18] 四数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

const nSum = (nums, start, target, n) => {
  let res = [];
  if (n === 2) {
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  } else {
    for (let i = start; i < nums.length - n + 1; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      const results = nSum(nums, i + 1, target - nums[i], n - 1);
      for (let value of results) {
        res.push([nums[i], ...value]);
      }
    }
  }
  return res;
};

var fourSum = function (nums, target) {
  if (!Array.isArray(nums) || nums.length < 4) {
    return [];
  }
  nums.sort((a, b) => a - b);

  return nSum(nums, 0, target, 4);
};
// @lc code=end

/*
// @lcpr case=start
// [1,0,-1,0,-2,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n8\n
// @lcpr case=end

 */
