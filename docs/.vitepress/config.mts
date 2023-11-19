import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import  demoContainer  from '../utils/demoContainer'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CJr Blog",
  description: "CJr Blog",
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('../../src', import.meta.url))
        },
        {
          find: /^.*\/VPHero1\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/Custom.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(demoContainer)
    },
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'material-theme-ocean'
    // }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'components',
        collapsed: true,
        items: [
          { text: 'Button 按钮', link: '/pages/vue-components/button' },
          { text: 'Alert 提示', link: '/pages/vue-components/alert' },
          { text: 'Collapse 折叠面板', link: '/pages/vue-components/collapse' },
          { text: 'Form 表单', link: '/pages/vue-components/form' },
        ]
      },
      {
        text: 'Style',
        collapsed: true,
        items: [
          { text: 'spacing', link: '/pages/style/spacing' },
          { text: 'color', link: '/pages/style/color' },
          { text: 'shadows', link: '/pages/style/shadows' },
        ]
      },
      {text: 'Style',},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
