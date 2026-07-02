---
title: "AIエージェント足跡ログの自動記録"
category: ops
status: active
owner: platform-maintainers
source_of_truth: "docs/02_Docs/ops/agent-footprint-logging/README.md"
related_paths:
  - docs/_MANIFEST.md
last_validated: "2026-07-01"
agent_task: null
---

# AIエージェント足跡ログの自動記録

AIエージェント（Claude Code等）が `docs/` 配下を編集した際に、何を・いつ・なぜ変更したかを自動でローカルログに残す仕組み。ルールの定義は `docs/_MANIFEST.md` の「Agent Footprint Logging」を参照。

## 仕組み

- `docs/<path>` を編集すると、同じディレクトリ構造を複製した `local/agent-footprints/<path>/FOOTPRINT.md` に自動で1行ログが追記される（日時・ツール名・対象ファイル）。
- そのセッションで `docs/` を編集していた場合、セッション終了時に一度だけ、対応する各 `FOOTPRINT.md` に `## セッション要約`（何を・なぜ）を追記するようエージェントに要求する。
- ログは `local/agent-footprints/` 配下（リポジトリルート直下の Git管理外 `local/`）に置かれ、公開リポジトリの一部にはならない。

## なぜ設定ファイル(`.claude/settings.json`)がここに無いのか

Claude Code のフック登録は `.claude/settings.json` に存在しないと機能しないが、このリポジトリでは `.claude/` 配下（`settings.local.json`, `agents/`, `skills/`, `commands/` 等）が開発者ローカル設定として扱われ、意図的に Git 管理外になっている。

そのため、この機能のスクリプト本体 (`footprint-log.sh`, `footprint-stop.sh`) は公開・追跡対象である `docs/` 側に置き、フックの登録だけを各自の `.claude/settings.json` に手動でセットアップする方式にしている。

## セットアップ（各開発者が最初に1回だけ）

1. `.claude/settings.json` がまだ無ければ、[`settings.json.example`](settings.json.example) をコピーする。

   ```bash
   cp docs/02_Docs/ops/agent-footprint-logging/settings.json.example .claude/settings.json
   ```

2. すでに `.claude/settings.json` を使っている場合は、`settings.json.example` の `hooks.PostToolUse` / `hooks.Stop` の中身を、既存の `hooks` オブジェクトにマージする。

3. スクリプトに実行権限を付与する。

   ```bash
   chmod +x docs/02_Docs/ops/agent-footprint-logging/footprint-log.sh
   chmod +x docs/02_Docs/ops/agent-footprint-logging/footprint-stop.sh
   ```

セットアップが済んでいない環境では、この自動ログは動作しない（`docs/` の編集自体には影響しない）。
