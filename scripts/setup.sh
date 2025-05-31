#!/bin/sh
set -eu

if [ -z "${SHELL:-}" ]; then
  echo "❌ \$SHELL not set. Run this script from a shell (bash or zsh)."
  exit 1
fi

SHELL_NAME="$(basename "$SHELL")"

detect_shell_rc() {
  case "$SHELL_NAME" in
    zsh) echo "$HOME/.zshrc" ;;
    bash)
      if [ -f "$HOME/.bash_profile" ]; then echo "$HOME/.bash_profile"
      else echo "$HOME/.bashrc"; fi
      ;;
    *) echo "Unsupported shell: $SHELL_NAME" >&2; exit 1 ;;
  esac
}

SHELL_RC="$(detect_shell_rc)"

# Install Homebrew if missing
if ! command -v brew >/dev/null 2>&1; then
  echo "🛠 Installing Homebrew..."
  NONINTERACTIVE=1 /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Load brew shellenv
BREW_PATH=""
if [ -x /opt/homebrew/bin/brew ]; then
  BREW_PATH="/opt/homebrew/bin/brew"
elif [ -x /home/linuxbrew/.linuxbrew/bin/brew ]; then
  BREW_PATH="/home/linuxbrew/.linuxbrew/bin/brew"
else
  echo "❌ Brew installation not found after install." >&2
  exit 1
fi

eval "$("$BREW_PATH" shellenv)"

# Install asdf if missing
if ! command -v asdf >/dev/null 2>&1; then
  echo "🛠 Installing asdf..."
  brew install asdf
fi

ASDF_PREFIX="$(brew --prefix asdf)"
ASDF_INIT_CMD=". \"$ASDF_PREFIX/libexec/asdf.sh\""
ASDF_SHIMS_PATH='${ASDF_DATA_DIR:-$HOME/.asdf}/shims'

# Append to shell rc
grep -F "$ASDF_INIT_CMD" "$SHELL_RC" >/dev/null 2>&1 || echo "$ASDF_INIT_CMD" >> "$SHELL_RC"
echo "$PATH" | grep -F "$ASDF_SHIMS_PATH" >/dev/null 2>&1 || echo "export PATH=\"$ASDF_SHIMS_PATH:\$PATH\"" >> "$SHELL_RC"

# Source and prep environment
. "$ASDF_PREFIX/libexec/asdf.sh"
PATH="$(eval echo "$ASDF_SHIMS_PATH"):$PATH"
export PATH

# Install nodejs plugin
if ! asdf plugin list | grep '^nodejs$' >/dev/null 2>&1; then
  asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
  if ! command -v gpg >/dev/null 2>&1; then
    brew install gnupg
  fi
  sh "$HOME/.asdf/plugins/nodejs/bin/import-release-team-keyring"
fi

# Install java plugin
if ! asdf plugin list | grep '^java$' >/dev/null 2>&1; then
  asdf plugin add java https://github.com/halcyon/asdf-java.git
fi

asdf install
asdf reshim
