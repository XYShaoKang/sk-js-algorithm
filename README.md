## About

- endpoint: leetcode-cn
- language: TypeScript

本仓库用来存放 LeetCode 的刷题记录,记录存放于 `record` 文件夹中,每个文件对应一题,使用`<序号>.<题目>`命名.

每个文件中分为题目,解法两部分,最后会放一部分验证的 Case.

编辑器使用 VSCode,依托于 [LeetCode](https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode) 插件,会在题目中显示 Description 按钮,点击可查看题目详情

![显示描述](assets/show-description-preview.gif)

## 使用本仓库

```sh
# 克隆本仓库
git clone https://github.com/XYShaoKang/sk-js-aigorithm.git
# 在 VSCode 中打开
code sk-js-aigorithm
```

安装 [LeetCode](https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode) 插件,并根据插件文档,自行进行设置

我使用的配置,替换其中`<本仓库的绝对路径>`为你实际中的路径

```json
{
  "leetcode.endpoint": "leetcode-cn",
  "leetcode.workspaceFolder": "<本仓库的绝对路径>",
  "leetcode.defaultLanguage": "typescript",
  "leetcode.showDescription": "In Webview",
  "leetcode.editor.shortcuts": ["submit", "test", "description"],
  "leetcode.hint.configWebviewMarkdown": false,
  "leetcode.hint.commentDescription": false,
  "leetcode.hint.commandShortcut": false,
  "leetcode.filePath": {
    "default": {
      "folder": "problem",
      "filename": "${id}.${kebab-case-name}.${ext}"
    }
  }
}
```

## Case 的使用

可以将 Case 的代码复制到解题的文件中,然后运行

```sh
pnpm test -- --watchAll --testPathPattern=/<序号>\\.
# or
yarn test --watchAll --testPathPattern=/<序号>\\.
# or
npx test --watchAll --testPathPattern=/<序号>\\.
```

既能获取到测试结果,每次保存会重新运行测试看到是否通过测试,可以在 each 的参数数组中添加更多自定义的测试.

> 新的 Case 代码是使用 jest 在本地做测试,快捷方便.其中有一部分是之前用于提交到 LeetCode 的测试,还没替换过来,之后会慢慢替换过来.

## 记录

- [1.两数之和](./record/1.两数之和.md) 8.19 8.19 8.28 9.10
- [26.删除有序数组中的重复项](./record/26.删除有序数组中的重复项.md) 8.19 8.28 9.10 9.17
- [283.移动零](./record/283.移动零.md) 8.19 8.28 9.10 9.17
- [11.盛最多水的容器](./record/11.盛最多水的容器.md) 8.19 8.29 9.10 9.17
- [70.爬楼梯](./record/70.爬楼梯.md) 8.19 9.10 9.14 9.17
- [15.三数之和](./record/15.三数之和.md) 8.19 9.10 9.17
- [206.反转链表](./record/206.反转链表.md) 9.10 9.13 9.17
- [141.环形链表](./record/141.环形链表.md) 9.10 9.13 9.17
- [20.有效的括号](./record/20.有效的括号.md) 9.11 9.13 9.20
- [155.最小栈](./record/155.最小栈.md) 9.11 9.13 9.20
- [84.柱状图中最大的矩形](./record/84.柱状图中最大的矩形.md) 9.12 9.13 9.28
- [239.滑动窗口最大值](./record/239.滑动窗口最大值.md) 9.13 9.28
- [641.设计循环双端队列](./record/641.设计循环双端队列.md) 9.13 9.28
- [42.接雨水](./record/42.接雨水.md) 9.13 9.28
- [94.二叉树的中序遍历](./record/94.二叉树的中序遍历.md) 9.14 9.28
- [144.二叉树的前序遍历](./record/144.二叉树的前序遍历.md) 9.14
- [590.n-叉树的后序遍历](./record/590.n-叉树的后序遍历.md) 9.14
- [589.n-叉树的前序遍历](./record/589.n-叉树的前序遍历.md) 9.14
- [429.n-叉树的层序遍历](./record/429.n-叉树的层序遍历.md) 9.14
- [22.括号生成](./record/22.括号生成.md) 9.14 9.18
- [226.翻转二叉树](./record/226.翻转二叉树.md) 9.14
- [98.验证二叉搜索树](./record/98.验证二叉搜索树.md) 9.14
- [104.二叉树的最大深度](./record/104.二叉树的最大深度.md) 9.15
- [111.二叉树的最小深度](./record/111.二叉树的最小深度.md) 9.15
- [297.二叉树的序列化与反序列化](./record/297.二叉树的序列化与反序列化.md) 9.15
- [236.二叉树的最近公共祖先](./record/236.二叉树的最近公共祖先.md) 9.15
- [105.从前序与中序遍历序列构造二叉树](./record/105.从前序与中序遍历序列构造二叉树.md) 9.15
- [77.组合](./record/77.组合.md) 9.16
- [46.全排列](./record/46.全排列.md) 9.16
- [47.全排列-ii](./record/47.全排列-ii.md) 9.16
- [50.pow-x-n](./record/50.pow-x-n.md) 9.17
- [78.子集](./record/78.子集.md) 9.17
- [169.多数元素](./record/169.多数元素.md) 9.17
- [17.电话号码的字母组合](./record/17.电话号码的字母组合.md) 9.17
- [51.n-皇后](./record/51.n-皇后.md) 9.17
- [102.二叉树的层序遍历](./record/102.二叉树的层序遍历.md) 9.17
- [433.最小基因变化](./record/433.最小基因变化.md) 9.18
- [515.在每个树行中找最大值](./record/515.在每个树行中找最大值.md) 9.18
- [127.单词接龙](./record/127.单词接龙.md) 9.19
- [126.单词接龙-ii](./record/126.单词接龙-ii.md) 9.19
- [200.岛屿数量](./record/200.岛屿数量.md) 9.19
- [529.扫雷游戏](./record/529.扫雷游戏.md) 9.20
- [860.柠檬水找零](./record/860.柠檬水找零.md) 9.27
- [122.买卖股票的最佳时机-ii](./record/122.买卖股票的最佳时机-ii.md) 9.27
- [455.分发饼干](./record/455.分发饼干.md) 9.27
- [874.模拟行走机器人](./record/874.模拟行走机器人.md) 9.27
- [55.跳跃游戏](./record/55.跳跃游戏.md) 9.28
- [45.跳跃游戏-ii](./record/45.跳跃游戏-ii.md) 9.28

## todo

- [ ] 实现自动获取对应的 Case,进行测试
- [ ] 禁止国际站自动跳转回中文站,从中文站快捷跳转到国际站
  - [x] 在[uBlock](https://github.com/gorhill/uBlock/)中将`leetcode.com/static/cn.js`禁掉即可防止自动跳转
- [ ] 添加其他过滤器
  - https://leetcode.com/discuss/feedback/944329/why-leetcode-has-removed-filter-section-for-most-recent-and-other-tabs
  - Most Posts
  - Recent Activity
  - Oldest to Newest
- [ ] 公式转换为图片
  - [ ] 将公式转换添加到 git hooks 中,提交时自动转换
  - [ ] 转换公式时,在图像标签中设置 alt 等于公式的值
- 快捷创建 md 文件
