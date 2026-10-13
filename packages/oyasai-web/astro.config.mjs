import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { satteri } from "@astrojs/markdown-satteri";
import { safeMarkdown } from "./scripts/safe-markdown.mjs";

export default defineConfig({
  site: "https://oyasai.io",
  trailingSlash: "always",
  cacheDir: "./.cache/astro",
  vite: { cacheDir: "./.cache/vite", resolve: { preserveSymlinks: true } },
  // Remote images stay as URLs; never authorize build-time image downloads.
  image: { domains: [], remotePatterns: [] },
  markdown: { processor: satteri({ mdastPlugins: [safeMarkdown] }) },
  integrations: [
    starlight({
      title: "おやさいサーバー Wiki",
      favicon: "/favicon.svg",
      customCss: ["./src/styles/theme.css"],
      defaultLocale: "root",
      locales: { root: { label: "日本語", lang: "ja" } },
      sidebar: [
        {
          label: "はじめに・接続",
          items: [{ autogenerate: { directory: "start" } }],
        },
        {
          label: "ルールとマナー",
          items: [{ autogenerate: { directory: "rules" } }],
        },
        {
          label: "ランクと権限",
          items: [{ autogenerate: { directory: "ranks" } }],
        },
        {
          label: "遊び方・経済",
          items: [{ autogenerate: { directory: "play" } }],
        },
        {
          label: "機能・プラグイン",
          items: [{ autogenerate: { directory: "features" } }],
        },
        {
          label: "ワールド・観光・交通",
          items: [{ autogenerate: { directory: "world" } }],
        },
        {
          label: "イベント・コミュニティ",
          items: [{ autogenerate: { directory: "community" } }],
        },
        {
          label: "スタッフ・運営",
          items: [{ autogenerate: { directory: "staff" } }],
        },
      ],
    }),
  ],
});
