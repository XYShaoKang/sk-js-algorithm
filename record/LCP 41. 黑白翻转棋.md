# LCP 41. 黑白翻转棋

```ts
/*
 * @lc app=leetcode.cn id=LCP 41 lang=typescript
 *
 * [LCP 41] 黑白翻转棋
 */
// @lc code=start
function flipChess(chessboard: string[]): number {}
// @lc code=end
```

## 解法 1: 模拟

```ts
function flipChess(chessboard: string[]): number {
  const a = chessboard.map(s => s.split(''))
  const m = a.length,
    n = a[0].length
  let res = 0
  const calc = (a: string[][]): number => {
    let res = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (a[i][j] !== 'X') continue
        for (const [k, l] of [
          [0, 1],
          [1, 1],
          [1, 0],
          [1, -1],
        ]) {
          let x = i + k,
            y = j + l
          if (a[x]?.[y] === 'O') {
            let ans = 0
            for (let m = 1; ; m++) {
              const cur = a[i + k * m]?.[j + l * m]
              if (cur === undefined || cur === '.') break
              if (cur === 'X') {
                ans = m - 1
                break
              }
            }
            if (ans) {
              res += ans
              for (let m = 1; ; m++) {
                const cur = a[i + k * m]?.[j + l * m]
                if (cur === 'X') break
                a[i + k * m][j + l * m] = 'X'
              }
            }
          }
        }
      }
    }
    if (!res) return 0
    return res + calc(a)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i][j] !== '.') continue
      let cnt = 0
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          const x = i + k,
            y = j + l
          if (x < 0 || x >= m || y < 0 || y >= n || (!k && !l)) continue
          if (a[x][y] === 'O') cnt++
        }
      }
      if (!cnt) continue
      const b = a.map(a => [...a])
      b[i][j] = 'X'
      res = Math.max(res, calc(b))
    }
  }
  return res
}
```

## Case

```ts
test.each([
  { input: { chessboard: ['X..X', 'O.O.', 'OOX.', '....', '....'] }, output: 4 },
  { input: { chessboard: ['.O.....', '.O.....', 'XOO.OOX', '.OO.OO.', '.XO.OX.', '..X.X..'] }, output: 10 },
  { input: { chessboard: ['....X.', '....X.', 'XOOO..', '......', '......'] }, output: 3 },
  { input: { chessboard: ['.X.', '.O.', 'XO.'] }, output: 2 },
  { input: { chessboard: ['.......', '.......', '.......', 'X......', '.O.....', '..O....', '....OOX'] }, output: 4 },
])('input: chessboard = $input.chessboard', ({ input: { chessboard }, output }) => {
  expect(flipChess(chessboard)).toEqual(output)
})
```
