---
title: "auto-transcription"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Antigravity/01_Projects/auto-transcription/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# auto-transcription

## 概要

MLX Whisper を使った会議音声の自動文字起こしパイプライン。Apple Silicon Mac 向けに最適化されており、複数トラックの話者分離と発言順序の生成に対応。

## スクリプト構成

| スクリプト | 役割 |
|-----------|------|
| `transcribe_combined.py` | ミックス済み音声の文字起こし |
| `transcribe_tracks.py` | トラック別（話者別）文字起こし |
| `generate_speaking_order.py` | 発言順序レポート生成 |
| `build_activity_map.py` | 発話アクティビティマップ構築 |

## 使用方法

```bash
python transcribe_combined.py <audio.mp4>
python transcribe_tracks.py <track1.wav> <track2.wav>
python generate_speaking_order.py <transcripts_dir>
```

## 技術仕様

| 項目 | 内容 |
|------|------|
| 言語 | Python |
| ASRエンジン | MLX Whisper（Apple Silicon最適化） |
| 動作環境 | macOS + Apple Silicon（M1/M2/M3） |
| 出力 | テキスト / JSON タイムスタンプ付き |
