#!/usr/bin/env bash

set -euo pipefail

signkey=$(mktemp)

trap 'rm -f $signkey' EXIT

echo "$NIX_CACHE_SIGNING_KEY" >"$signkey"

nix store sign --key-file "$signkey" --all

nix path-info --all |
  grep -v -E '\.(drv|check|drv\.chroot|lock)$' |
  xargs -n 50 -P 8 sudo -i nix copy --to "$NIX_CACHE_SUBSTITUTER"
