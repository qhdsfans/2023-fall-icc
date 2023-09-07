import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/2023-fall-icc/",

  lang: "zh-CN",
  title: "计算概论C",
  description: "小兔子助教精选",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
