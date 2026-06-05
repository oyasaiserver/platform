---
title: "ai-debate"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Antigravity/01_Projects/ai-debate/"
related_paths:
  - docs/01_Projects/automation/ai-debate/
project_kind: automation
runtime_kind: python-cli
minecraft_related: false
last_validated: "2026-06-05"
agent_task: null
---

# ai-debate

## 概要

Claude Code と Codex CLI（OpenAI）による構造化ディベートオーケストレーターCLI。各AIが相手の主張に対して複数ラウンド応答し合う。セッションはJSONファイルとして保存される。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `docs/01_Projects/automation/ai-debate/` |
| 実行入口 | `debate.py` |
| ローカル出力 | `sessions/` は未整理ログになりやすいため、公開可能な結果だけを要約して残す |
| Minecraft連携 | なし |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置き、このファイルには公開可能な判断だけを書く |

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
