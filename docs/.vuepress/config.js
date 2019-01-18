/**
 * --- 配置文件的入口文件 ---
 */

const utils = require("./utils")

module.exports = {
  title: "Front-end Library",
  description: "前端图书馆",
  base: "/Front-end-Library/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "文章",
        link: "/article/"
      },
      {
        text: "面试",
        link: "/interview/"
      },
      {
        text: "Blog",
        link: "/blog/"
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: "上次更新",
    repo: "ViktorWong/Front-end-Library",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public"
      }
    }
  },
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-include"))
    }
  }
}
