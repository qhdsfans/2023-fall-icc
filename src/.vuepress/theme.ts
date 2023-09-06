import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "小兔子猫图bot",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "Xtuzzz/2023-fall-icc",
  repoDisplay: false,

  docsDir: "src",

  // navbar
  navbar: false,

  // sidebar
  sidebar: "structure",

  footer: "vuepress 好玩",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },


});
