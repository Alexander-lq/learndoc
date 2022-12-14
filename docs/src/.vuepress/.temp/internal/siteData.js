export const siteData = JSON.parse("{\"base\":\"/learndoc/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/learndoc/favicon.ico\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/learndoc/assets/icon/chrome-mask-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/learndoc/assets/icon/chrome-mask-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/learndoc/assets/icon/chrome-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/learndoc/assets/icon/chrome-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/learndoc/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/learndoc/assets/icon/apple-icon-152.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/learndoc/assets/icon/ms-icon-144.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#ffffff\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover\"}]],\"locales\":{\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"藏宝库\",\"description\":\"个人网站\"},\"/\":{\"lang\":\"en-US\",\"title\":\"Docs Demo\",\"description\":\"A docs demo for vuepress-theme-hope\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
