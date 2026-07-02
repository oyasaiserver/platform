---
title: "Agentic Learning Loop"
category: ops
status: active
owner: platform-maintainers
source_of_truth: "docs/02_Docs/ops/agentic-learning-loop/README.md"
related_paths:
  - docs/00_Context/WORKFLOWS.md
  - docs/02_Docs/ops/agentic-learning-loop/corrections.md
  - docs/02_Docs/ops/agentic-learning-loop/memory-routing.md
last_validated: "2026-07-02"
agent_task: "Read when a user correction should become a durable platform-agent rule."
---

# Agentic Learning Loop

This is the platform-local self-correction loop for AI agents.

It is inspired by generic personal knowledge-vault practice, but it must not
depend on any private workspace, personal note system, raw notes, or local
context. Everything tracked here must be safe for the public `platform`
repository.

## Boundary

- Do not copy personal context, private notes, raw chats, secrets, tokens, or
  local-only server details into `docs/`.
- Use Git-ignored `docs/local/` for raw incident notes, private scratch, or
  unresolved local-only context.
- Use this directory only for concise, public-safe rules that future agents can
  apply inside `platform`.
- Write only repository-scoped knowledge: monorepo navigation, build and test
  procedures, public operational rules, and contributor-facing behavior.

## Loop

1. Notice a correction.
2. Decide whether it is durable.
3. Convert it into a concrete behavior rule.
4. Add or update the rule in
   [corrections.md](corrections.md).
5. Link the rule to the workflow or project entrypoint where future agents will
   naturally read it.
6. Report the read/write action to the user.

## Memory Routing

Use [memory-routing.md](memory-routing.md) before creating a new memory or
knowledge note. It defines where Cogito-style `Knowledge`, `Decisions`,
`Projects`, and `Preferences` content belongs in `platform`, and which content
must stay in Git-ignored `docs/local/`.

## Correction Criteria

Record a correction only when all are true:

- The user explicitly corrected the agent.
- The error can happen again.
- The fix can be written as a concrete "do / do not" behavior.
- The rule is public-safe and belongs to `platform`, not to a personal vault.
- The rule is useful to future contributors or agents working in this monorepo.

Do not record:

- one-off misunderstandings with no reusable rule;
- private personal context;
- raw logs or transcripts;
- references that require access to a personal knowledge system;
- implementation details that should live in source files instead.

## Rule Format

Use this format in [corrections.md](corrections.md):

```markdown
## YYYY-MM-DD: Short Title

**NG Action**: What the agent did or nearly did.
**Correct Action**: What future agents must do instead.
**Trigger**: The situation where this rule applies.
**Scope**: Which repository area or workflow this affects.
```

Keep each entry short. The goal is fast future recall, not narrative history.

## Interaction With Footprint Logs

Agent footprint logs answer "what changed under `docs/`?"

This learning loop answers "what behavior must change next time?"

Use both when useful:

- footprint logs stay local under `local/agent-footprints/`;
- durable public rules stay in
  [corrections.md](corrections.md).
