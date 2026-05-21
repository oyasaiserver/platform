---
title: "OyasaiMenu — GUIメニューシステム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiMenu/"
related_paths:
  - plugins/OyasaiMenu/src/main/kotlin/com/github/sahyuya/oyasaiMenu/
last_validated: "2026-05-20"
agent_task: null
---

# OyasaiMenu

Minecraft（Purpur 1.21.x）向けの高機能GUIメニュープラグイン。
YAMLで定義されたメニューをチェスト型GUIで表示し、アクション・マクロ・ショップ・ポイントシステムを提供する。

## 主要コマンド

| コマンド | 説明 |
|---|---|
| `/menu <name>` | 指定メニューを開く |
| `/shop <name>` | ショップメニューを開く |
| `/sell` | アイテム売却GUI |
| `/macro <name>` | マクロを実行 |
| `/pointshop` | ポイントショップ |
| `/adminmenu` | 管理者メニュー |
| `/menuedit` | メニューエディター |

## アーキテクチャ

```
command/        ← コマンドハンドラ（Bukkit CommandExecutor）
engine/         ← ビジネスロジック
  ActionEngine  ← アクション（コマンド実行・アイテム付与等）の処理
  MenuEngine    ← メニュー表示・インベントリイベント処理
  ShopEngine    ← ショップ売買ロジック
  MacroEngine   ← マクロ定義・実行
  PointShopEngine ← ポイント管理
  PopupMenuEngine ← ポップアップGUI
guimaker/       ← GUIエディター（ドラフト/ライブ方式）
  GuiEditorEngine
  GuiEditorSession
manager/
  AnnouncementManager ← アナウンス管理
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

- エディター向け詳細: [`../../../02_Docs/tools/oyasai-menu-editors-doc/`](../../../02_Docs/tools/oyasai-menu-editors-doc/)
- GuiMaker: [citiesskymine.md](citiesskymine.md)
