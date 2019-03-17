/**
 * --- 配置文件的入口文件 ---
 */

const utils = require('./utils')

module.exports = {
  title: 'Full-Stack Library',
  description: '前端图书馆',
  base: '/Full-Stack-Library/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '内功',
        link: '/itbasic/'
      },
      {
        text: '进阶',
        link: '/advance/'
      },
      { text: 'js函数式编程指南', link: 'https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/' },
      {
        text: '藏金阁',
        items: [
          { text: '掘金小册', link: '/interview/' },
          {
            text: '文章收集',
            link: '/article/'
          },
          { text: '图书收集', link: '/library/' },
          {
            text: '推荐库',
            link: '/repository/'
          },
          {
            text: 'Blog',
            link: 'https://viktorwong.github.io/'
          }
        ]
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'ViktorWong/Full-Stack-Library',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 4
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-132773827-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
