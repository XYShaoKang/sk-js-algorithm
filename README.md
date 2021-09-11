# LeetCode

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

## 记录

- [1.两数之和](./record/1.两数之和.md) 8.19 8.19 8.28 9.10
- [26.删除有序数组中的重复项](./record/26.删除有序数组中的重复项.md) 8.19 8.28 9.10
- [283.移动零](./record/283.移动零.md) 8.19 8.28 9.10
- [11.盛最多水的容器](./record/11.盛最多水的容器.md) 8.19 8.29 9.10
- [70.爬楼梯](./record/70.爬楼梯.md) 8.19 9.10
- [15.三数之和](./record/15.三数之和.md) 8.19 9.10
- [206.反转链表](./record/206.反转链表.md) 9.10
- [141.环形链表](./record/141.环形链表.md) 9.10

## todo

- [ ] 实现自动获取对应的 Case,进行测试
