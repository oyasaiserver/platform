---
title: "GakubuchiLocker — 額縁ロック保護"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/GakubuchiLocker/src/main/kotlin/com/gakubuchilocker/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# GakubuchiLocker

額縁（item frame）をロックして第三者の破壊・アイテム交換から保護するプラグイン。ロック済み額縁は自動透明化にも対応し、周囲のロック済み額縁を赤パーティクルで可視化するファインダー機能を持つ。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/GakubuchiLocker/src/main/kotlin/com/gakubuchilocker/` |
| 主要コード | `GakubuchiLockerPlugin.kt`（メイン）、`commands/`、`database/DatabaseManager.kt`、`listeners/FrameEventListener.kt` |
| コマンド | `/gakubuchilock`（`glock`）, `/gakubuchiunlock`（`gunlock`）, `/gakubuchifinder`（`gfinder`）, `/gakubuchitoumei`（`gtoumei`） |
| 権限 | `gakubuchilocker.use`（デフォルト true） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:GakubuchiLocker:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
