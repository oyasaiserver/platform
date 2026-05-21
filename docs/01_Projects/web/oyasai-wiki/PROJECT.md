---
title: "oyasai-wiki"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Antigravity/01_Projects/oyasai-wiki/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# oyasai-wiki

## 概要

おやさいサーバーの静的Wikiサイト。HTML/JSで構築されており、サーバーのルール・機能・コマンドなどをプレイヤー向けに提供する。

## ディレクトリ構成

```
oyasai-wiki/
├── index.html          # エントリーポイント
├── content/            # Wikiページコンテンツ
├── assets/             # 画像・スタイルシート
└── scripts/            # クライアントサイドJS
```

## 使用方法

静的ファイルをWebサーバー（Nginx等）またはGitHub Pagesでホスト。  
`index.html` をブラウザで直接開いてもローカル確認可能。

## 技術仕様

| 項目 | 内容 |
|------|------|
| 技術スタック | HTML / JavaScript / CSS |
| ホスティング | 静的サイト（サーバーレス） |
| ビルドツール | 不要（純粋な静的ファイル） |
