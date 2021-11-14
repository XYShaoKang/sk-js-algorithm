function snippetGenerator() {
  const regexStr = getRegex()
  const snippet = {
    'leetcode test': {
      scope: 'typescript,javascript',
      prefix: 'lc-test',
      body: [
        'test.each([',
        '\t{ input: { ${CLIPBOARD/' +
          regexStr +
          '/${2:-param}: $3' +
          getReference((i) => `\${${i}:+, }$${i}\${${i}:+: }$${i + 1}`) +
          ' }, output: $22/} },$0',
        '])(',
        "\t'input: ${CLIPBOARD/" +
          regexStr +
          '/${2:-param} = $input.${2:-param}' +
          getReference((i) => `\${${i}:+, }$${i}\${${i}:+ = $input.}$${i}`) +
          "',({ input: { ${2:-param}" +
          getReference((i) => `\${${i}:+, }$${i}`) +
          ' }, output }) => {/}',
        '\t\texpect(${1:funname}(${CLIPBOARD/' +
          regexStr +
          '/${2:-param}' +
          getReference((i) => `\${${i}:+, }$${i}`) +
          '/})).toEqual(output)',
        '\t},',
        ')',
      ],
      description: '根据示例创建测试代码',
    },
    'leetcode test add example': {
      scope: 'typescript,javascript',
      prefix: 'lc-add-example',
      body: [
        '{ input: { ${CLIPBOARD/' +
          regexStr +
          '/${2:-param}: $3' +
          getReference((i) => `\${${i}:+, }$${i}\${${i}:+: }$${i + 1}`) +
          ' }, output: $22/} },',
      ],
      description: '添加测试用例',
    },
  }
  return snippet
}

function getReference(fn: (i: number) => string) {
  let str = ''
  for (let i = 1; i <= 6; i++) {
    str += fn(i * 3 + 2)
  }
  return str
}

function getRegex() {
  const template = `输入[：:] ?\\n?((?:(.+?) = )?([\\d\\D]+?))${`(?:(?:(?:, )|\\n)((.+?) = ([\\d\\D]+?)))?`.repeat(
    6,
  )}\\n输出[：:] ?(.*)$`
  return template
}

export { snippetGenerator, getRegex, getReference }
