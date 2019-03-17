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
        text: '基础进阶',
        items: [
          { text: '深入 JavaScript', link: '/Js/' },
          {
            text: '深入 CSS',
            link: '/CSS/'
          },
        ]
      },
      {
        text: '主流框架',
        items: [
          { text: 'Vue专栏', link: '/Vue/' },
          {
            text: 'React专栏',
            link: '/React/'
          },
          { text: '小程序专栏', link: '/Applets/' },
          {
            text: '微信公众号',
            link: '/Wechat/'
          },
          {
            text: 'Hybrid开发专栏',
            link: '/Hybrid/'
          }
        ]
      },
      {
        text: '移动端',
        items: [
          {
            text: 'Flutter',
            link: '/Flutter/'
          },
          {
            text: 'iOS原生开发',
            link: '/iOS/'
          }
        ]
      },
      {
        text: '服务端',
        items: [
          { text: '数据结构与算法', link: '/Algorithms/' },
          { text: 'HTTP详解', link: '/HTTP/' },
          { text: 'Node.js', link: '/Node/' }
        ]
      },
      {
        text: '全栈思维',
        items: [
          {
            text: 'Web安全',
            link: '/WebSafety/'
          },
          {
            text: '自动化测试',
            link: '/AutoText/'
          },
          {
            text: '区块链',
            link: '/Blockchain/'
          },
          {
            text: '推荐库',
            link: '/Repository/'
          }
        ]
      }
      // {
      //   text: 'Blog',
      //   link: 'https://viktorwong.github.io/'
      // }
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
