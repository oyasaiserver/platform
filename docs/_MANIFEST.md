# docs/_MANIFEST.md — Docs Home

This file is the constitution and the map for `docs/`. Every AI agent starts
here, then follows only the links its task needs.

## Protected File

AI agents must not edit this file unless the user explicitly asks to edit
`docs/_MANIFEST.md`.

## Public Boundary

`docs/` is part of the public repository.

Do not place personal information, secrets, tokens, private server details,
private notes, raw personal logs, or large temporary outputs in `docs/`.

Use Git-ignored `docs/local/` (create it if missing) or the root `local/`
and `archive/` for personal drafts, local-only backups, and temporary private
work.

## Repository

`platform` is the OyasaiServer monorepo: Minecraft server plugins,
infrastructure packages, Nix build definitions, local development server
assets, and this public documentation.

| Area | Primary paths | Notes |
|---|---|---|
| Minecraft plugins | `plugins/` | Kotlin / Java / Paper / Purpur plugins |
| Build system | `build.gradle.kts`, `gradle/`, `gradle.lock` | Gradle-based build |
| Reproducible env | `flake.nix`, `nix/` | Use `/nix/var/nix/profiles/default/bin/nix` if `nix` is not on PATH |
| Packages / infra | `packages/` | Nix-buildable packages and generated providers |
| Local runtime | `local/` | Local-only runtime state is not the docs SOT |
| Documentation | `docs/` | This tree |

## Docs Structure

```text
docs/
  _MANIFEST.md     This file. Constitution and map. Protected.
  README.md        Human-readable overview.
  AGENTS.md / CLAUDE.md / GEMINI.md   Thin entrypoints that point here.
  wiki/            Player-facing wiki. Published to oyasai.io.
  dev/             AI-driven development area.
    WORKFLOWS.md   Shared agent procedures.
    check_links.py Broken-link and orphan checker.
    projects/      One PROJECT.md per plugin / tool / automation / web project.
    guides/        Cross-cutting ops runbooks and tool guides.
    archive/       Public historical docs.
  local/           Git-ignored local-only notes.
```

## Read Routing

Read only what the task needs. Before planning or acting, read
[the agentic learning loop](dev/guides/ops/agentic-learning-loop/README.md);
it defines how corrections and reusable rules are kept for future agents.

| Goal | Read next |
|---|---|
| Understand docs at a human level | [README.md](README.md) |
| Follow a PR, docs, plugin, or local-server workflow | [dev/WORKFLOWS.md](dev/WORKFLOWS.md) |
| Edit a plugin or tool | [dev/projects/INDEX.md](dev/projects/INDEX.md) → its `PROJECT.md` → `plugins/<Plugin>/` |
| Add or update a project page | [dev/projects/_MANIFEST.md](dev/projects/_MANIFEST.md) |
| Update ops runbooks or tool guides | [dev/guides/_MANIFEST.md](dev/guides/_MANIFEST.md) |
| Deploy or run the local server | [deploy](dev/guides/ops/deploy.md), [local server](dev/guides/ops/local-server.md) |
| Write or edit player-facing wiki pages | [wiki/_MANIFEST.md](wiki/_MANIFEST.md) |
| Route agent memory or corrections | [memory routing](dev/guides/ops/agentic-learning-loop/memory-routing.md) |
| Check old public docs | [dev/archive/_MANIFEST.md](dev/archive/_MANIFEST.md) |

## Source of Truth

Implementation truth lives outside `docs/` unless a project explicitly says
otherwise.

- Repository overview and contribution basics: repository-root `README.md`
- Plugin implementation: `plugins/*/`
- Packages and infrastructure: `packages/*/`, `nix/`, `flake.nix`, `build.gradle.kts`
- Project context and navigation: `docs/dev/projects/<category>/<project>/PROJECT.md`
- Player-facing explanations: `docs/wiki/`

## Links

Pages are connected with standard relative Markdown links, such as
`[SocialLikes3](../sociallikes3/PROJECT.md)`. Do not use `[[wikilinks]]`; they
do not render on GitHub or in the published site.

- Every tracked Markdown file must be linked from at least one other page.
- When a page mentions a related project, guide, or wiki page, link it.
- Run `python3 docs/dev/check_links.py` after moving or adding pages. It
  reports broken relative links and orphan pages.

Agent Footprint Logs (below) are Git-ignored and exempt.

## Editing Rules

- This file is protected. Edit it only when the user explicitly asks.
- Keep common procedures in `dev/WORKFLOWS.md`.
- Keep project-specific context in `PROJECT.md`.
- Keep directory-specific rules in child `_MANIFEST.md` files.
- Keep `README.md` human-readable and visual.
- Do not duplicate shared rules in `AGENTS.md`, `CLAUDE.md`, or `GEMINI.md`.

## Build And Validation Basics

- Format: `/nix/var/nix/profiles/default/bin/nix fmt`
- Build through Nix when possible: `/nix/var/nix/profiles/default/bin/nix develop --command gradle <task>`
- Do not use `gradle fmt`; CI uses treefmt through Nix.
- `detekt 1.23.6 + Java 25` can produce `IllegalArgumentException: 25`; treat it as a known environment issue unless evidence says otherwise.

## Agent Footprint Logging

AI エージェントが `docs/` 配下のファイルを編集すると、そのディレクトリ構造をそのまま複製した足跡ログが自動生成される。この仕組みはこのファイル1箇所にのみ定義され、`docs/` 配下のあらゆるディレクトリに対して自動的に適用される。子 `_MANIFEST.md` にこのルールを複製する必要はない。

- ログの保存先: `docs/<path>/` を編集 → `local/agent-footprints/<path>/FOOTPRINT.md`（リポジトリルート直下、Git管理外）。プロジェクトや機能ごとにログが分かれる。
- 記録の実行主体: `PostToolUse` / `Stop` フック。スクリプト本体は `docs/` 側で公開・追跡されている（[agent-footprint-logging](dev/guides/ops/agent-footprint-logging/README.md)）。フックの登録先である `.claude/settings.json` はこのリポジトリでは開発者ローカル設定として非追跡のため、各開発者が同READMEの手順で最初に1回だけ手元にセットアップする必要がある。未セットアップの環境では自動記録は動作しない。
- セッション要約: そのセッションで `docs/` を編集していた場合、セッション終了時に一度だけ、該当する各 `FOOTPRINT.md` の末尾に `## セッション要約` として「何を・なぜ変更したか」を1〜3行で追記するよう Stop フックが要求する。要求されたら、その場で追記してから終了する。
- このログは公開リポジトリの一部ではないため、Public Boundary および Links の対象外。
