import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import  demoContainer  from '../utils/demoContainer'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'components',
        items: [
          { text: 'Button', link: '/pages/vue-components/button' },
          { text: 'Form', link: '/pages/vue-components/form' },
        ]
      },
      {
        text: 'Style',
        items: [
          { text: 'spacing', link: '/pages/style/spacing' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
