# 剑指 Offer II 029. 排序的循环链表

```ts
/*
 * @lc app=leetcode.cn id=剑指 Offer II 029 lang=typescript
 *
 * [剑指 Offer II 029] 排序的循环链表
 */

// @lc code=start
function insert(head: Node | null, insertVal: number): Node | null {}
// @lc code=end
```

## 解法 1: 建图 + 拓扑排序

```ts
function insert(head: Node | null, insertVal: number): Node | null {
  let node = new Node(insertVal)
  if (!head) {
    node.next = node
    return node
  }
  if (head === head.next) {
    node.next = head.next
    head.next = node
    return head
  }

  let pre = head,
    cur = head.next
  let max = head
  while (1) {
    if (pre && pre.val <= insertVal && cur.val >= insertVal) {
      console.log(pre, cur)
      pre.next = node
      node.next = cur
      return head
    }
    if (max.val <= cur.val) max = cur
    if (cur === head) break
    pre = cur
    cur = cur.next
  }

  node.next = max.next
  max.next = node
  return head
}
```
