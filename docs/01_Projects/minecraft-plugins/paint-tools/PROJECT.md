---
title: "PaintTools — 地図絵画・額縁ツール"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/PaintTools/src/main/kotlin/com/github/srain3/painttools/"
related_paths: []
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# PaintTools

染料でマップアイテムに描画するためのツールプラグイン。`/painttools`（キャンバス作成・染料操作）と`/toumeigakubuti`（額縁透明化）の2系統のコマンドを持つ。アンビルでのマップ編集、チャンクロード時のマップ復元、Undo/元に戻す機能を実装する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/PaintTools/src/main/kotlin/com/github/srain3/painttools/` |
| 主要コード | `PaintTools.kt`（メイン）、`commands/PaintToolsCmd.kt`、`tools/ToolBox.kt`、`tools/configs/`（マップデータ・Undo管理） |
| コマンド | `/painttools`, `/toumeigakubuti`（`toumei`/`invisibleframe`） |
| 権限 | `painttools.command.painttools.canvas`, `painttools.canvas.use`, `painttools.command.painttools.dye`, `painttools.command.toumeigakubuti.admin` |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:PaintTools:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
