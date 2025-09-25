/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30204
 *
 * [76] 最小覆盖子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map()
    for (let i = 0; i < t.length; i++) {
      map.set(t[i], (map.get(t[i]) || 0) + 1)
    }

    let res = Infinity
    let left = 0
    let right = 0

    while(right < s.length) {
      
    }
};
// @lc code=end



/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */

