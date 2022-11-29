import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: '编程',
    icon: 'icon-template',
    children: [
      {
        text: '前端',
        icon: 'icon-css',
        children: [
          { text: 'vue', link: 'http://dubbo.io/' },
          { text: 'react', link: 'https://www.baidu.com/' }
        ]
      },
      {
        text: '后端',
        icon: 'icon-object',
        children: [
          {
            text: 'Java',
            link: 'http://mysql.hepcloud.top'
          },
          {
            text: 'Go', link: 'http://redis.huerpu.top'
          },
          {
            text: 'Python', link: 'http://es.hepcloud.top'
          },
          {
            text: 'Lua', link: 'http://es.hepcloud.top'
          },
          {
            text: 'PHP', link: 'http://es.hepcloud.top'
          }
        ]
      },
    ]
  },
  {
    text: '中间件',
    children: [
      { text: 'redis', link: '/accumulate/' },
      { text: 'kafka', link: '/algorithm/' },
      { text: 'mysql', link: 'http://dubbo.io/' }
    ]
  },
  {
    text: '关于我', link: 'http://www.jinglisen.top'
  },
  { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
