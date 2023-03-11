# 剑指 Offer 047.礼物的最大价值

```ts
/*
 * @lc app=leetcode.cn id=剑指 Offer 047 lang=typescript
 *
 * [剑指 Offer 047] 礼物的最大价值
 */

// @lc code=start
function maxValue(grid: number[][]): number {}
// @lc code=end
```

## 解法 1: 动态规划

```ts
function maxValue(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length
  const dp = Array.from({ length: m }, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i < m - 1) dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j] + grid[i][j])
      if (j < n - 1) dp[i][j + 1] = Math.max(dp[i][j + 1], dp[i][j] + grid[i][j])
    }
  }
  return dp[m - 1][n - 1] + grid[m - 1][n - 1]
}
```

## Case

```ts
test.each([
  {
    input: {
      grid: [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
    },
    output: 12,
  },
])('input: inputs = $input.inputs, inputs = $input.inputs', ({ input: { grid }, output }) => {
  expect(maxValue(grid)).toEqual(output)
})
```
