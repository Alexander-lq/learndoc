import { sidebar } from "vuepress-theme-hope";
import { redis } from "./zhSidebar/redis";

export const zhSidebar = sidebar({
  "/zh/zjj/redis/": redis,
  // "/zh/": [
  //   // "",
   
  //   // {
  //   //   icon: "discover",
  //   //   text: "案例",
  //   //   prefix: "demo/",
  //   //   link: "demo/",
  //   //   children: "structure",
  //   // },
  //   // {
  //   //   text: "文档",
  //   //   icon: "note",
  //   //   prefix: "guide/",
  //   //   children: "structure",
  //   // },
  //   "slides",
  // ],
});
