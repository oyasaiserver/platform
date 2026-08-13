#!/usr/bin/env bash
# PostToolUse hook: docs/ 配下の編集を local/agent-footprints/ に軽量ログとして自動記録する。
# セットアップ手順・仕様: docs/02_Docs/ops/agent-footprint-logging/README.md
# 参照元ルール: docs/_MANIFEST.md「Agent Footprint Logging」
set -euo pipefail

input=$(cat)
file_path=$(jq -r '.tool_input.file_path // empty' <<<"$input")
tool_name=$(jq -r '.tool_name // "unknown"' <<<"$input")
session_id=$(jq -r '.session_id // "unknown"' <<<"$input")

[[ -z "$file_path" ]] && exit 0

repo_root=$(git rev-parse --show-toplevel 2>/dev/null) || exit 0
docs_root="$repo_root/docs"

case "$file_path" in
  "$docs_root"/*) : ;;
  *) exit 0 ;;
esac

rel_path=${file_path#"$docs_root"/}
doc_dir=$(dirname "$rel_path")
[[ "$doc_dir" == "." ]] && doc_dir=""

footprint_dir="$repo_root/local/agent-footprints/${doc_dir}"
mkdir -p "$footprint_dir"
footprint_file="$footprint_dir/FOOTPRINT.md"

if [[ ! -f "$footprint_file" ]]; then
  printf '# Agent Footprint: docs/%s\n\nAI エージェントによる作業ログ（自動生成・ローカル限定・Git管理外）。\n\n' "$doc_dir" > "$footprint_file"
fi

timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
printf -- '- %s | session:%s | %s | docs/%s\n' "$timestamp" "${session_id:0:8}" "$tool_name" "$rel_path" >> "$footprint_file"

state_dir="$repo_root/local/agent-footprints/.state"
mkdir -p "$state_dir"
echo "$doc_dir" >> "$state_dir/${session_id}.dirs"

exit 0
