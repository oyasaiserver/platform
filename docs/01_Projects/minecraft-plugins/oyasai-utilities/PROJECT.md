---
title: "OyasaiUtilities — 小物系ユーティリティ集"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiUtilities/"
related_paths:
  - plugins/OyasaiUtilities/src/main/kotlin/icu/oyasai/utilities/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# OyasaiUtilities

おやさい鯖向けの小規模ユーティリティ機能をまとめた複合プラグイン。README（`plugins/OyasaiUtilities/README.md`）に機能別の説明がある。

## 内蔵機能

| 機能 | 内容 |
|---|---|
| NotNBT | クリエ経由のアイテム持ち出し対策（NBTタグ除去） |
| OreReappears | 鉱石が時間経過で再生成するワールド機能（`/orerepopreload`, `/orerepopswitch`） |
| AdminBP | ページ送り可能な管理者用バックパックGUI（`/adminbp`, `abp`） |
| OreSmelter | 自動精錬（`/oresmelter`, `os`） |
| GetUUID | プレイヤーUUID取得（`/uuid`） |
| TimerBar | ボスバー式タイマー（`/timerbar`） |
| TPath | テレポート履歴の戻る/進む（`/back`, `/forward`） |
| CreativeManagement | クリエ/サバイバル間のアイテム受け渡し制限（`cm.bypass`） |
| DebugOnBE | ブロック配置デバッグ表示・Togo設定GUI（`/debugonbe`, `/togo`, `/togom`） |

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiUtilities/src/main/kotlin/icu/oyasai/utilities/` |
| 主要コード | `Main.kt`（エントリ）、機能ごとに `adminbp/`, `ore_reappears/`, `oresmelter/`, `debugonbe/` 等のサブパッケージ |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiUtilities:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
