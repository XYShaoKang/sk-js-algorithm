interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

interface Node {
  val: number
  children: Node[]
}

interface ListNode {
  val: number
  next: ListNode | null
}

// implementation: ../jest/setupTests.ts
declare var BinaryTree: {
  serialize(root: TreeNode | null): Array<number | null>
  deserialize(data: Array<number | null> | string): TreeNode | null
  search(root: TreeNode | null, value: number): TreeNode | null
}
declare var NaryTree: {
  deserialize(data: string | Array<number | null>): Node | null
}
declare var LinkedList: {
  deserialize(data: Array<number>): ListNode | null
  serialize(root: ListNode | null): Array<number>
  search(root: ListNode | null, val: number): ListNode | null
}
