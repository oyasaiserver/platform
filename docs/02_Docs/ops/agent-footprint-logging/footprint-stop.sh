#!/usr/bin/env bash
# Stop hook: セッション中に docs/ を編集していたら、終了前に一度だけ
# 各 FOOTPRINT.md へのセッション要約追記を Claude に強制する。
# セットアップ手順・仕様: docs/02_Docs/ops/agent-footprint-logging/README.md
# 参照元ルール: docs/_MANIFEST.md「Agent Footprint Logging」
set -euo pipefail

input=$(cat)
session_id=$(jq -r '.session_id // "unknown"' <<<"$input")

repo_root=$(git rev-parse --show-toplevel 2>/dev/null) || exit 0

state_dir="$repo_root/local/agent-footprints/.state"
dirs_file="$state_dir/${session_id}.dirs"
summarized_marker="$state_dir/${session_id}.summarized"

[[ -f "$dirs_file" ]] || exit 0
[[ -f "$summarized_marker" ]] && exit 0

touch "$summarized_marker"

dir_list=""
while IFS= read -r d; do
  [[ -z "$d" ]] && target="docs/" || target="docs/${d}/"
  dir_list+="- local/agent-footprints/${d}/FOOTPRINT.md (対象: ${target})"$'\n'
done < <(sort -u "$dirs_file")

reason=$(printf '今回のセッションで docs/ 配下を編集しました。終了する前に、以下の各 FOOTPRINT.md の末尾に "## セッション要約" として、何を・なぜ変更したかを1〜3行で追記してから終了してください（この確認は今回のセッションで1回のみです）。\n\n%s' "$dir_list")

jq -n --arg reason "$reason" '{"decision":"block","reason":$reason}'
exit 0
