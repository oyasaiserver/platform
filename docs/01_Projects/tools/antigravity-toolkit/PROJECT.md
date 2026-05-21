---
title: "antigravity-toolkit"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Antigravity/01_Projects/antigravity-toolkit/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# antigravity-toolkit

## 概要

Antigravityワークスペースの統合ランチャー（.app / launcher.py）とスクリプト集。Minecraftビルド・SocialLikes可視化・ユーティリティを一元管理するGUIランチャー。

## 起動方法

```bash
open "Antigravity Toolkit.app"   # macOS アプリとして起動
# または
bash Launch_Toolkit.command
```

## サブフォルダ構成

| フォルダ | 内容 |
|---------|------|
| `minecraft/` | hemisphere schem生成、noise可視化、mca（リージョンファイル）操作 |
| `sociallikes/` | SocialLikes可視化、タイムスタンプ統計、チャット解析 |
| `utils/` | バックアップ監査、ダウンローダー、Java API抽出など汎用ツール |

## 技術仕様

| 項目 | 内容 |
|------|------|
| ランチャー | Python（Tkinter等）+ macOS .app バンドル |
| 対象OS | macOS |
| スクリプト言語 | Python / Shell |
