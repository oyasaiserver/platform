import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "src",
  outDir: "dist",
  title: "web",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: `https://avatars.githubusercontent.com/oyasaiserver`,
    socialLinks: [{ icon: "github", link: `https://github.com/oyasaiserver/platform` }],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
  },
});
