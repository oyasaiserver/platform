#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${SHELL:-}" ]]; then
  echo "❌ \$SHELL not set. Run this script from a shell (bash or zsh)."
  exit 1
fi

SHELL_NAME="$(basename "$SHELL")"

detect_shell_rc() {
  case "$SHELL_NAME" in
    zsh) echo "$HOME/.zshrc" ;;
    bash)
      if [[ -f "$HOME/.bash_profile" ]]; then echo "$HOME/.bash_profile"
      else echo "$HOME/.bashrc"; fi
      ;;
    *) echo "Unsupported shell: $SHELL_NAME" >&2; exit 1 ;;
  esac
}

SHELL_RC="$(detect_shell_rc)"

# Install Homebrew if missing
if ! command -v brew &>/dev/null; then
  echo "🛠 Installing Homebrew..."
  NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Load brew shellenv
eval "$(/opt/homebrew/bin/brew shellenv 2>/dev/null || /home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# Install asdf if missing
if ! command -v asdf &>/dev/null; then
  echo "🛠 Installing asdf..."
  brew install asdf
fi

ASDF_INIT_CMD='. "$(brew --prefix asdf)/libexec/asdf.sh"'
ASDF_SHIMS_PATH='${ASDF_DATA_DIR:-$HOME/.asdf}/shims'

# Append to shell rc
grep -Fq "$ASDF_INIT_CMD" "$SHELL_RC" || echo "$ASDF_INIT_CMD" >> "$SHELL_RC"
grep -Fq "$ASDF_SHIMS_PATH" "$SHELL_RC" || echo "export PATH=\"$ASDF_SHIMS_PATH:\$PATH\"" >> "$SHELL_RC"

# Source and prep environment
. "$(brew --prefix asdf)/libexec/asdf.sh"
export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"

# Plugins
if ! asdf plugin list | grep -q '^nodejs$'; then
  asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
  command -v gpg >/dev/null || brew install gnupg
  bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring
fi

if ! asdf plugin list | grep -q '^java$'; then
  asdf plugin add java https://github.com/halcyon/asdf-java.git
fi

asdf install
asdf reshim
