---
title: "craftscripts"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Nexus/01_Projects/CS/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# craftscripts

## 概要

FAWEインゲームスクリプト（CraftScript）群とダイアログGUIビルダー。Rhinoエンジン（JavaScript）でMinecraftサーバー内からスクリプトを実行できる。

## ディレクトリ構成

```
CS/
├── craftscripts-notes.md       # スクリプト説明・使用メモ
├── dialog-gui-builder/         # HTML/JS製GUIビルダー
│   ├── app.js
│   ├── index.html
│   └── styles.css
└── fawe-noise-tool.html        # ノイズパラメータ調整ツール（HTML）
```

## 使用方法

- **CraftScript実行**: FAWE の `/cs <script.js>` コマンドでインゲーム実行
- **dialog-gui-builder**: ブラウザで `index.html` を開いてダイアログGUI設計
- **fawe-noise-tool**: ブラウザでノイズパラメータをビジュアル調整

## 技術仕様

| 項目 | 内容 |
|------|------|
| スクリプトエンジン | Rhino（FAWE内蔵JavaScript） |
| GUIビルダー | HTML / JavaScript（静的） |
| 依存 | FAWE（FastAsyncWorldEdit） |
