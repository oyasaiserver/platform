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

**鮮度管理**: `last_validated`から14日経過で要レビュー、21日経過で古い情報とみなす。エージェントは参照時に日数を確認し、閾値超過なら鵜呑みにせず実態（コード・ファイル配置）と照合すること（2026-08-13、`docs/00_Context/AGENTS.md`自体が3ヶ月近く未更新のまま`dev-server/`という廃止パスを参照し続けていた反省から導入）。

## ビルド・開発コマンド

```bash
# ビルド（nix環境）
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiMenu:build

# フォーマット（CIはtreefmtで検証）
/nix/var/nix/profiles/default/bin/nix fmt
```

## ローカル検証・デプロイ（2026-08-13改訂）

~~ビルド後、`dev-server/plugins/`にコピーしPlugManXでリロード~~ は廃止済み。`dev-server/`は2026-05-16に`archive/dev-server-20260516-162505/`へ移送されており現存しない。

正しいフローは `.claude/skills/oyasai-dev-flow/SKILL.md`（作業開始前のゲート手順・ブランチ判断）と `.claude/skills/oyasai-local-server/SKILL.md`（ローカル検証環境: `local/paperclip-tmp/`）を参照すること。

**リロード方式の判断基準**:
- 設定ファイルの再読込のみ → PlugManXの`reload`で可
- JARの差し替え、専用Executor/DB接続を含むコード変更 → **フル再起動を標準とする**（`open ~/Desktop/LocalServer.app`、ホットリロードは事故りやすいため使わない）

**作業開始前に必ず確認すること**（詳細は`oyasai-dev-flow`スキル参照）:
```bash
git branch --show-current
git status --short          # 未コミット・未追跡ファイルの有無
git worktree list           # 他ブランチでの並行作業有無
```
判断基準は「ブランチ名」ではなく「**作業ツリーに実際に何があるか**」。未コミットの実装が別ブランチ/worktreeに存在する場合があるため、新規ブランチを切る前に必ず確認する。

## 現在の未解決タスク

<!-- エージェントはここに進行中タスクを追記してください -->

| 状態 | タスク | 担当 |
|---|---|---|
| - | - | - |

## 関連ドキュメント

- [全ドキュメントINDEX](INDEX.md)
- [プラットフォームルート llms.txt](../../llms.txt)
