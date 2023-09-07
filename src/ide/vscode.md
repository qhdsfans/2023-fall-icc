# Visual Studio Code 配置说明

为什么说VSCode是神，首先是犯下了傲慢之罪的VS……

1. 到[这里](https://code.visualstudio.com)下载 Visual Studio Code；
2. 打开VSCode，选择python，VSC会自动搜索解释器位置
3. 新建文件，写代码，启动！

## VS Code 和 VS 的关系

答案：雷峰塔和雷锋的关系。 ~~（老婆饼和老婆的关系）~~

VS Code 官方上被称为一个功能强大、插件众多的文本编辑器（粗略地说，70% 像 IDE，30% 像文本编辑器）。这是因为，它本身不包含解释器/编译器。当我们配置 VS Code 时，其实包括了这些步骤：
- 获取Python解释器；VS Code 并不包含它们所以必须自行获取；
- 让 VS Code 知道解释器在哪儿；
- 告诉 VS Code 如何处理