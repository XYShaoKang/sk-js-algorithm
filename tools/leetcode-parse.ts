import fetch from 'node-fetch'
import jsdom from 'jsdom'
const { JSDOM } = jsdom

interface Question {
  codeSnippets: {
    lang: string
    langSlug: string
    code: string
    __typename: string
  }[]
  content: string
  stats: string
  likes: number
  dislikes: number
  sampleTestCase: string
  exampleTestcases: string
  metaData: string
  translatedContent: string
}
type RequestProblemData =
  | { data: { question: Question } }
  | { error: { message: string }[] }
async function getProblem(titleSlug: string): Promise<RequestProblemData> {
  var graphql = JSON.stringify({
    query: `query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        codeSnippets {
          lang
          langSlug
          code
          __typename
        }
        content
        stats
        likes
        dislikes
        sampleTestCase
        exampleTestcases
        metaData
        translatedContent
      }
    }`,
    operationName: 'questionData',
    variables: { titleSlug: titleSlug },
  })

  var option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: graphql,
  }

  const res = await fetch('https://leetcode-cn.com/graphql/', option).then(
    (res) => res.json(),
  )
  return res as any
}

type RequestQuestionsData =
  | {
      data: {
        allQuestionsBeta: {
          questionId: string
          questionFrontendId: string
          titleSlug: string
        }[]
      }
    }
  | { error: { message: string }[] }

async function getallQuestions(): Promise<RequestQuestionsData> {
  var graphql = JSON.stringify({
    query: `query allQuestions {
              allQuestionsBeta {
                ...questionSummaryFields
                __typename
              }
            }
            fragment questionSummaryFields on QuestionNode {
              titleSlug
              questionId
              questionFrontendId
              __typename
            }
    `,
    operationName: 'allQuestions',
    variables: {},
  })

  var option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: graphql,
  }

  const res = await fetch('https://leetcode-cn.com/graphql/', option).then(
    (res) => res.json(),
  )
  return res as any
}

function parseProblem(text: string) {
  const dom = new JSDOM(text)
  const {
    window: { document },
  } = dom

  const test = []
  for (const pre of Array.from(document.querySelectorAll('pre'))) {
    const input = pre.childNodes[1].textContent ?? ''
    const output = pre.childNodes[3].textContent?.trim()
    const inputs = parseInputs(input)
    test.push({ input: inputs, output })
  }
  return test
}
function parseInputs(input: string) {
  return input
    .split(/(?:, )|\n/)
    .filter(Boolean)
    .map(parseInput)
}
// 区分多个未命名的参数
function parseInput(s: string) {
  const arr = s.trim().split(' = ')
  if (arr.length > 1) return arr
  return ['param', arr[0]]
}
async function generateTest(titleSlug: string) {
  const res = await getProblem(titleSlug)

  if ('error' in res) {
    throw new Error(res.error[0].message)
  }
  const {
    data: {
      question: { content, codeSnippets },
    },
  } = res

  const funName =
    codeSnippets
      ?.find(({ langSlug }) => langSlug === 'typescript')
      ?.code.match(/^function ([\w]*)\(/)?.[1] ?? ''
  const tests = parseProblem(content)
  let table = `[
  ${tests
    .map(
      ({ input, output }) =>
        `{ input: { ${input
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ')} }, output: ${output}},`,
    )
    .join('\n  ')}
]`
  let keys = tests[0].input.map(([name]) => name)
  return `test.each(${table})('input: ${keys
    .map((key) => `${key} = $input.${key}`)
    .join(', ')}',({ input: { ${keys.join(',')} }, output }) => {
  ${
    funName
      ? `expect(${funName}(${keys.join(',')})).toEqual(output)`
      : `// 为找到函数名,请自行输入对应的测试内容`
  }
})`
}

export { getProblem, parseProblem, generateTest, getallQuestions }
