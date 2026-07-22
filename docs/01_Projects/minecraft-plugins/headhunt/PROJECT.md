---
title: "HeadHunt — 頭ブロック宝探しミニゲーム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/HeadHuntPlugin/src/main/kotlin/com/ququla89/headhunt/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# HeadHunt

頭（プレイヤーヘッド）ブロックを探すソロ/チーム対応の宝探しミニゲームプラグイン。`TreasureManager` が `treasures.yml` に宝の配置を永続化し、`GameManager`/`TeamManager` がゲーム状態とチーム分けを管理する。ユニットテストあり（JUnit5）。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/HeadHuntPlugin/src/main/kotlin/com/ququla89/headhunt/` |
| 主要コード | `HeadHuntPlugin.kt`（メイン）、`manager/TreasureManager.kt`, `manager/GameManager.kt`, `manager/TeamManager.kt` |
| テスト | `plugins/HeadHuntPlugin/src/test/kotlin/`（`gradle :plugins:HeadHuntPlugin:test`） |
| コマンド | `/headhunt`（`hhunt`） |
| 権限 | `headhunt.use`（デフォルト true）, `headhunt.admin`（デフォルト op） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:HeadHuntPlugin:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
