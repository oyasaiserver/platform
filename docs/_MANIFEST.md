# docs/_MANIFEST.md — Docs Constitution

This file is the constitution for `docs/`.

## Protected File

AI agents must not edit this file unless the user explicitly asks to edit `docs/_MANIFEST.md`.

## Public Boundary

`docs/` is part of the public repository.

Do not place personal information, secrets, tokens, private server details, private notes, raw personal logs, or large temporary outputs in `docs/`.

Use Git-ignored `archive/` or `local/` for personal drafts, local-only backups, and temporary private work.

## First Read

After reading this file, read:

`docs/00_Context/CONTEXT.md`

`CONTEXT.md` owns the repository context, docs structure, and purpose-based routing.

## Source of Truth

Implementation truth lives outside `docs/` unless a project explicitly says otherwise.

- Plugin implementation: `plugins/*/`
- Packages and infrastructure: `packages/*/`, `nix/`, `flake.nix`, `build.gradle.kts`
- Project context and navigation: `docs/01_Projects/<category>/<project>/PROJECT.md`

## Markdown Reachability

Do not create orphan Markdown files.

Every Markdown file must be reachable from one of:

- this manifest
- `docs/README.md`
- `docs/00_Context/CONTEXT.md`
- a child `_MANIFEST.md`
- a `PROJECT.md`
- an `INDEX.md`

This rule does not apply to Agent Footprint Logs (below); those are Git-ignored and never part of the public `docs/` tree.

## Agent Footprint Logging

AI エージェントが `docs/` 配下のファイルを編集すると、そのディレクトリ構造をそのまま複製した足跡ログが自動生成される。この仕組みはこのファイル1箇所にのみ定義され、`docs/` 配下のあらゆるディレクトリに対して自動的に適用される。子 `_MANIFEST.md` にこのルールを複製する必要はない。

- ログの保存先: `docs/<path>/` を編集 → `local/agent-footprints/<path>/FOOTPRINT.md`（リポジトリルート直下、Git管理外）。プロジェクトや機能ごとにログが分かれる。
- 記録の実行主体: `PostToolUse` / `Stop` フック。スクリプト本体は `docs/` 側で公開・追跡されている（[docs/02_Docs/ops/agent-footprint-logging/README.md](02_Docs/ops/agent-footprint-logging/README.md)）。フックの登録先である `.claude/settings.json` はこのリポジトリでは開発者ローカル設定として非追跡のため、各開発者が同READMEの手順で最初に1回だけ手元にセットアップする必要がある。未セットアップの環境では自動記録は動作しない。
- セッション要約: そのセッションで `docs/` を編集していた場合、セッション終了時に一度だけ、該当する各 `FOOTPRINT.md` の末尾に `## セッション要約` として「何を・なぜ変更したか」を1〜3行で追記するよう Stop フックが要求する。要求されたら、その場で追記してから終了する。
- このログは公開リポジトリの一部ではないため、Public Boundary および Markdown Reachability の対象外。
