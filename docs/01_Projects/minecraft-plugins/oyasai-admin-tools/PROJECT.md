---
title: "OyasaiAdminTools — 管理・お知らせ・アンケート"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiAdminTools/"
related_paths:
  - plugins/OyasaiAdminTools/src/main/kotlin/io/oyasai/oyasaiAdminTools/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# OyasaiAdminTools

サーバー運営向けの複合管理プラグイン。お知らせ・アンケート配信（GUI + Discord送信）、`syokaku`（昇格）権限審査コマンド群、プレイヤー管理（オフラインテレポート等）、BAN操作、個人ワールド拡張マクロ（`kakutyo`）を提供する。データは `announcements.json` / `surveys.json` / `surveys/results_<ID>.json` にJSON保存。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiAdminTools/` |
| 主要コード | `OyasaiAdminTools.kt`（メイン）、`bulletin/`（お知らせ・アンケート）、`commands/syokaku/`、`commands/playerManager/` |
| README | `plugins/OyasaiAdminTools/README.md`（コマンド一覧・データファイル） |
| コマンド | `/anke`, `/bulletin`（`bl`/`anno`）, `/syokaku`, `/syokakumanager`, `/playermanager`（`pm`）, `/kakutyo`, `/ban` |
| 依存 | AdvancedBan, TokenManager, WorldBorder（softdepend） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiAdminTools:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
