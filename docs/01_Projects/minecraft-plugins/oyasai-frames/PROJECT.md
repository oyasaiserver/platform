---
title: "OyasaiFrames — 画像地図・額縁ロック・お絵かき"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiFrames/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-09-29"
agent_task: null
---

# OyasaiFrames

画像地図、額縁のロック、地図へのお絵かきと透明化を一つのプラグインで提供する。各機能の起動は独立している。既存のデータと PDC キーは旧フォルダ・旧名前空間を使用する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiFrames/` |
| 主要コード | `icu/oyasai/frames/OyasaiFrames.kt`（メイン）、`icu/oyasai/imageonmap/`、`com/gakubuchilocker/`、`com/github/srain3/painttools/` |
| コマンド | `/tomap`、`/gakubuchilock`（`glock`）、`/gakubuchiunlock`（`gunlock`）、`/gakubuchifinder`（`gfinder`）、`/gakubuchitoumei`（`gtoumei`）、`/painttools`、`/toumeigakubuti`（`toumei`/`invisibleframe`） |
| 権限 | 従来の `imageonmap.*`、`gakubuchilocker.use`、`painttools.*` ノードを維持 |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiFrames:build` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
