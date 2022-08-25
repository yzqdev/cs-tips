import { navbar } from 'vuepress-theme-hope'

export default navbar([
  { text: '前端', icon: 'html', link: '/frontend/' },

  { text: 'go', icon: 'go', link: '/go-tip/' },
  { text: 'java', icon: 'java', link: '/java-tip/' },

  { text: 'python', icon: 'python', link: '/python-tip/' },
  { text: 'c#', icon: 'csharp', link: '/csharp-tip/' },

  {
    text: '其他',
    icon: 'note',
    children: [
      {
        text: 'java编程思想',
        icon: 'java',
        link: 'https://yzqbooks.github.io/think-in-java/',
      },
      {
        text: 'git教程',
        icon: 'git',
        link: 'https://yzqdev.github.io/git-tutor',
      },
      {
        text: '安卓教程',
        icon: 'android',
        link: 'https://yzqdev.github.io/android-docs',
      },

      {
        text: 'node教程',
        icon: 'node',
        link: 'https://yzqdev.github.io/node-docs',
      },
      {
        text: 'css教程',
        icon: 'css',
        link: 'https://yzqdev.github.io/html-tutor',
      },
      {
        text: 'wandoc',
        icon: 'read',
        link: 'https://yzqbooks.github.io/wangdoc',
      },
      {
        text: 'cg教程',
        icon: 'blender',
        link: 'https://yzqdev.github.io/cg-tutor',
      },
    ],
  },
])
