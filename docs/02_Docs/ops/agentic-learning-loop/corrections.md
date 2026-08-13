---
title: "Agent Corrections"
category: ops
status: active
owner: platform-maintainers
source_of_truth: "docs/02_Docs/ops/agentic-learning-loop/corrections.md"
related_paths:
  - docs/02_Docs/ops/agentic-learning-loop/README.md
last_validated: "2026-07-02"
agent_task: "Read before acting on CI failures, PR scope, local-only experiments, or user corrections."
---

# Agent Corrections

Durable, public-safe behavior corrections for AI agents working in `platform`.

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
