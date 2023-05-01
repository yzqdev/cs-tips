import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  logo: '/images/logo.png',

  repo: 'yzqdev/cs-tips',

  docsDir: 'docs',
  iconPrefix: 'iconfont icon-',
  // theme-level locales config
pcBreakPoint:1600,
  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,
  footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

  displayFooter: false,
  // page meta

  // custom containers

  // 404 page
  // a11y
  plugins: {
    prismjs: {
      light: 'tomorrow',
      dark: 'tomorrow',
    },
    components: {
      components: ['BiliBili', 'PDF', 'StackBlitz'],
    },
    mdEnhance: {
      tabs: true,
      codetabs: true,
      demo: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      vuePlayground: true,

      //start playground 配置
      playground: {
        presets: [
          'ts',
          'vue',
          {
            name: 'playground#language',
            component: 'PlaygroundComponent',
            propsGetter: (playgroundData): Record<string, string> => ({
              // playground props
            }),
          },
        ],
        config: {
          ts: {
            // ...
          },
          vue: {
            // ...
          },
        },
      },
      //end playground 配置
    },
  },
},{custom:true})
