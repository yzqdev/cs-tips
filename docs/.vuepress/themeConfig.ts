import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  logo: '/images/logo.png',

  repo: 'yzqdev/cs-tips',

  docsDir: 'docs',
  iconPrefix: 'iconfont icon-',
  // theme-level locales config

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,
  footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

  displayFooter: true,
  // page meta

  // custom containers

  // 404 page
  // a11y
  plugins: {
    mdEnhance: {
      codetabs: true,
    },
  },
})
