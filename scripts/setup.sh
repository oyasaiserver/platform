#!/bin/bash

# install nodejs plugin
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

# install java plugin
asdf plugin add java https://github.com/halcyon/asdf-java.git

asdf install
asdf reshim
