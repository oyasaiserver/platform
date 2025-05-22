#!/usr/bin/env bash

set -euo pipefail

NIX_CONF="/etc/nix/nix.conf"

# Create the file if it doesn't exist
if [ ! -f "$NIX_CONF" ]; then
  sudo mkdir -p "$(dirname "$NIX_CONF")"
  echo "" | sudo tee "$NIX_CONF" > /dev/null
fi

enable_setting() {
  KEY="$1"
  VALUE="$2"
  if grep -q "^$KEY" "$NIX_CONF"; then
    sudo sed -i.bak "s|^$KEY.*|$KEY = $VALUE|" "$NIX_CONF"
  else
    echo "$KEY = $VALUE" | sudo tee -a "$NIX_CONF" > /dev/null
  fi
}

enable_setting "experimental-features" "nix-command flakes"