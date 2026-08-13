---
title: "Minecraft World Analyzer — MCAファイル解析ツール"
category: tool
status: active
owner: marzipan99
source_of_truth: "https://github.com/marzipan99/minecraft-world-analyzer"
related_paths:
  - docs/01_Projects/tools/minecraft-analyzer/
project_kind: tool
runtime_kind: browser-tool
minecraft_related: true
last_validated: "2026-06-05"
agent_task: null
---

# Minecraft World Analyzer

Minecraftのリージョンファイル（`.mca`）を解析し、ワールド全体のブロック統計・
コマンド使用箇所・構造物を一覧するブラウザツール。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | 外部リポジトリ `https://github.com/marzipan99/minecraft-world-analyzer` |
| Platform内ミラー | `docs/01_Projects/tools/minecraft-analyzer/` |
| 実行入口 | `index.html` または `run.sh` |
| Minecraft連携 | ワールド/リージョンファイル解析ツール。サーバープラグインとしてロードしない |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置き、このファイルには公開可能な判断だけを書く |

## 使用方法

1. `index.html` をブラウザで開く（サーバー不要）
2. `.mca` ファイル（複数可）またはワールドフォルダをドロップ
3. 自動でチャンクを解析し、ブロック種別・コマンドブロック内容を一覧表示
4. CSVエクスポート対応

## ファイル形式

**MCA（Minecraft Region）**:
- 4KB ヘッダー（1024エントリ × 4バイト, big-endian）
- 各チャンク: 4B長さ + 1B圧縮種別（2=zlib, 1=gzip）+ NBTバイナリ
- NBT Long配列によるブロックステートのビットパッキング（BigInt使用）

## 技術仕様

- Web Worker + pako.js（CDN）でzlib/gzip展開
- `NbtReader` クラスで全NBTタグ型（0〜12）を解析
- 64bit Long値は JavaScript `BigInt` で処理
- ダーク/ライトモード対応UI

## 対応データ

- Minecraft Java Edition 1.18以降（Anvil形式 第2世代）
- OverWorld / Nether / The End いずれのリージョンファイルも解析可
