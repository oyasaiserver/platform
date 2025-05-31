#!/bin/bash

brew install asdf

# shellcheck disable=SC2016
LINE='export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"'

# Determine which shell rc file to use
case "$(basename "$SHELL")" in
  zsh) rcfile="$HOME/.zshrc" ;;
  bash) rcfile="$HOME/.bashrc" ;;
  *) echo "Unsupported shell: $SHELL" >&2; exit 1 ;;
esac

# Add the line only if it's not already there
if ! grep -Fxq "$LINE" "$rcfile"; then
  printf '\n%s\n' "$LINE" >> "$rcfile"
fi

# shellcheck disable=SC1090
source "$rcfile"

# install nodejs plugin
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

# install java plugin
asdf plugin add java https://github.com/halcyon/asdf-java.git

asdf install
asdf reshim
