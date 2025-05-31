#!/bin/bash

brew install asdf

# shellcheck disable=SC2016
line='export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"'

rcfiles=("$HOME/.zshrc" "$HOME/.bashrc")

for rcfile in "${rcfiles[@]}"; do
  # Add the line only if it's not already there
  if ! grep -Fxq "$line" "$rcfile"; then
    printf '\n%s\n' "$line" >> "$rcfile"
  fi
done

# install nodejs plugin
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

# install java plugin
asdf plugin add java https://github.com/halcyon/asdf-java.git

asdf install
asdf reshim
