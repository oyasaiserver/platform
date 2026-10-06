---
title: "OyasaiMenu — GUIメニューシステム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiMenu/"
related_paths:
  - plugins/OyasaiMenu/src/main/kotlin/com/github/sahyuya/oyasaiMenu/
  - docs/dev/guides/tools/oyasai-menu-editors-doc/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-05"
agent_task: null
---

# OyasaiMenu

Minecraft（Purpur 1.21.x）向けの高機能GUIメニュープラグイン。
YAMLで定義されたメニューをチェスト型GUIで表示し、アクション・ショップ・ポイントシステムを提供する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiMenu/` |
| 主要コード | `plugins/OyasaiMenu/src/main/kotlin/com/github/sahyuya/oyasaiMenu/` |
| エディター資料 | `docs/dev/guides/tools/oyasai-menu-editors-doc/` |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiMenu:compileKotlin` |
| ローカル反映 | `plugins/OyasaiMenu/build/libs/OyasaiMenu.jar` を `local/paperclip-tmp/plugins/OyasaiMenu.jar` にコピーし、必要に応じてリロードまたは再起動 |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置き、このファイルには公開可能な判断だけを書く |

## 主要コマンド

| コマンド | 説明 |
|---|---|
| `/menu <name>` | 指定メニューを開く |
| `/shop <name>` | ショップメニューを開く |
| `/sell` | アイテム売却GUI |
| `/pointshop` | ポイントショップ |
| `/adminmenu` | 管理者メニュー |
| `/menuedit` | ショップ商品・売却ホワイトリストの編集 |
| `/oyasaimenu reload` | 設定・メニュー・お知らせを再読み込み |

## アーキテクチャ

```
command/        ← コマンドハンドラ（Bukkit CommandExecutor）
engine/         ← ビジネスロジック
  ActionEngine  ← アクション（コマンド実行・アイテム付与等）の処理
  MenuEngine    ← メニュー表示・インベントリイベント処理
  ShopEngine    ← ショップ売買ロジック
  PointShopEngine ← ポイント管理
  PopupMenuEngine ← ポップアップGUI
manager/
  AnnouncementManager ← announcements.yml の読み込み
```

## メニューYAML定義例

```yaml
items:
  - slot: 0
    material: DIAMOND
    name: "&bダイヤ"
    actions:
      - "give {player} diamond 1"
```

## 関連ドキュメント

- お知らせは `plugins/OyasaiMenu/announcements.yml` を直接編集し、`/oyasaimenu reload` で反映する。
- エディター向け詳細: [`../../../guides/tools/oyasai-menu-editors-doc/`](../../../guides/tools/oyasai-menu-editors-doc/)

## つながり

- [citiesskymine](../citiesskymine/PROJECT.md) — メニュー資料を参照するプラグイン
- [エディター資料（HTML）](../../../guides/tools/oyasai-menu-editors-doc/index.html)
- [プロジェクト一覧](../../INDEX.md)
