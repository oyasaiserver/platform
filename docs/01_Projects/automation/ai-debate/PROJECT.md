---
title: "ai-debate"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Antigravity/01_Projects/ai-debate/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# ai-debate

## 概要

Claude Code と Codex CLI（OpenAI）による構造化ディベートオーケストレーターCLI。各AIが相手の主張に対して複数ラウンド応答し合う。セッションはJSONファイルとして保存される。

## 使用方法

```bash
python debate.py "Topic" --rounds 3 --first codex
python debate.py "AIの倫理について" --rounds 5 --first claude
```

| オプション | 説明 |
|-----------|------|
| `--rounds` | ディベートのラウンド数 |
| `--first` | 先攻AI（`claude` または `codex`） |

## アーキテクチャ

- `debate.py` — メインオーケストレーター
- 各ラウンド: Claude → Codex → Claude … の順で応答
- セッション出力: `sessions/<timestamp>.json`

## 技術仕様

| 項目 | 内容 |
|------|------|
| 言語 | Python |
| 依存 | Claude CLI + Codex CLI（pipパッケージ不要） |
| 出力 | JSON セッションファイル |
