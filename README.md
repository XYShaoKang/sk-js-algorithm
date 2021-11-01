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

可以将 Case 的代码复制到对应问题的文件中,然后运行(替换其中的`<序号>`为问题的序号)

```sh
pnpm test:problem -- --testPathPattern=/<序号>\\.
# or
yarn test:problem --testPathPattern=/<序号>\\.
# or
npx test:problem --testPathPattern=/<序号>\\.
```

既能获取到测试结果,每次保存会重新运行测试看到是否通过测试,可以在 each 的参数数组中添加更多自定义的测试用例.

> 新的 Case 代码是使用 jest 在本地做测试,快捷方便.其中有一部分是之前用于提交到 LeetCode 的测试,还没替换过来,之后会慢慢替换过来.

## 刷题记录

| 题目                                                                                 | 难度 | 1     | 2     | 3     | 4     | 5                |
| ------------------------------------------------------------------------------------ | ---- | ----- | ----- | ----- | ----- | ---------------- |
| [1.两数之和](./record/1.两数之和.md)                                                 | 简单 | 8.19  | 8.19  | 8.28  | 9.10  | 10.15            |
| [26.删除有序数组中的重复项](./record/26.删除有序数组中的重复项.md)                   | 简单 | 8.19  | 8.28  | 9.10  | 9.17  | 10.15            |
| [283.移动零](./record/283.移动零.md)                                                 | 简单 | 8.19  | 8.28  | 9.10  | 9.17  | 10.15            |
| [11.盛最多水的容器](./record/11.盛最多水的容器.md)                                   | 中等 | 8.19  | 8.29  | 9.10  | 9.17  |                  |
| [70.爬楼梯](./record/70.爬楼梯.md)                                                   | 简单 | 8.19  | 9.10  | 9.14  | 9.17  | 10.4/10.11/10.17 |
| [15.三数之和](./record/15.三数之和.md)                                               | 中等 | 8.19  | 9.10  | 9.17  |       |                  |
| [206.反转链表](./record/206.反转链表.md)                                             | 简单 | 9.10  | 9.13  | 9.17  | 10.16 |                  |
| [141.环形链表](./record/141.环形链表.md)                                             | 简单 | 9.10  | 9.13  | 9.17  | 10.17 |                  |
| [20.有效的括号](./record/20.有效的括号.md)                                           | 简单 | 9.11  | 9.13  | 9.20  | 10.17 |                  |
| [155.最小栈](./record/155.最小栈.md)                                                 | 简单 | 9.11  | 9.13  | 9.20  | 10.17 |                  |
| [84.柱状图中最大的矩形](./record/84.柱状图中最大的矩形.md)                           | 困难 | 9.12  | 9.13  | 9.28  |       |                  |
| [239.滑动窗口最大值](./record/239.滑动窗口最大值.md)                                 | 困难 | 9.13  | 9.28  |       |       |                  |
| [641.设计循环双端队列](./record/641.设计循环双端队列.md)                             | 中等 | 9.13  | 9.28  |       |       |                  |
| [42.接雨水](./record/42.接雨水.md)                                                   | 困难 | 9.13  | 9.28  | 10.22 |       |                  |
| [94.二叉树的中序遍历](./record/94.二叉树的中序遍历.md)                               | 简单 | 9.14  | 9.28  |       |       |                  |
| [144.二叉树的前序遍历](./record/144.二叉树的前序遍历.md)                             | 简单 | 9.14  | 9.29  |       |       |                  |
| [145.二叉树的后序遍历](./record/145.二叉树的后序遍历.md)                             | 简单 | 9.29  |       |       |       |                  |
| [590.n-叉树的后序遍历](./record/590.n-叉树的后序遍历.md)                             | 简单 | 9.14  | 9.29  |       |       |                  |
| [589.n-叉树的前序遍历](./record/589.n-叉树的前序遍历.md)                             | 简单 | 9.14  | 9.29  |       |       |                  |
| [429.n-叉树的层序遍历](./record/429.n-叉树的层序遍历.md)                             | 中等 | 9.14  | 9.29  |       |       |                  |
| [22.括号生成](./record/22.括号生成.md)                                               | 中等 | 9.14  | 9.18  | 10.1  |       |                  |
| [226.翻转二叉树](./record/226.翻转二叉树.md)                                         | 简单 | 9.14  | 10.1  |       |       |                  |
| [98.验证二叉搜索树](./record/98.验证二叉搜索树.md)                                   | 中等 | 9.14  | 10.1  | 10.17 |       |                  |
| [104.二叉树的最大深度](./record/104.二叉树的最大深度.md)                             | 简单 | 9.15  | 10.1  | 10.17 |       |                  |
| [111.二叉树的最小深度](./record/111.二叉树的最小深度.md)                             | 简单 | 9.15  | 10.1  |       |       |                  |
| [297.二叉树的序列化与反序列化](./record/297.二叉树的序列化与反序列化.md)             | 困难 | 9.15  | 9.29  |       |       |                  |
| [236.二叉树的最近公共祖先](./record/236.二叉树的最近公共祖先.md)                     | 中等 | 9.15  | 10.1  |       |       |                  |
| [105.从前序与中序遍历序列构造二叉树](./record/105.从前序与中序遍历序列构造二叉树.md) | 中等 | 9.15  |       |       |       |                  |
| [77.组合](./record/77.组合.md)                                                       | 中等 | 9.16  |       |       |       |                  |
| [46.全排列](./record/46.全排列.md)                                                   | 中等 | 9.16  |       |       |       |                  |
| [47.全排列-ii](./record/47.全排列-ii.md)                                             | 中等 | 9.16  |       |       |       |                  |
| [50.pow-x-n](./record/50.pow-x-n.md)                                                 | 中等 | 9.17  |       |       |       |                  |
| [78.子集](./record/78.子集.md)                                                       | 中等 | 9.17  |       |       |       |                  |
| [169.多数元素](./record/169.多数元素.md)                                             | 简单 | 9.17  |       |       |       |                  |
| [17.电话号码的字母组合](./record/17.电话号码的字母组合.md)                           | 中等 | 9.17  |       |       |       |                  |
| [51.n-皇后](./record/51.n-皇后.md)                                                   | 困难 | 9.17  |       |       |       |                  |
| [102.二叉树的层序遍历](./record/102.二叉树的层序遍历.md)                             | 中等 | 9.17  | 10.17 |       |       |                  |
| [433.最小基因变化](./record/433.最小基因变化.md)                                     | 中等 | 9.18  |       |       |       |                  |
| [515.在每个树行中找最大值](./record/515.在每个树行中找最大值.md)                     | 中等 | 9.18  |       |       |       |                  |
| [127.单词接龙](./record/127.单词接龙.md)                                             | 困难 | 9.19  |       |       |       |                  |
| [126.单词接龙-ii](./record/126.单词接龙-ii.md)                                       | 困难 | 9.19  |       |       |       |                  |
| [200.岛屿数量](./record/200.岛屿数量.md)                                             | 中等 | 9.19  |       |       |       |                  |
| [529.扫雷游戏](./record/529.扫雷游戏.md)                                             | 中等 | 9.20  |       |       |       |                  |
| [860.柠檬水找零](./record/860.柠檬水找零.md)                                         | 简单 | 9.27  |       |       |       |                  |
| [122.买卖股票的最佳时机-ii](./record/122.买卖股票的最佳时机-ii.md)                   | 中等 | 9.27  | 10.6  | 10.15 | 10.20 |                  |
| [455.分发饼干](./record/455.分发饼干.md)                                             | 简单 | 9.27  |       |       |       |                  |
| [874.模拟行走机器人](./record/874.模拟行走机器人.md)                                 | 中等 | 9.27  |       |       |       |                  |
| [55.跳跃游戏](./record/55.跳跃游戏.md)                                               | 中等 | 9.28  | 10.14 | 10.18 |       |                  |
| [45.跳跃游戏-ii](./record/45.跳跃游戏-ii.md)                                         | 中等 | 9.28  | 10.14 | 10.18 |       |                  |
| [69.x-的平方根](./record/69.x-的平方根.md)                                           | 简单 | 9.30  |       |       |       |                  |
| [367.有效的完全平方数](./record/367.有效的完全平方数.md)                             | 简单 | 9.30  |       |       |       |                  |
| [33.搜索旋转排序数组](./record/33.搜索旋转排序数组.md)                               | 中等 | 9.30  |       |       |       |                  |
| [74.搜索二维矩阵](./record/74.搜索二维矩阵.md)                                       | 中等 | 9.30  |       |       |       |                  |
| [153.寻找旋转排序数组中的最小值](./record/153.寻找旋转排序数组中的最小值.md)         | 中等 | 10.1  |       |       |       |                  |
| [62.不同路径](./record/62.不同路径.md)                                               | 中等 | 10.2  | 10.28 |       |       |                  |
| [63.不同路径-ii](./record/63.不同路径-ii.md)                                         | 中等 | 10.3  | 10.28 |       |       |                  |
| [1143.最长公共子序列](./record/1143.最长公共子序列.md)                               | 中等 | 10.3  |       |       |       |                  |
| [120.三角形最小路径和](./record/120.三角形最小路径和.md)                             | 中等 | 10.4  | 10.26 |       |       |                  |
| [53.最大子序和](./record/53.最大子序和.md)                                           | 简单 | 10.4  | 10.14 | 10.17 | 10.18 |                  |
| [152.乘积最大子数组](./record/152.乘积最大子数组.md)                                 | 中等 | 10.4  | 10.19 |       |       |                  |
| [322.零钱兑换](./record/322.零钱兑换.md)                                             | 中等 | 10.5  | 10.7  |       |       |                  |
| [198.打家劫舍](./record/198.打家劫舍.md)                                             | 中等 | 10.5  | 10.13 | 10.17 |       |                  |
| [213.打家劫舍-ii](./record/213.打家劫舍-ii.md)                                       | 中等 | 10.6  | 10.14 | 10.18 |       |                  |
| [121.买卖股票的最佳时机](./record/121.买卖股票的最佳时机.md)                         | 简单 | 10.6  | 10.17 | 10.20 |       |                  |
| [123.买卖股票的最佳时机-iii](./record/123.买卖股票的最佳时机-iii.md)                 | 困难 | 10.7  |       |       |       |                  |
| [309.最佳买卖股票时机含冷冻期](./record/309.最佳买卖股票时机含冷冻期.md)             | 中等 | 10.8  | 10.21 |       |       |                  |
| [188.买卖股票的最佳时机-iv](./record/188.买卖股票的最佳时机-iv.md)                   | 困难 | 10.8  |       |       |       |                  |
| [32.最长有效括号](./record/32.最长有效括号.md)                                       | 困难 | 10.9  |       |       |       |                  |
| [64.最小路径和](./record/64.最小路径和.md)                                           | 中等 | 10.9  | 10.29 |       |       |                  |
| [72.编辑距离](./record/72.编辑距离.md)                                               | 困难 | 10.10 |       |       |       |                  |
| [91.解码方法](./record/91.解码方法.md)                                               | 中等 | 10.10 | 10.23 |       |       |                  |
| [363.矩形区域不超过-k-的最大数值和](./record/363.矩形区域不超过-k-的最大数值和.md)   | 困难 | 10.10 |       |       |       |                  |
| [509.斐波那契数](./record/509.斐波那契数.md)                                         | 简单 | 10.10 | 10.18 |       |       |                  |
| [1137.第-n-个泰波那契数](./record/1137.第-n-个泰波那契数.md)                         | 简单 | 10.10 | 10.18 |       |       |                  |
| [403.青蛙过河](./record/403.青蛙过河.md)                                             | 困难 | 10.11 |       |       |       |                  |
| [410.分割数组的最大值](./record/410.分割数组的最大值.md)                             | 困难 | 10.11 |       |       |       |                  |
| [552.学生出勤记录-ii](./record/552.学生出勤记录-ii.md)                               | 困难 | 10.11 |       |       |       |                  |
| [746.使用最小花费爬楼梯](./record/746.使用最小花费爬楼梯.md)                         | 简单 | 10.11 | 10.18 |       |       |                  |
| [552.学生出勤记录-ii](./record/552.学生出勤记录-ii.md)                               | 困难 | 10.12 |       |       |       |                  |
| [647.回文子串](./record/647.回文子串.md)                                             | 中等 | 10.12 |       |       |       |                  |
| [740.删除并获得点数](./record/740.删除并获得点数.md)                                 | 中等 | 10.14 | 10.18 |       |       |                  |
| [918.环形子数组的最大和](./record/918.环形子数组的最大和.md)                         | 中等 | 10.14 | 10.18 |       |       |                  |
| [189.旋转数组](./record/189.旋转数组.md)                                             | 中等 | 10.15 |       |       |       |                  |
| [217.存在重复元素](./record/217.存在重复元素.md)                                     | 简单 | 10.15 |       |       |       |                  |
| [136.只出现一次的数字](./record/136.只出现一次的数字.md)                             | 简单 | 10.15 |       |       |       |                  |
| [350.两个数组的交集-ii](./record/350.两个数组的交集-ii.md)                           | 简单 | 10.15 |       |       |       |                  |
| [66.加一](./record/66.加一.md)                                                       | 简单 | 10.15 |       |       |       |                  |
| [36.有效的数独](./record/36.有效的数独.md)                                           | 中等 | 10.15 |       |       |       |                  |
| [48.旋转图像](./record/48.旋转图像.md)                                               | 中等 | 10.15 |       |       |       |                  |
| [344.反转字符串](./record/344.反转字符串.md)                                         | 简单 | 10.15 |       |       |       |                  |
| [7.整数反转](./record/7.整数反转.md)                                                 | 简单 | 10.15 |       |       |       |                  |
| [387.字符串中的第一个唯一字符](./record/387.字符串中的第一个唯一字符.md)             | 简单 | 10.15 |       |       |       |                  |
| [242.有效的字母异位词](./record/242.有效的字母异位词.md)                             | 简单 | 10.15 |       |       |       |                  |
| [125.验证回文串](./record/125.验证回文串.md)                                         | 简单 | 10.15 |       |       |       |                  |
| [8.字符串转换整数-atoi](./record/8.字符串转换整数-atoi.md)                           | 中等 | 10.16 |       |       |       |                  |
| [28.实现-str-str](./record/28.实现-str-str.md)                                       | 简单 | 10.16 |       |       |       |                  |
| [38.外观数列](./record/38.外观数列.md)                                               | 中等 | 10.16 |       |       |       |                  |
| [14.最长公共前缀](./record/14.最长公共前缀.md)                                       | 简单 | 10.16 |       |       |       |                  |
| [237.删除链表中的节点](./record/237.删除链表中的节点.md)                             | 简单 | 10.16 |       |       |       |                  |
| [19.删除链表的倒数第-n-个结点](./record/19.删除链表的倒数第-n-个结点.md)             | 中等 | 10.16 |       |       |       |                  |
| [21.合并两个有序链表](./record/21.合并两个有序链表.md)                               | 简单 | 10.17 |       |       |       |                  |
| [234.回文链表](./record/234.回文链表.md)                                             | 简单 | 10.17 |       |       |       |                  |
| [101.对称二叉树](./record/101.对称二叉树.md)                                         | 简单 | 10.17 |       |       |       |                  |
| [108.将有序数组转换为二叉搜索树](./record/108.将有序数组转换为二叉搜索树.md)         | 简单 | 10.17 |       |       |       |                  |
| [88.合并两个有序数组](./record/88.合并两个有序数组.md)                               | 简单 | 10.17 |       |       |       |                  |
| [278.第一个错误的版本](./record/278.第一个错误的版本.md)                             | 简单 | 10.17 |       |       |       |                  |
| [384.打乱数组](./record/384.打乱数组.md)                                             | 中等 | 10.17 |       |       |       |                  |
| [412.fizz-buzz](./record/412.fizz-buzz.md)                                           | 简单 | 10.17 |       |       |       |                  |
| [204.计数质数](./record/204.计数质数.md)                                             | 中等 | 10.17 |       |       |       |                  |
| [326.3-的幂](./record/326.3-的幂.md)                                                 | 简单 | 10.17 |       |       |       |                  |
| [13.罗马数字转整数](./record/13.罗马数字转整数.md)                                   | 简单 | 10.17 |       |       |       |                  |
| [191.位-1-的个数](./record/191.位-1-的个数.md)                                       | 简单 | 10.17 |       |       |       |                  |
| [461.汉明距离](./record/461.汉明距离.md)                                             | 简单 | 10.17 |       |       |       |                  |
| [190.颠倒二进制位](./record/190.颠倒二进制位.md)                                     | 简单 | 10.17 |       |       |       |                  |
| [118.杨辉三角](./record/118.杨辉三角.md)                                             | 简单 | 10.17 | 10.25 |       |       |                  |
| [268.丢失的数字](./record/268.丢失的数字.md)                                         | 简单 | 10.17 |       |       |       |                  |
| [1567.乘积为正数的最长子数组长度](./record/1567.乘积为正数的最长子数组长度.md)       | 中等 | 10.19 |       |       |       |                  |
| [1014.最佳观光组合](./record/1014.最佳观光组合.md)                                   | 中等 | 10.20 |       |       |       |                  |
| [714.买卖股票的最佳时机含手续费](./record/714.买卖股票的最佳时机含手续费.md)         | 中等 | 10.21 |       |       |       |                  |
| [139.单词拆分](./record/139.单词拆分.md)                                             | 中等 | 10.22 |       |       |       |                  |
| [413.等差数列划分](./record/413.等差数列划分.md)                                     | 中等 | 10.23 |       |       |       |                  |
| [263.丑数](./record/263.丑数.md)                                                     | 简单 | 10.24 |       |       |       |                  |
| [264.丑数-ii](./record/264.丑数-ii.md)                                               | 中等 | 10.24 |       |       |       |                  |
| [96.不同的二叉搜索树](./record/96.不同的二叉搜索树.md)                               | 中等 | 10.24 |       |       |       |                  |
| [208.实现-trie-前缀树](./record/208.实现-trie-前缀树.md)                             | 中等 | 10.24 |       |       |       |                  |
| [79.单词搜索](./record/79.单词搜索.md)                                               | 中等 | 10.25 |       |       |       |                  |
| [212.单词搜索-ii](./record/212.单词搜索-ii.md)                                       | 困难 | 10.25 |       |       |       |                  |
| [119.杨辉三角-ii](./record/119.杨辉三角-ii.md)                                       | 简单 | 10.25 |       |       |       |                  |
| [931.下降路径最小和](./record/931.下降路径最小和.md)                                 | 中等 | 10.26 |       |       |       |                  |
| [1314.矩阵区域和](./record/1314.矩阵区域和.md)                                       | 中等 | 10.27 |       |       |       |                  |
| [304.二维区域和检索-矩阵不可变](./record/304.二维区域和检索-矩阵不可变.md)           | 中等 | 10.29 |       |       |       |                  |
| [221.最大正方形](./record/221.最大正方形.md)                                         | 中等 | 10.29 |       |       |       |                  |
| [5.最长回文子串](./record/5.最长回文子串.md)                                         | 中等 | 10.30 |       |       |       |                  |
| [516.最长回文子序列](./record/516.最长回文子序列.md)                                 | 中等 | 10.30 |       |       |       |                  |
| [300.最长递增子序列](./record/300.最长递增子序列.md)                                 | 中等 | 10.31 |       |       |       |                  |
| [376.摆动序列](./record/376.摆动序列.md)                                             | 中等 | 10.31 |       |       |       |                  |
| [392.判断子序列](./reco11.12.判断子序列.md)                                          | 中等 | 11.1  |       |       |       |                  |

## todo

- [ ] 实现自动获取对应的 Case,进行测试
- [ ] 禁止外服自动跳转回国服,从中文站快捷跳转外服到
  - [x] 屏蔽掉`https://leetcode.com/static/cn.js`这个 url 即可防止自动跳转.我是通过在[uBlock](https://github.com/gorhill/uBlock/)中添加`leetcode.com/static/cn.js`去屏蔽这个链接.
- [ ] 添加其他过滤器
  - https://leetcode.com/discuss/feedback/944329/why-leetcode-has-removed-filter-section-for-most-recent-and-other-tabs
  - Most Posts
  - Recent Activity
  - Oldest to Newest
- [ ] 公式转换为图片
  - [ ] 将公式转换添加到 git hooks 中,提交时自动转换
  - [ ] 转换公式时,在图像标签中设置 alt 等于公式的值
- [ ] 快捷创建 md 文件
- [ ] 调试数据可视化
  - [ ] [Debug Visualizer](https://github.com/hediet/vscode-debug-visualizer/blob/master/extension/README.md)
- [ ] 专项训练
  - [ ] 滑动窗口
  - [ ] 排列组合
  - [ ] 二分查找
  - [x] 动态规划(基础)
  - [ ] 排序
  - [ ] 字符串相关
    - [ ] 预处理
      - [ ] KMP
      - [ ] 字典树
      - [ ] 存储下一个位置的索引
  - [ ] 贪心
