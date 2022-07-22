# 剑指 Offer II 041. 滑动窗口的平均值

```ts
/*
 * @lc app=leetcode.cn id=剑指 Offer II 041 lang=typescript
 *
 * [剑指 Offer II 041] 滑动窗口的平均值
 */
// @lc code=start
class MovingAverage {
  constructor(private size: number) {}

  next(val: number): number {}
}
// @lc code=end
```

## 解法 1: 滑动窗口

```ts
class MovingAverage {
  private arr: number[] = []
  private sum = 0
  constructor(private size: number) {}

  next(val: number): number {
    this.arr.push(val)
    this.sum += val
    if (this.arr.length > this.size) {
      this.sum -= this.arr[this.arr.length - this.size - 1]
    }
    return this.sum / Math.min(this.size, this.arr.length)
  }
}
```

## Case

```ts
test.each([
  {
    input: { ops: ['MovingAverage', 'next', 'next', 'next', 'next'], params: [[3], [1], [10], [3], [5]] },
    output: [null, 1.0, 5.5, 4.66667, 6.0],
  },
])('input: inputs = $input.inputs, inputs = $input.inputs', ({ input: { ops, params }, output }) => {
  const cls = new MovingAverage(params[0][0])
  let flag = true
  for (let i = 1; i < ops.length; i++) {
    const ans = cls[ops[i] as 'next'](...(params[i] as [number]))

    if (Math.abs(ans - (output[i] as number)) > 0.00001) flag = false
  }
  expect(flag).toEqual(true)
})
```
