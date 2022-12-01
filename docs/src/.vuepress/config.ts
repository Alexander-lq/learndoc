import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/learndoc/",

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "藏宝库",
      description: "个人网站",
    },
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    
  },

  theme,

  shouldPrefetch: false,
});
