---
title: "SocialLikes3 — 建築いいね・訪問システム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/SocialLikes3/src/main/kotlin/com/github/srain3/sociallikes/"
related_paths:
  - docs/dev/projects/minecraft-plugins/sqlite-migration-design.md
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# SocialLikes3

プレイヤーの建築（SL看板）に「いいね」を付けて発見・ランキングできるプラグイン。看板テレポート、建築一覧GUI、ランクアップ判定（建築数・ログイン率）、Discord連携（DiscordSRV/Javacord）、SQLite（Exposed）でのデータ永続化を行う。TokenManagerと連携するポイント付与APIも持つ。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/SocialLikes3/src/main/kotlin/com/github/srain3/sociallikes/` |
| 主要コード | `SocialLikes.kt`（メイン）、`datas/SLDatabase.kt`（SQLite）、`command/`、`gui/`、`discord/SLDiscord.kt` |
| 設計資料 | `docs/dev/projects/minecraft-plugins/sqlite-migration-design.md`（SQLite移行設計） |
| コマンド | `/sltp`, `/sla`, `/slbuild`, `/sluser`, `/slupdate`, `/slsignget`, `/slmenu`, `/slnear`, `/vacanttp`（`vtp`）, `/slrankup`, `/slsignbreak` |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:SocialLikes3:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |

## つながり

- [social-votes](../social-votes/PROJECT.md) — 同じ Social 系の看板投票プラグイン
- [dynamic-profile](../dynamic-profile/PROJECT.md) — SocialLikes のデータを使うプロフィール・リーダーボード
- [sociallikes-analytics](../../tools/sociallikes-analytics/PROJECT.md) — SocialLikes3 のデータを集計・可視化するツール
- [SQLite 移行設計](../sqlite-migration-design.md)
- [ダイアログ文言グラフと SLData の自動退避](../../../guides/tools/sociallikes-dialog-text-graph.md)
- [プロジェクト一覧](../../INDEX.md)
