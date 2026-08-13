#!/usr/bin/env bash
set -euo pipefail

ROOT="/Users/aa/platform"
PLUGIN_DIR="$ROOT/plugins/SocialLikes3"
ARCHIVE_ROOT="$ROOT/archive/sldata-builds"
LATEST_SRC="$ARCHIVE_ROOT/latest-src"
SERVER_PROPERTIES="$ROOT/local/paperclip-tmp/server.properties"
BUILD_TASK=":plugins:SocialLikes3:build"
JAR="$PLUGIN_DIR/build/libs/SocialLikes3.jar"
DEPLOY_JAR="$ROOT/local/paperclip-tmp/plugins/SocialLikes3.jar"
NOTE="${1:-}"
PRE_ON_DEMAND_RESOURCE_PACK="resource-pack=http\\://127.0.0.1\\:18080/sociallikes-graph-pack.zip"
PRE_ON_DEMAND_RESOURCE_PACK_SHA1="resource-pack-sha1=bbedbec9d0793ecf5d52b0f6f0f464db752b5b96"

prepare_source_snapshot() {
  local dest="$1"
  rm -rf "$dest"
  mkdir -p "$dest"

  rsync -a --delete "$PLUGIN_DIR/src" "$dest/"
  cp "$PLUGIN_DIR/build.gradle.kts" "$dest/build.gradle.kts"

  if [[ -d "$PLUGIN_DIR/tools" ]]; then
    rsync -a --delete "$PLUGIN_DIR/tools" "$dest/"
  fi

  if [[ -d "$PLUGIN_DIR/resourcepack-poc" ]]; then
    rsync -a --delete --exclude '*.zip' "$PLUGIN_DIR/resourcepack-poc" "$dest/"
  fi
}

"$ROOT/gradlew" -p "$ROOT" "$BUILD_TASK"

if [[ ! -f "$JAR" ]]; then
  echo "Build succeeded but jar was not found: $JAR" >&2
  exit 1
fi

TS="$(date +%Y%m%d-%H%M%S)"
DEST="$ARCHIVE_ROOT/$TS"
CURRENT_SRC="$(mktemp -d)"
trap 'rm -rf "$CURRENT_SRC"' EXIT

mkdir -p "$DEST"
prepare_source_snapshot "$CURRENT_SRC"

JAR_SHA1="$(shasum -a 1 "$JAR" | awk '{print $1}')"

if [[ -d "$LATEST_SRC" ]] && [[ -n "$(find "$LATEST_SRC" -mindepth 1 -maxdepth 1 -print -quit)" ]]; then
  diff -ruN "$LATEST_SRC/" "$CURRENT_SRC/" >"$DEST/since-prev.patch" || true
else
  printf '初回ビルド\n' >"$DEST/since-prev.patch"
fi

git -C "$ROOT" diff HEAD -- plugins/SocialLikes3 >"$DEST/full.patch"
tar -czf "$DEST/src-snapshot.tar.gz" -C "$CURRENT_SRC" .
cp "$JAR" "$DEST/SocialLikes3.jar"

{
  echo "timestamp=$TS"
  echo "date=$(date)"
  echo "git_branch=$(git -C "$ROOT" branch --show-current)"
  echo "git_head=$(git -C "$ROOT" rev-parse HEAD)"
  echo "build_task=$BUILD_TASK"
  echo "jar_sha1=$JAR_SHA1"
  echo "note=$NOTE"
  echo
  echo "git_status_sociallikes3:"
  git -C "$ROOT" status --short -- plugins/SocialLikes3
  echo
  echo "resource_pack_lines_before_on_demand_switch:"
  echo "$PRE_ON_DEMAND_RESOURCE_PACK"
  echo "$PRE_ON_DEMAND_RESOURCE_PACK_SHA1"
  echo
  echo "resource_pack_lines_current:"
  grep -E '^(require-resource-pack|resource-pack|resource-pack-id|resource-pack-prompt|resource-pack-sha1)=' "$SERVER_PROPERTIES" || true
} >"$DEST/meta.txt"

rm -rf "$LATEST_SRC"
mkdir -p "$LATEST_SRC"
cp -a "$CURRENT_SRC/." "$LATEST_SRC/"

SINCE_LINES="$(wc -l <"$DEST/since-prev.patch" | tr -d ' ')"
mkdir -p "$ARCHIVE_ROOT"
if [[ ! -f "$ARCHIVE_ROOT/INDEX.md" ]]; then
  printf '| timestamp | note | jar sha1 | since-prev lines |\n| --- | --- | --- | --- |\n' >"$ARCHIVE_ROOT/INDEX.md"
fi
printf '| %s | %s | %s | %s |\n' "$TS" "$NOTE" "$JAR_SHA1" "$SINCE_LINES" >>"$ARCHIVE_ROOT/INDEX.md"

cp "$JAR" "$DEPLOY_JAR"

echo "$DEST"
