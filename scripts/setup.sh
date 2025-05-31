#!/bin/bash

brew install asdf

# shellcheck disable=SC2016
LINE='export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"'

for rcfile in "$HOME/.zshrc" "$HOME/.bashrc"; do
  # Add the line only if it's not already present
  if ! grep -Fxq "$LINE" "$rcfile"; then
    printf '\n%s\n' "$LINE" >> "$rcfile"
  fi
done

# install nodejs plugin
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

# install java plugin
asdf plugin add java https://github.com/halcyon/asdf-java.git

asdf install
asdf reshim
