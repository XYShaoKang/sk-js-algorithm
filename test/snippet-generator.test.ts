import { getRegex } from '../tools/snippet-generator'

test.each([
  {
    input: `输入：nums = [3,2,4], target = 6\n输出：[1,2]`,
    output: `{ input: { nums: [3,2,4], target: 6 }, output: [1,2] }`,
  },
  {
    input: `输入: 2\n输出: 1`,
    output: `{ input: { param: 2 }, output: 1 }`,
  },
  {
    input: `输入: \nm = 3, n = 3\noperations = [[2,2],[3,3]]\n输出: 4`,
    output: `{ input: { m: 3, n: 3, operations: [[2,2],[3,3]] }, output: 4 }`,
  },
  {
    input: `输入：grid = [\n["1","1","0","0","0"],\n["1","1","0","0","0"],\n["0","0","1","0","0"],\n["0","0","0","1","1"]\n]\n输出：3`,
    output: `{ input: { grid: [\n["1","1","0","0","0"],\n["1","1","0","0","0"],\n["0","0","1","0","0"],\n["0","0","0","1","1"]\n] }, output: 3 }`,
  },
])('regex: input = $input.input', ({ input, output }) => {
  const regexStr = getRegex()
  const regex = RegExp(regexStr, 'g')

  const arr = regex.exec(input)!
  const inputs: string[] = []
  for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
      if (arr[i + 2]) inputs.push(arr[i + 2] + ': ')
      else if (i === 0) inputs.push('param: ')
    } else if (i % 3 === 1) {
      if (!arr[i + 2]) break
      inputs[inputs.length - 1] = inputs[inputs.length - 1] + arr[i + 2]
    }
  }

  let res = `{ input: { ${inputs.join(', ')} }, output: ${arr[22]} }`

  expect(res).toBe(output)
})
