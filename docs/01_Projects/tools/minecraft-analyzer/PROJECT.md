---
title: "Minecraft World Analyzer — MCAファイル解析ツール"
category: tool
status: active
owner: marzipan99
source_of_truth: "https://github.com/marzipan99/minecraft-world-analyzer"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# Minecraft World Analyzer

Minecraftのリージョンファイル（`.mca`）を解析し、ワールド全体のブロック統計・
コマンド使用箇所・構造物を一覧するブラウザツール。

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
