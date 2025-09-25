/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30204
 *
 * [42] 接雨水
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  height = [0, ...height, 0];
  const length = height.length;

  const stack = [0];

  for (let i = 1; i < length; i++) {
    while (height[i] >= height[stack[stack.length - 1]]) {
      const preIdx = stack.pop();
      if (!stack.length) {
        break;
      }
      const minHeight = Math.min(height[i], height[stack[stack.length - 1]]);
      const width = i - stack[stack.length - 1] - 1;

      result += (minHeight - height[preIdx]) * width;
    }
    stack.push(i);
  }

  return result;
};

// @lc code=end

/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */
