---
title: "oyasai-wiki"
category: web
status: active
owner: marzipan99
source_of_truth: "https://github.com/oyasaiserver/wiki"
related_paths:
  - packages/oyasai-cdktf/src/stacks/platform-infra.ts
last_validated: "2026-10-06"
agent_task: null
project_kind: web
runtime_kind: static-site
minecraft_related: true
---

# oyasai-wiki

## 概要

おやさいサーバーのプレイヤー向け Wiki。原稿は別リポジトリ [`oyasaiserver/wiki`](https://github.com/oyasaiserver/wiki) の Markdown で、MkDocs（Material）でサイトにする。人は Decap CMS の編集画面から、AI はブランチと PR で編集する。どちらも PR を通って `main` に入る。

今の公開中の Wiki は `wiki.oyasai.io`（Seesaa Wiki）。ページは順に新しいリポジトリへ移す。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | [`oyasaiserver/wiki`](https://github.com/oyasaiserver/wiki)。最初に読むのはそのリポジトリの `AGENTS.md` |
| 事実の出どころ | プラグインの機能・コマンド・権限は、この platform リポジトリの各 `PROJECT.md` と `plugins/<Plugin>/` |
| DNS | `wiki.oyasai.io` の DNS は platform の cdktf（`packages/oyasai-cdktf/src/stacks/platform-infra.ts`）で管理。今は Seesaa への CNAME |
| 公開先 | 未定 |
| 非公開メモの扱い | Wiki にもこのページにも書かない。`docs/local/` へ |

## つながり

- [oyasaiserver/wiki](https://github.com/oyasaiserver/wiki) — 原稿のリポジトリ
- [プロジェクト一覧](../../INDEX.md)
