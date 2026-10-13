#!/usr/bin/env bash
set -u
while true; do
  node "$OYASAI_WEB_TOOLS/scripts/update.mjs" || true
  sleep 300
done
