import { defineConfig } from 'vitepress'
import { description, name } from '../package.json'

export default defineConfig({
  description,
  srcDir: 'src',
  themeConfig: {
    nav: [
      { link: '/', text: 'Home' },
      { link: '/markdown-examples', text: 'Examples' }
    ],
    sidebar: [
      {
        items: [
          { link: '/markdown-examples', text: 'Markdown Examples' },
          { link: '/api-examples', text: 'Runtime API Examples' }
        ],
        text: 'Examples'
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  title: name
})
