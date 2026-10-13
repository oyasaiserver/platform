#!/usr/bin/env bash
set -eu
mkdir -p "$OYASAI_WEB_DATA"
if [[ "${1:-}" != locked ]]; then
  exec flock --nonblock --no-fork "$OYASAI_WEB_DATA/update.lock" bash "$OYASAI_WEB_TOOLS/scripts/serve.sh" locked
fi

# shellcheck disable=SC2329 # Called by the EXIT trap.
cleanup() {
  trap - EXIT INT TERM
  kill -TERM -- "-$updater" "$caddy_pid" 2>/dev/null || true
  wait "$updater" "$caddy_pid" 2>/dev/null || true
}
setsid bash "$OYASAI_WEB_TOOLS/scripts/loop.sh" &
updater=$!
caddy run --config "$OYASAI_WEB_TOOLS/Caddyfile" --adapter caddyfile &
caddy_pid=$!
trap cleanup EXIT
trap 'exit 0' INT TERM
wait -n "$updater" "$caddy_pid"
exit 1
