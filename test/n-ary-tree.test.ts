test.each([
  {
    input: '[1,null,3,2,4,null,5,6]',
    output: {
      val: 1,
      children: [
        {
          val: 3,
          children: [
            { val: 5, children: [] },
            { val: 6, children: [] },
          ],
        },
        { val: 2, children: [] },
        { val: 4, children: [] },
      ],
    },
  },
  {
    input:
      '[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]',
    output: {
      val: 1,
      children: [
        { val: 2, children: [] },
        {
          val: 3,
          children: [
            { val: 6, children: [] },
            {
              val: 7,
              children: [{ val: 11, children: [{ val: 14, children: [] }] }],
            },
          ],
        },
        {
          val: 4,
          children: [{ val: 8, children: [{ val: 12, children: [] }] }],
        },
        {
          val: 5,
          children: [
            { val: 9, children: [{ val: 13, children: [] }] },
            { val: 10, children: [] },
          ],
        },
      ],
    },
  },
])('input = $input', ({ input, output }) => {
  expect(NaryTree.deserialize(input)).toEqual(output)
})
