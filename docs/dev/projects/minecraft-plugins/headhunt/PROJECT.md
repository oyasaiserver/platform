---
title: "HeadHunt — 頭ブロック宝探しミニゲーム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiGames/src/main/kotlin/icu/oyasai/games/headhunt/"
related_paths:
  - plugins/OyasaiGames/README.md
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# HeadHunt

OyasaiGames に収録された、頭（プレイヤーヘッド）ブロックを探すソロ/チーム対応の宝探しミニゲーム。`TreasureManager` が `plugins/OyasaiGames/treasures.yml` に宝の配置を永続化し、`GameManager`/`TeamManager` がゲーム状態とチーム分けを管理する。旧 `plugins/HeadHunt/treasures.yml` は移行時にコピーして残す。ユニットテストあり（JUnit5）。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiGames/src/main/kotlin/icu/oyasai/games/headhunt/` |
| 主要コード | `HeadHuntModule.kt`（初期化）、`manager/TreasureManager.kt`, `manager/GameManager.kt`, `manager/TeamManager.kt` |
| テスト | `plugins/OyasaiGames/src/test/kotlin/icu/oyasai/games/headhunt/`（`gradle :plugins:OyasaiGames:test`） |
| コマンド | `/headhunt`（`hhunt`） |
| 権限 | `headhunt.use`（デフォルト true）, `headhunt.admin`（デフォルト op） |
| ビルド確認 | `nix develop --command gradle :plugins:OyasaiGames:build` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |

## つながり

- [プロジェクト一覧](../../INDEX.md)
