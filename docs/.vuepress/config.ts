import { defineUserConfig } from '@vuepress/cli'
import { path } from '@vuepress/utils'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './themeConfig'
export default defineUserConfig({
  base: '/cs-tips/',
  dest: './dist',
  locales: {
    '/': {
      // 设置正在使用的语言
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',

        href: `/cs-tips/images/logo.png`,
      },
    ],

    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    [
      'link',
      //我的vscodeiconfont库
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3267094_1gli0nmxpsr.css',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config

  lang: 'zh-CN',
  title: 'cs tips',
  description: 'cs tips',
  markdown: {
    headers: {
      level: [2, 5],
    },

    importCode: {
      handleImportPath: (str) => str.replace(/^@/, path.resolve(__dirname, './')),
    },
  },
  theme: theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
})
