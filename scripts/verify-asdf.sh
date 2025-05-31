#!/bin/sh
set -eu

# Source asdf
ASDF_PREFIX="$(brew --prefix asdf)"
. "$ASDF_PREFIX/libexec/asdf.sh"

# Update PATH
PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"
export PATH

# Get expected versions
expected_node_version=$(grep '^nodejs ' .tool-versions | awk '{print $2}')
expected_java_version=$(grep '^java ' .tool-versions | awk '{print $2}')

echo "Checking Node.js version..."
actual_node_version=$(node --version | sed 's/^v//')

if [ "$actual_node_version" != "$expected_node_version" ]; then
  echo "❌ Node.js version mismatch: expected $expected_node_version, got $actual_node_version"
  exit 1
fi
echo "✅ Node.js version $actual_node_version matches"

echo "Checking Java version..."
actual_java_version=$(java -version 2>&1 | sed -n '1s/.*"\([0-9._]*\)".*/\1/p')

if [ "$actual_java_version" != "$expected_java_version" ]; then
  echo "❌ Java version mismatch: expected $expected_java_version, got $actual_java_version"
  exit 1
fi
echo "✅ Java version $actual_java_version matches"
