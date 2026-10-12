---
title: "OyasaiLWC — ブロック保護"
category: platform
status: active
owner: platform-maintainers
source_of_truth: "plugins/OyasaiLWC/"
related_paths:
  - packages/oyasai-plugins.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-06"
agent_task: null
---

# OyasaiLWC

外製 LWC の SQLite データ形式を引き継ぐ、自作のブロック保護プラグイン。plugin.yml の名前は `OyasaiLWC`、`provides: [LWC]` で旧名の依存と検索を維持する。既存 DB の version が 6 以外なら書き込まずに無効化する。本番 package は `oyasailwc` を選択する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiLWC/` |
| 主要コード | `LwcPlugin.kt`（コマンド・イベント）、`ProtectionStore.kt`（SQLite）、`Protection.kt`（判定） |
| コマンド | `/lock`, `/cdisplay`, `/unlock`, `/cinfo`, `/cmodify`, `/chopper` |
| ビルド・テスト | `nix develop --command gradle :plugins:OyasaiLWC:build`（`OyasaiLWC.jar`） |
| Nix package | `packages/oyasai-plugins.nix` が `plugins/OyasaiLWC` を検出し、`oyasailwc` を公開する |
| ローカル実行・デプロイ | 本番切り替え時に外製 LWC の解除、DB 保全、JAR 配置と再起動を別途計画する |
| 関連 | 外製 LWC の SQLite、Paper/Purpur API |
| 非公開メモ | `archive/` または `local/` に置く |

## 対応範囲

private / display、プレイヤー共有、HOPPER フラグ、保護対象のクリック指定、容器の自動保護モードを提供する。置いただけでは保護しない。SQLite の未対応 type は読み込まない。

SignShop 向けに `com.griefcraft.lwc.LWCPlugin`、`LWC.findProtection`、`LWC.canAccessProtection` の最小互換 API を持つ。自動ロック用の `protectBlock` は非対応。

データ読み込み前の `onLoad` で、新フォルダ `plugins/OyasaiLWC/` が存在せず旧フォルダ `plugins/LWC/` がある場合だけ全内容をコピーする。`lwc.db`、SQLite の補助ファイル、設定やサブフォルダも対象とし、旧フォルダは残す。コピー失敗時は新フォルダを公開せず、DB を開かずに無効化する。既存の新フォルダは上書きしない。旧フォルダの削除は本番確認後に手動で行う。

## 外製版から削った機能

public、パスワード、寄付、補給、HOPPER 以外のフラグ、履歴、WorldGuard・経済連携、MySQL、多言語を含まない。`lwc`, `cadmin`, `cpublic`, `cpassword`, `cdonation`, `csupply`, `cunlock`, `cremoveall`, `climits`, `credstone`, `cmagnet`, `cdroptransfer`, `cpersist`, `cnolock`, `cnospam`, `cexempt`, `cautoclose`, `callowexplosions`, `ctnt`, `cdefault` は廃止メッセージのみ返す。
