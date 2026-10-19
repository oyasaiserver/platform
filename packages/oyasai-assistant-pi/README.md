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

Only one request runs at a time; conversations are not retained. A failed or
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
