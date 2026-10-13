---
title: "Vertex — サービス型プラグイン基盤"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/Vertex/src/main/kotlin/io/oyasai/vertex/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# Vertex

`Service`（`onLoad`/`onEnable`/`onDisable` + コマンド一覧）を単位に機能を追加できる、軽量なサービス型プラグイン基盤。現状は `SchematicsService` の1機能のみを搭載し、`/oyasai-schematics load <ID>` で schematic.cloud から `.schem` ファイルをダウンロードし `plugins/FastAsyncWorldEdit/schematics/` に配置する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/Vertex/src/main/kotlin/io/oyasai/vertex/` |
| 主要コード | `Vertex.kt`（メイン、`services` レジストリ）、`services/Service.kt`（基底クラス）、`services/schematics/SchematicsService.kt` |
| コマンド | `/oyasai-schematics load <ID>`（op限定） |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:Vertex:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
