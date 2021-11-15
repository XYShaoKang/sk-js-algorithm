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

/**
 * 二叉树的序列化和反序列化,使用 LeetCode 官方用例中的格式
 */
declare var BinaryTree: {
  /**
   * 序列化二叉树
   * @param {TreeNode} root 需要序列化的二叉树的根节点
   * @returns {Array<number | null>} 返回序列化之后的数据
   */
  serialize(root: TreeNode | null): Array<number | null>
  /**
   * 反序列化二叉树
   * @param {Array<number | null>} data 需要进行反序列化的数据
   * @returns {TreeNode | null} 返回反序列化后二叉树的根节点
   */
  deserialize(data: Array<number | null> | string): TreeNode | null
  /**
   * 对二叉树进行搜索,返回指定值对应的节点
   * @param root 需要搜索的二叉树的根节点
   * @param value 需要搜索的节点值
   * @returns {TreeNode | null} 返回对应的节点或者没搜索到返回 null
   */
  search(root: TreeNode | null, value: number): TreeNode | null
}
/**
 * N 叉树的反序列化
 */
declare var NaryTree: {
  /**
   * 反序列化 N 叉树
   * @param data 需要进行反序列化的数据
   * @returns {Node | null} 返回反序列化后的 N 叉树根节点
   */
  deserialize(data: string | Array<number | null>): Node | null
}
/**
 * 链表的序列化和反序列化
 */
declare var LinkedList: {
  /**
   * 反序列化链表
   * @param {Array<number>} data 需要进行反序列化的数据
   * @param {number?} pos 设置环形链表最后一个节点的下一个节点位置
   * @returns {ListNode | null} 反序列化后的链表根节点
   */
  deserialize(data: Array<number>, pos?: number): ListNode | null
  /**
   * 序列化链表
   * @param {ListNode | null} root 需要进行序列化的根节点
   * @returns {Array<number>} 返回序列化之后的数据
   */
  serialize(root: ListNode | null): Array<number>
  /**
   * 搜索链表
   * @param {ListNode | null} root 需要搜索的链表的根节点
   * @param {number} val 需要搜索的值
   * @returns {ListNode | null} 返回搜索到的节点或者没搜索到返回 null
   */
  search(root: ListNode | null, val: number): ListNode | null
}
