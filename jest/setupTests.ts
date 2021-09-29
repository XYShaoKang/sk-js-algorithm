const createNode = (val: number | null | undefined) =>
  val === null || val === undefined ? null : { val, left: null, right: null }

global.BinaryTree = {
  deserialize(data: Array<number | null> | string): TreeNode | null {
    let arr: Array<number | null> = Array.isArray(data)
      ? data
      : JSON.parse(data)

    const root: TreeNode | null = createNode(arr[0])

    const recursive = (
      pre: Array<TreeNode | null>,
      index = 1,
    ): Array<TreeNode | null> => {
      if (pre.length === 0) return pre

      const tmp: Array<TreeNode | null> = []

      for (const parent of pre) {
        if (parent && index < arr.length) {
          ;(['left', 'right'] as const).forEach((key) => {
            let node: TreeNode | null = createNode(arr[index])
            tmp.push(node)
            parent[key] = node
            index++
          })
        }
      }
      recursive(tmp, index)
      return pre
    }
    recursive([root])
    return root
  },
  serialize(root: TreeNode | null): Array<number | null> {
    if (!root) return []

    let res: Array<null | number> = []
    const recursive = (nodes: Array<TreeNode | null>) => {
      if (!nodes.length) return
      const tmp: Array<TreeNode | null> = []
      for (const node of nodes) {
        ;(['left', 'right'] as const).forEach(
          (key) => node && tmp.push(node[key]),
        )
        res.push(node?.val ?? null)
      }

      recursive(tmp)
    }
    recursive([root])
    while (res[res.length - 1] === null) res.pop()
    return res
  },
}
global.NaryTree = {
  deserialize(data: string | Array<number | null>): Node | null {
    const arr = Array.isArray(data) ? data : JSON.parse(data)
    if (!arr.length) return null

    const root = { val: arr[0], children: [] }

    const recursive = (nodes: Array<Node>, index = 2) => {
      if (!nodes.length) return
      const tmp: Array<Node> = []

      for (const node of nodes) {
        while (arr[index] !== null && arr[index] !== undefined) {
          const newNode = { val: arr[index], children: [] }
          node.children.push(newNode)
          tmp.push(newNode)
          index++
        }
        index++
      }

      recursive(tmp, index)
    }
    recursive([root])
    return root
  },
}
