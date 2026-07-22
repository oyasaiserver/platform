---
title: "discord-codex-bridge"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Nexus/01_Projects/discord-codex-bridge/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# discord-codex-bridge

## 概要

DiscordのSlash CommandからMac上のCodex CLIを実行するNode.jsブリッジ。CODEXワークスペースのディレクトリで `codex exec` を実行し、結果をDiscordに返す。

## コマンド一覧

| コマンド | 説明 |
|---------|------|
| `/codex <prompt>` | Codexにプロンプトを送信して実行 |
| `/codex-status` | 現在実行中のCodexジョブの状態確認 |
| `/codex-cancel` | 実行中のCodexジョブをキャンセル |

## アーキテクチャ

- Node.jsで Discord Interaction Webhook を受信
- `codex exec` をサブプロセスとして起動（sandbox: read-only）
- 実行結果をDiscordチャンネルに返信

## 技術仕様

| 項目 | 内容 |
|------|------|
| 言語 | Node.js |
| デフォルトサンドボックス | read-only |
| 依存 | Codex CLI, Discord Bot Token |
| 実行環境 | Mac（ローカルで常駐） |
