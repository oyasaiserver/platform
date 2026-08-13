---
title: "EntityPose — エンティティ姿勢・配置編集"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/EntityPose/src/main/kotlin/me/ankokunsan/entityPose/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# EntityPose

エンティティ（アーマースタンド等）の角度・座標刻み・スケールを調整する建築支援プラグイン。デバッグ棒に似た「エンティティ棒」とCopy Wandで対象を選択し、範囲選択したエンティティのコピー/ペースト/カット/削除ができる。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/EntityPose/src/main/kotlin/me/ankokunsan/entityPose/` |
| 主要コード | `EntityPose.kt`（メイン）、`EntityCommands.kt`（`/ep` 全サブコマンド）、`commands/EntityCopy.kt`, `commands/EntityPaste.kt` |
| コマンド | `/ep`（stick/kakudo/zahyo/wand/clear/copy/paste/cut/info/infoset/scale/hojo） |
| 権限 | `entitypose_arrange`（デフォルト op） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:EntityPose:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
