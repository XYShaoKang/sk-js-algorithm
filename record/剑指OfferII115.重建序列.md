# 剑指 OfferII115.重建序列

```ts
/*
 * @lc app=leetcode.cn id=剑指 Offer II 115 lang=typescript
 *
 * [剑指 Offer II 115] 重建序列
 */

// @lc code=start
function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {}
// @lc code=end
```

## 解法 1: 拓扑排序

```ts
function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {
  const n = nums.length
  let h: number[] = new Array(n).fill(-1),
    e: number[] = [],
    ne: number[] = [],
    d: number[] = new Array(n).fill(0),
    idx = 0
  const add = (i: number, j: number) => {
    ;(e[idx] = j), (ne[idx] = h[i]), d[j]++, (h[i] = idx++)
  }
  for (let arr of sequences) {
    for (let i = 0; i < arr.length - 1; i++) {
      add(arr[i] - 1, arr[i + 1] - 1)
    }
  }
  let root = -1

  for (let i = 0; i < n; i++) {
    if (d[i] === 0) {
      if (root !== -1) return false
      root = i
    }
  }
  let res: number[] = []
  while (root !== -1) {
    res.push(root)
    let t = -1
    for (let i = h[root]; ~i; i = ne[i]) {
      const v = e[i]
      d[v]--
      if (!d[v]) t = v
    }
    root = t
  }

  return res.length === n
}
```

## Case

```ts
test.each([
  {
    input: {
      nums: [1, 2, 3],
      sequences: [
        [1, 2],
        [1, 3],
      ],
    },
    output: false,
  },
  { input: { nums: [1, 2, 3], sequences: [[1, 2]] }, output: false },
  {
    input: {
      nums: [1, 2, 3],
      sequences: [
        [1, 2],
        [1, 3],
        [2, 3],
      ],
    },
    output: true,
  },
])('input: nums = $input.nums, sequences = $input.sequences', ({ input: { nums, sequences }, output }) => {
  expect(sequenceReconstruction(nums, sequences)).toEqual(output)
})
```
