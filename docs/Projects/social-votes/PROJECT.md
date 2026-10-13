---
title: "SocialVotes — 看板投票システム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/SocialVotes/src/main/kotlin/com/github/sahyuya/socialvotes/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# SocialVotes

看板に投票（賛成/反対等）できるプラグイン。看板作成・クリックのリスナー、投票結果GUI、投票者一覧GUIを持ち、看板を動かした際の位置更新コマンド（`/svupdate`）や登録済み看板へのテレポート（`/svtp`）を提供する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/SocialVotes/src/main/kotlin/com/github/sahyuya/socialvotes/` |
| 主要コード | `SocialVotes.kt`（メイン）、`data/DataManager.kt`、`gui/`、`listeners/SignCreateListener.kt`, `listeners/SignClickListener.kt` |
| コマンド | `/socialvotes`（`sv`）, `/svupdate`, `/svtp` |
| 権限 | `socialvotes.use`（デフォルト true）, `socialvotes.admin`（デフォルト op） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:SocialVotes:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
