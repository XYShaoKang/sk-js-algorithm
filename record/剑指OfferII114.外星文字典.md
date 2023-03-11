# 剑指 Offer II 114.外星文字典

```ts
/*
 * @lc app=leetcode.cn id=剑指 Offer II 114 lang=typescript
 *
 * [剑指 Offer II 114] 外星文字典
 */

// @lc code=start
function alienOrder(words: string[]): string {}
// @lc code=end
```

## 解法 1: 建图 + 拓扑排序

```ts
function alienOrder(words: string[]): string {
  const g: Set<number>[] = Array.from({ length: 26 }, () => new Set()),
    d: number[] = new Array(26).fill(0),
    set = new Set(
      words
        .map(word => word.split(''))
        .flat()
        .map(char => char.charCodeAt(0) - 97),
    )
  const add = (i: number, j: number) => {
    if (g[i].has(j)) return
    g[i].add(j)
    d[j]++
  }
  for (let i = 1; i < words.length; i++) {
    const pre = words[i - 1],
      cur = words[i]
    for (let j = 0; j < pre.length; j++) {
      if (cur[j] === undefined) return ''
      if (pre[j] !== cur[j]) {
        add(pre.charCodeAt(j) - 97, cur.charCodeAt(j) - 97)
        break
      }
    }
  }
  const queue: number[] = []
  for (let i = 0; i < 26; i++) {
    if (d[i] === 0 && g[i].size) {
      queue.push(i)
    }
  }
  for (let i of queue) {
    for (let j of g[i]) {
      d[j]--
      if (d[j] === 0) queue.push(j)
    }
  }
  for (let i = 0; i < 26; i++) if (d[i]) return ''
  for (let i of queue) set.delete(i)
  return queue
    .concat([...set])
    .map(num => String.fromCharCode(num + 97))
    .join('')
}
```

## Case

```ts
test.each([{ input: { words: ['wrt', 'wrf', 'er', 'ett', 'rftt'] }, output: 'wertf' }])(
  'input: words = $input.words',
  ({ input: { words }, output }) => {
    expect(alienOrder(words, second)).toEqual(output)
  },
)
```
