---
title: "sociallikes-analytics"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Antigravity/01_Projects/sociallikes-analytics/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# sociallikes-analytics

## 概要

おやさいサーバーの SocialLikes3 プラグインのデータを統計処理・CSV生成・可視化するPython製ツール群。単一CSVから統計と図表をまとめて生成する。

## 入力フォーマット

CSVカラム: `player / build_id / likes / timestamp / x / z`

## スクリプト構成

| スクリプト | 役割 |
|-----------|------|
| `batch_extract.py` | 複数CSVの一括抽出・集計 |
| `compare.py` | 期間・プレイヤー間の比較分析 |
| `generate_csv.py` | 生データからCSV生成 |

## 使用方法

```bash
python generate_csv.py <input>      # CSV生成
python compare.py <csv1> <csv2>     # 比較
python batch_extract.py <dir>       # 一括処理
```

## 技術仕様

| 項目 | 内容 |
|------|------|
| 言語 | Python 3.x |
| 出力 | CSV, PNG グラフ（matplotlib） |
| 依存 | matplotlib, pandas（想定） |
