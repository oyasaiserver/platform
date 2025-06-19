import { repository } from '@oyasaiserver/lib/repository'
import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src/pages',
  title: 'web',
  description: 'A VitePress Site',
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: repository.icon,
    socialLinks: [{ icon: 'github', link: repository.url }],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]
  }
})
