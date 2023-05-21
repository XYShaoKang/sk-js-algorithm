# LCP33.蓄水

```ts
/*
 * @lc app=leetcode.cn id=LCP 33 lang=typescript
 *
 * [LCP 33] 蓄水
 */

// @lc code=start
function storeWater(bucket: number[], vat: number[]): number {}
// @lc code=end
```

## 解法 1: 枚举

```ts
function storeWater(bucket: number[], vat: number[]): number {
  if (vat.reduce((a, b) => a + b, 0) === 0) return 0
  const max = Math.max(...bucket.map((v, i) => (v ? Math.ceil(vat[i] / v) : vat[i] + 1)))
  let res = Infinity
  for (let i = 1; i <= max; i++) {
    let sum = 0
    for (let j = 0; j < bucket.length; j++) {
      sum += Math.max(Math.ceil(vat[j] / i) - bucket[j], 0)
    }
    res = Math.min(res, sum + i)
  }
  return res
}
```

## Case

```ts
test.each([
  { input: { bucket: [1, 3], vat: [6, 8] }, output: 4 },
  { input: { bucket: [9, 0, 1], vat: [0, 2, 2] }, output: 3 },
])('input: bucket = $input.bucket, vat = $input.vat', ({ input: { bucket, vat }, output }) => {
  expect(storeWater(bucket, vat)).toEqual(output)
})
```
