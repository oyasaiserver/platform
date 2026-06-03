#!/usr/bin/env bash

set -euo pipefail

images="$(mktemp)"

# shellcheck disable=SC2064
trap "rm -f ${images@Q}" EXIT

nix build --no-link --print-out-paths .#all-docker-derivations |
  xargs -r cat |
  while read -r name drv; do
    if ! skopeo inspect --no-tags "docker://$name" &>/dev/null; then
      printf "%s\t%s^out\n" "$name" "$drv"
    fi
  done >"$images"

cat "$images"

<"$images" cut -f 2 | xargs -r nix build --no-link --print-out-paths --keep-going
while read -r name drv; do
  out="$(nix build --no-link --print-out-paths "$drv")"
  skopeo --insecure-policy copy "docker-archive:$out" "docker://$name"
done <"$images"
