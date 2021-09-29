interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

interface Node {
  val: number
  children: Node[]
}

// implementation: ../jest/setupTests.ts
declare var BinaryTree: {
  serialize(root: TreeNode | null): Array<number | null>
  deserialize(data: Array<number | null> | string): TreeNode | null
}
declare var NaryTree: {
  deserialize(data: string | Array<number | null>): Node | null
}
