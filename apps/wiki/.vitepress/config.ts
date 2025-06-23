import { name, organization } from '@oyasaiserver/config/repository.json' with {
  type: 'json'
}
import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src/pages',
  title: 'web',
  description: 'A VitePress Site',
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: `https://avatars.githubusercontent.com/${organization}`,
    socialLinks: [
      { icon: 'github', link: `https://github.com/${organization}/${name}` }
    ],
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
