# 剑指 Offer II 091.粉刷房子

```ts
/*
 * @lc app=leetcode.cn id=剑指 Offer II 091 lang=typescript
 *
 * [剑指 Offer II 091] 粉刷房子
 */

// @lc code=start
function minCost(costs: number[][]): number {}
// @lc code=end
```

## 解法 1: 动态规划

```ts
function minCost(costs: number[][]): number {
  const n = costs.length
  let pre = [0, 0, 0],
    cur = [Infinity, Infinity, Infinity]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (j === k) continue
        cur[j] = Math.min(cur[j], pre[k] + costs[i][j])
      }
    }
    pre = cur
    cur = [Infinity, Infinity, Infinity]
  }
  return Math.min(...pre)
}
```

## Case

```ts
test.each([
  {
    input: {
      costs: [
        [17, 2, 17],
        [16, 16, 5],
        [14, 3, 19],
      ],
    },
    output: 10,
  },
  { input: { costs: [[7, 6, 2]] }, output: 2 },
])('input: costs = $input.costs', ({ input: { costs }, output }) => {
  expect(minCost(costs)).toEqual(output)
})
```
