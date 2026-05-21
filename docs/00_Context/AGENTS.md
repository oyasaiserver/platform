# AGENTS.md — AIエージェント向け作業ガイド

> このファイルはClaude Code / Codex / Gemini などのAIエージェントが
> このリポジトリで作業する際の**ナビゲーション基盤**です。

## ルーティング基準

| タスク種別 | 推奨エージェント |
|---|---|
| コード生成・アルゴリズム移植・Kotlinリファクタ・テスト | **Codex** |
| 調査・ドキュメント・Dockerfile・デプロイ設定・API仕様 | **Gemini** |
| 統合・最終レビュー・git操作・ユーザー報告 | **Claude** |

## 自動委譲ルール

独立して検証可能なサブタスク（Type A）が複数ある場合は、
ユーザーに確認せず**最初のツール呼び出しと同時に**Codex/Geminiへ委譲を開始する。

```bash
# Codex（バックグラウンド）
printf '%s' "$PROMPT" | /opt/homebrew/bin/codex exec \
  --model gpt-5.5 -c model_reasoning_effort='"high"' \
  --cd /Users/aa/platform --sandbox read-only --color never \
  --output-last-message /tmp/codex-out.txt - &

# Gemini（バックグラウンド）
printf '%s' "$PROMPT" | /opt/homebrew/bin/gemini \
  -p "" --output-format text --approval-mode plan > /tmp/gemini-out.txt &
```

## ドキュメント構造

```
docs/
  00_Context/       ← AIナビゲーション（本ファイル）・INDEX・コンテキスト
  01_Projects/      ← Kotlinプラグイン群の仕様・設計メモ
  02_Docs/tools/    ← 外部ツール群（glass-gradient等）の使用方法
  02_Docs/ops/      ← デプロイ・サーバー運用
  05_Archives/      ← 廃止・旧仕様
  99_Inbox/         ← 未分類・判定保留
```

## Frontmatterスキーマ（全docsファイルに付与）

```yaml
---
title: "..."
category: platform | tool | ops | meta
status: active | wip | deprecated
owner: marzipan99
source_of_truth: "相対パスまたはURL（別リポジトリの場合）"
related_paths:
  - plugins/OyasaiMenu/
last_validated: "YYYY-MM-DD"
agent_task: null  # エージェントへの作業指示があればここに記述
---
```

## ビルド・開発コマンド

```bash
# ビルド（nix環境）
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiMenu:build

# フォーマット（CIはtreefmtで検証）
/nix/var/nix/profiles/default/bin/nix fmt

# ビルド後のデプロイ
cp build/libs/Plugin.jar dev-server/plugins/
# → Minecraft上で PlugManX でリロード
```

## 現在の未解決タスク

<!-- エージェントはここに進行中タスクを追記してください -->

| 状態 | タスク | 担当 |
|---|---|---|
| - | - | - |

## 関連ドキュメント

- [全ドキュメントINDEX](INDEX.md)
- [プラットフォームルート llms.txt](../../llms.txt)
