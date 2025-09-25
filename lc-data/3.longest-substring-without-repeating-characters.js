/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  if (s.length < 2) {
    return s.length;
  }
  let left = 0;
  let right = 0;
  const map = new Map();

  while (right < s.length) {
    while (map.has(s[right])) {
      map.delete(s[left]);
      left++;
    }
    res = Math.max(res, right - left + 1);
    map.set(s[right], true);

    right++;
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
