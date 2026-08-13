---
title: "TPswitch — テレポート機能改善"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/TPswitch/src/main/kotlin/com/github/srain3/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# TPswitch

バニラのテレポート申請機能を拡張するプラグイン。プレイヤーごとにTP受付のON/OFFやブラックリストを設定でき、LuckPermsの`tpswitch.tpignore`権限を持つ相手はこれらの制限を無視してテレポートできる。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/TPswitch/src/main/kotlin/com/github/srain3/` |
| 主要コード | `TPswitch.kt`（メイン、`onPlayerCheck`）、`TPevent.kt` |
| コマンド | `/tpset` |
| 権限 | `tpswitch.tpset`（デフォルト true）, `tpswitch.tpignore`（デフォルト op） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:TPswitch:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
