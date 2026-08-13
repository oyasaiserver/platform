---
title: "DynamicProfile — プレイヤープロフィール・リーダーボード"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/DynamicProfile/"
related_paths:
  - plugins/DynamicProfile/src/main/kotlin/com/baakun/dynamicprofile/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# DynamicProfile

プレイヤーのプロフィールGUI・称号・リーダーボード（全期間/週間）・おすすめ建築登録を提供するプラグイン。Vault/LuckPermsの権限グループ、SocialLikes3、TokenManagerと連携する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/DynamicProfile/src/main/kotlin/com/baakun/dynamicprofile/` |
| 主要コード | `DynamicProfile.kt`（メイン）、`command/`、`leaderBoard/`、`profile/playerTitle/` |
| コマンド | `/dprofile`（`dp`）, `/dpmanager`, `/dpleaderboard`, `/dpweeklyleaderboard`, `/dpsuki` |
| 依存 | Votifier, Vault, TokenManager（必須）/ PlaceholderAPI（任意） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:DynamicProfile:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
