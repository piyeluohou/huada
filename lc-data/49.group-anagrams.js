/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30204
 *
 * [49] 字母异位词分组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const word of strs) {
    const charCount = new Array(26).fill(0);
    for (const char of word) {
      const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
      charCount[charCode]++;
    }
    const signStr = charCount.join();
    map.set(signStr, (map.get(signStr) || []).concat(word));
  }

  return [...map.values()];
};

// @lc code=end

/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */
