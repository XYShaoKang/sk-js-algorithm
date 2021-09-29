test.each([
  {
    input: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: {
        val: 3,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
      },
    },
    result: [1, 2, 3, null, null, 4, 5],
  },
  {
    input: {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: {
        val: 3,
        left: {
          val: 4,
          left: { val: 6, left: null, right: null },
          right: { val: 7, left: null, right: null },
        },
        right: { val: 5, left: null, right: null },
      },
    },
    result: [1, 2, 3, null, null, 4, 5, 6, 7],
  },
  {
    input: {
      val: 4,
      left: { val: -7, left: null, right: null },
      right: {
        val: -3,
        left: {
          val: -9,
          left: {
            val: 9,
            left: {
              val: 6,
              left: {
                val: 0,
                left: null,
                right: { val: -1, left: null, right: null },
              },
              right: {
                val: 6,
                left: { val: -4, left: null, right: null },
                right: null,
              },
            },
            right: null,
          },
          right: {
            val: -7,
            left: {
              val: -6,
              left: { val: 5, left: null, right: null },
              right: null,
            },
            right: {
              val: -6,
              left: {
                val: 9,
                left: { val: -2, left: null, right: null },
                right: null,
              },
              right: null,
            },
          },
        },
        right: {
          val: -3,
          left: { val: -4, left: null, right: null },
          right: null,
        },
      },
    },
    result: [
      4,
      -7,
      -3,
      null,
      null,
      -9,
      -3,
      9,
      -7,
      -4,
      null,
      6,
      null,
      -6,
      -6,
      null,
      null,
      0,
      6,
      5,
      null,
      9,
      null,
      null,
      -1,
      -4,
      null,
      null,
      null,
      -2,
    ],
  },
])('input = $result', ({ input, result }) => {
  expect(BinaryTree.deserialize(BinaryTree.serialize(input))).toEqual(input)
  expect(BinaryTree.serialize(input)).toEqual(result)
  expect(BinaryTree.deserialize(result)).toEqual(input)
  expect(BinaryTree.serialize(BinaryTree.deserialize(result))).toEqual(result)
})
