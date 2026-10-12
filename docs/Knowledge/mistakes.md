---
date: 2026-07-02
record_type: reference
---

# 過去の失敗と次回の行動

AI がユーザーに訂正されたこと・失敗したことを、次回の行動ルールとして残す。CI 失敗の対応、PR の範囲、本番反映の前に読む。
新しい項目は下の形式で追記する。同じ失敗の項目があれば更新する。

```markdown
## YYYY-MM-DD: 短い題

**NG Action**: やった、またはやりかけたこと。
**Correct Action**: 次回からやること。
**Trigger**: このルールが当てはまる場面。
**Scope**: 影響するリポジトリの範囲・作業。
```

## 2026-07-02: Do Not Fix Unrequested CI Memory Failures

**NG Action**: During PR verification, changing workflow or Gradle memory
settings for an unrelated `non-nix-development`, Kotlin daemon, Gradle heap, or
runner resource failure without explicit user approval.

**Correct Action**: Report the failure, affected check, and likely cause. Do not
edit `.github/workflows/`, Gradle memory settings, heap settings, or parallelism
unless the user explicitly asks for that fix. If such a change is made
accidentally, undo it before any push.

**Trigger**: GitHub CI or local validation fails because of OOM, Kotlin daemon
memory, Gradle heap, or runner capacity while the requested task is about a
different code or docs change.

**Scope**: PR workflow, CI triage, `.github/workflows/`, Gradle build settings.

## 2026-07-02: Keep Experimental Plugin Replacements Local Until Approved

**NG Action**: Treating a locally built replacement for an existing production
dependency as ready for GitHub push, PR publication, or production deployment
before local testing and explicit promotion approval are complete.

**Correct Action**: Keep the implementation local until promotion is approved.
Report build artifacts, deployment paths, backups, rollback steps, and remaining
verification without pushing, opening a PR, or deploying to production.

**Trigger**: Work moves from local testing of an experimental replacement or
integration toward GitHub publication or production deployment.

**Scope**: Experimental plugin replacements, dependency migrations, local server
testing, production deployment.
