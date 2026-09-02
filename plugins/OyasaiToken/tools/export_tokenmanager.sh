#!/usr/bin/env bash
# 本番 MariaDB (token.tokenmanager) から残高を TSV でエクスポートする。
#
# 【重要】minecraft-main を **クリーン停止した後** に実行すること。
# TokenManager は残高の一部を RAM に保持し、停止時の insertCache() で MySQL に確定する。
# 稼働中にダンプすると直近の変動を取りこぼす。
#
# 使い方:  ./export_tokenmanager.sh <出力先.tsv> [ssh先]
set -euo pipefail

OUT="${1:?出力先の .tsv を指定してください}"
HOST="${2:-oyasai-server}"
CONF="/opt/platform/master/minecraft-main/plugins/TokenManager/config.yml"

if [ -e "$OUT" ]; then
  echo "[error] 出力先が既に存在します: $OUT" >&2
  exit 1
fi

# リモート側でのみパスワードを展開する。ローカル・ログ・引数のいずれにも残さない。
# 設定ファイルのパスは -s の位置引数として渡す（クライアント側で展開させない）。
ssh "$HOST" bash -s -- "$CONF" <<'REMOTE' >"$OUT"
set -euo pipefail
conf="$1"
pw=$(grep -A6 'mysql:' "$conf" | grep 'password:' | head -1 | sed 's/.*password: *//; s/^["'"'"']//; s/["'"'"']$//')
docker exec mariadb mariadb -uroot -p"$pw" -N -B \
  -e 'SELECT uuid, tokens FROM token.tokenmanager ORDER BY uuid;'
REMOTE

rows=$(wc -l <"$OUT" | tr -d ' ')
sum=$(awk -F'\t' '{s+=$2} END {print s+0}' "$OUT")
neg=$(awk -F'\t' '$2<0' "$OUT" | wc -l | tr -d ' ')
echo "[ok] $OUT"
echo "     行数=$rows 合計=$sum 負残高=$neg"
echo ""
echo "次: python3 migrate_tokenmanager_to_sqlite.py --input $OUT --output tokens.db \\"
echo "        --names <usercache.json> --negative clamp"
