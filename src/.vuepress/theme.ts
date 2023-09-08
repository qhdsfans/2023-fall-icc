import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "小兔子猫图bot",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "",

  repo: "Xtuzzz/2023-fall-icc",
  repoDisplay: false,

  docsDir: "src",

  // navbar
  navbar: false,

  // sidebar
  sidebar: [
    "README.md",
    {
      text: "教程&扫盲",
      collapsible: false,
      children: [
        "计算概论C第零课.md", 
        {
          text: "开发环境",
          prefix: "/ide/",
          collapsible: true,
          children: [
            "README.md", "vs.md", "vscode.md", "pycharm.md", "online.md", "thonny.md"
          ]
        },
        {
          text: "Openjudge",
          prefix: "/oj/",
          collapsible: true,
          children: ["README.md", "basic.md", "submit_result.md"]
        },
        {
          text: "Python",
          prefix: "/py/",
          collapsible: true,
          children: ["README.md"]
        }
      ]
    },
    {
      text: "课程相关信息发布",
      collapsible: false,
      children: [
        {
          text: "大作业",
          prefix: "/big/",
          collapsible: true,
          children: ["README.md"]
        },
        {
          text: "习题解答",
          prefix: "/ans/",
          collapsible: true,
          children: ["README.md"]
        }
      ]
    }

  breadcrumb: true,
  breadcrumbIcon: true,// 导航栏

  plugins: {
    copyCode: {},
  },// 复制代码

  footer: "vuepress 好玩",

  copyright: false,

  displayFooter: true,

  encrypt: {
    config: {
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },


});
