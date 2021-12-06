import fs from 'fs'
import { getallQuestions, generateTest } from './leetcode-parse'

async function parse(args: string[]) {
  const file = args[0]
  const data = fs.readFileSync(file, 'utf-8')
  const id =
    data
      .split('\n')
      .find((line) => / @lc app/.test(line))
      ?.match(/id=([\d]+) /)?.[1] ?? ''

  if (id === '') return
  const res = await getallQuestions()
  if ('error' in res) {
    console.log(`get questions error`, res.error[0].message)
    return
  }

  const {
    data: { allQuestionsBeta: questions },
  } = res
  const question = questions.find(
    ({ questionFrontendId }) => questionFrontendId === id,
  )

  if (!question) {
    console.log(`not found question`)
    return
  }
  const testStr = await generateTest(question.titleSlug)
  fs.appendFileSync(file, testStr, 'utf-8')
}

parse(process.argv.slice(2))
