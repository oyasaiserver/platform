---
title: "Minecraft Glass Gradient — ガラスグラデーション生成ツール"
category: tool
status: active
owner: marzipan99
source_of_truth: "https://github.com/marzipan99/minecraft-glass-gradient"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# Minecraft Glass Gradient

画像からMinecraftのステインドグラスブロックを重ねた「グラデーション壁」の
`.schem` ファイルを生成するブラウザツール。

## 使用方法

1. `gui/index.html` をブラウザで開く（サーバー不要）
2. 画像ファイル（PNG/JPEG）をドラッグ＆ドロップ
3. 層数・向き・サイズを設定して変換
4. `.schem` ファイルをダウンロードし、WorldEdit/FAWEでインポート

## 層数と必要スペック

| 層数 | パレット生成時間 | IndexedDBキャッシュサイズ | 備考 |
|---|---|---|---|
| 1層 | < 1秒 | < 1MB | 初回から快適 |
| 2層 | 1〜2秒 | < 1MB | 実用的 |
| 3層 | 5〜10秒 | 〜1MB | **推奨** バランスが良い |
| 4層 | 30〜60秒 | 〜15MB | 初回のみ待機 |
| 5層 | 2〜5分 | 〜200MB | 十分なRAM（4GB+）推奨 |
| 6層 | 10〜30分 | 〜1GB以上 | 非推奨（実用上の限界） |
| 7層以上 | 数時間〜 | 数GB | 実質使用不可 |

> **メモ**: パレットは初回生成後にブラウザのIndexedDBにキャッシュされます。
> 2回目以降は即座に起動します。キャッシュをリセットしたい場合は
> ブラウザの開発者ツール → Application → IndexedDB → `mc-glass-cache` を削除してください。

## アルゴリズム

- **DP法**: 各層のガラス色（16色 × alpha=0.5）を組み合わせて達成できる
  RGB値の全パターンをDPで列挙
- **最近傍探索**: ユークリッド距離の最小化で目標色に最も近いガラス組み合わせを選択
- **MiniLED最適化**: スパース光源配置で輝度ムラを低減

## 技術仕様

- ブラウザのみで動作（サーバー・Python不要）
- Web Worker で重処理をバックグラウンド実行
- 出力: Sponge Schematic (.schem) — WorldEdit/FAWE対応
- ガラス色: 16色（White, Orange, Magenta, Light Blue, Yellow, Lime, Pink, Gray,
  Light Gray, Cyan, Purple, Blue, Brown, Green, Red, Black）

## 詳細理論文書（正本）

アルゴリズムの詳細・RGB空間カバレッジ分析・miniLED数学的背景:
→ `~/Desktop/Antigravity/02_Docs/glass_gradient_theory.md`（Antigravityリポジトリ）
