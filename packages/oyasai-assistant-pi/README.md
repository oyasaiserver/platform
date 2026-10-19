# Assistant Pi prototype

This package supplies the optional brain for OyasaiAdminTools. The plugin owns
command authorization, shared permissions, confirmation and execution. The brain
does not open a listening socket.

```sh
npm ci --ignore-scripts
npm test
node copy-docs.mjs /path/to/platform /path/to/private-docs /private/new-docs-directory
OYASAI_ASSISTANT_API_KEY=... node dist/main.js /private/new-docs-directory deepseek/deepseek-v4.1-flash
```

Supply the credential through your secret loader; do not put its value in shell
history. The copy destination must be new, outside the public checkout (except
its ignored `build/` directory). Copied documents are runtime data, never jar
resources. Restart the child to refresh its document snapshot.

The plugin config selects `assistant.backend: pi` and `assistant.pi` fields
`node`, `script`, `docs`, `model`. Use absolute deployed paths. Default backend
remains `koog`. Node and this package are deployed separately in this prototype.

JSON lines protocol version 1:

| Direction | Message | | --- | --- | | Child → plugin | `ready`: protocol, tool
names | | Plugin → child | `request`: id, text, maxToolCalls, timeoutMs | |
Child → plugin | `tool`: id, callId, name, string args (context/command only) |
| Plugin → child | `tool_result`: id, callId, result | | Child → plugin |
`trace`: id, name, args, result | | Child → plugin | `answer`: id, answer; or
generic `error` |

Only one request runs at a time. Conversations are retained per operator UUID,
with idle and context limits; `reset` drops only that actor. A failed or
cancelled request destroys the child, and the next request starts another.
Standard output is reserved for protocol messages; stderr is discarded by the
plugin to avoid recording provider errors containing credentials.

Pi's explicit tool allowlist filters the tool registry. A resource loader with
no discovery and in-memory settings/auth/history prevents local extensions or
files from supplying tools or instructions. Tests also attempt reload and
activation of every built-in tool. This is capability restriction, not an OS
sandbox.

Source references for pinned Pi 0.73.1:

- [Full control SDK example](https://github.com/badlogic/pi-mono/blob/v0.73.1/packages/coding-agent/examples/sdk/12-full-control.ts)
- [SDK tool allowlist](https://github.com/badlogic/pi-mono/blob/v0.73.1/packages/coding-agent/src/core/sdk.ts)
- [Session registry filtering](https://github.com/badlogic/pi-mono/blob/v0.73.1/packages/coding-agent/src/core/agent-session.ts)

`test/live-smoke.mjs` is a manual, billable test using a fake plugin over stdio.
It is excluded from `npm test`; its preload enforces a network request budget.
The fake plugin always returns confirmation pending and never executes commands.

The pinned namespace is deprecated in favor of `@earendil-works/*`. Evaluate
that migration before production. The unused SDK archive extractor currently has
an unpatched npm advisory; package/extension discovery and downloads are
disabled.

## Container backend

Build on the Linux validation host with rootless Podman:

```sh
podman build -t localhost/oyasai-assistant-pi:prototype .
```

Select `assistant.backend: pi-container`, `assistant.pi-container.podman` and
`assistant.pi-container.image`; `pi.docs` and `pi.model` are shared with `pi`.
The plugin launches the fixed isolation flags in `AssistantPi.containerCommand`.
Only the docs directory is mounted, read-only. No API key is passed to Podman or
the container. The image contains a non-secret `stdio-no-auth` SDK marker
because Pi requires a nonempty auth value even for its local custom provider.
This marker cannot authenticate to any external service.

One container is warmed at enable time. Its 64MiB workspace tmpfs is cleared
before and after each request, including leftover shell children. Startup is
included in the request timeout; 90 seconds is recommended for the prototype.
The container stays warm until failure or plugin shutdown. Cancellation and
shutdown force-remove the specifically named container, including any forked
shell children.

The container sends `model` messages with id/callId and text-only OpenAI
messages/tools. The host fixes endpoint/model/output budget and adds
credentials; `model_result` returns non-streamed JSON. `usage` is informational;
it never grants permission. Minecraft commands only use the existing two host
tools. The whole container and every stdout message are untrusted.

Manual checks, excluded from `npm test`:

- Run `test/security-container.mjs` through stdin with the same confinement
  flags and `--entrypoint=node ... --input-type=module` to assert isolation from
  inside.
- `test/compare-container.mjs <absolute-docs>` compares four questions per
  backend with two tool calls per question. Create a new mode-600 file
  containing `0`, set `OYASAI_COMPARISON_BUDGET` to its path, and load the API
  key on the host only. The shared file caps actual OpenRouter HTTP sends at 20;
  do not run comparisons concurrently. It uses a fake plugin that always returns
  confirmation pending.

Rollback selects `backend: pi` or `koog` and restarts the plugin/server. Shared
command permissions and document mounts retain their existing controls. Before
production, evaluate SDK dependency advisories, image update/scan procedures,
concurrent workload limits, and answer quality with the normal tool budget.

## Session and record protocol

`request` also includes `actor` (operator UUID), `idleMinutes`, `maxMessages`,
and `maxChars`. `reset` includes id/actor. `summary` includes
id/actor/text/timeoutMs and performs exactly one tool-less provider request.
Summary input is typed host audit facts, never raw chat, requests, or command
output. The host appends the summary and independent facts to daily Markdown;
`search_memory(query, days)` is a bounded host tool shared across operators.
Koog has neither session retention nor these durable records. Container restart
discards all short sessions.

At the message/character bound, discard that actor's old session rather than
spending another API call on compaction. At most 32 sessions are retained. The
observation policy is reinforced at every provider boundary, including
followups.
