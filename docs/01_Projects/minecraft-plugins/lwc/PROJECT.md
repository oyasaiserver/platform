---
title: "LWC — ブロック保護"
category: platform
status: active
owner: platform-maintainers
source_of_truth: "plugins/LWC/"
related_paths:
  - packages/oyasai-plugins.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-09-27"
agent_task: null
---

# LWC

外製 LWC の SQLite データ形式を引き継ぐ、自作のブロック保護プラグイン。既存 DB の version が 6 以外なら書き込まずに無効化する。本番 package の外製 LWC は別途切り替える。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/LWC/` |
| 主要コード | `LwcPlugin.kt`（コマンド・イベント）、`ProtectionStore.kt`（SQLite）、`Protection.kt`（判定） |
| コマンド | `/lock`, `/cdisplay`, `/unlock`, `/cinfo`, `/cmodify`, `/chopper` |
| ビルド・テスト | `nix develop --command gradle :plugins:LWC:build` |
| Nix package | `packages/oyasai-plugins.nix` が `plugins/LWC` を検出し、`lwc` を公開する |
| ローカル実行・デプロイ | 本番切り替え時に外製 LWC の解除、DB 保全、JAR 配置と再起動を別途計画する |
| 関連 | 外製 LWC の SQLite、Paper/Purpur API |
| 非公開メモ | `archive/` または `local/` に置く |

## 対応範囲

private / display、プレイヤー共有、HOPPER フラグ、保護対象のクリック指定、容器の自動保護モードを提供する。置いただけでは保護しない。SQLite の未対応 type は読み込まない。

## 外製版から削った機能

public、パスワード、寄付、補給、HOPPER 以外のフラグ、履歴、WorldGuard・経済連携、MySQL、多言語、SignShop 互換を含まない。`lwc`, `cadmin`, `cpublic`, `cpassword`, `cdonation`, `csupply`, `cunlock`, `cremoveall`, `climits`, `credstone`, `cmagnet`, `cdroptransfer`, `cpersist`, `cnolock`, `cnospam`, `cexempt`, `cautoclose`, `callowexplosions`, `ctnt`, `cdefault` は廃止メッセージのみ返す。
