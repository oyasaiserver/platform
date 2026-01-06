#!/usr/bin/env bash

set -euo pipefail

images="$(mktemp)"

trap 'rm -f $images' EXIT

nix build --no-link --print-out-paths .#all-docker-images.derivations | xargs -r cat | while read -r name drv; do
  if ! docker manifest inspect "$name" &>/dev/null; then
    printf "%s\t%s^out\n" "$name" "$drv"
  fi
done >"$images"
<"$images" cut -f 2 | xargs -r nix build --no-link --print-out-paths | xargs -r -n 1 docker load -i
<"$images" cut -f 1 | xargs -r -n 1 docker push
