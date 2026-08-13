#!/usr/bin/env bash
# /sldata の UI ズレ確認ループ。
#
#   ./uiloop.sh [dialog|display|map] [large|normal]
#
# 1. AI Bridge でクライアントに設定を再読込させ、対象を開いてスクショを撮る
# 2. Gemini にスクショを見せて「ズレ」だけを指摘させる
# 3. 結果を表示する（yml で直せるものはその場で直し、コード修正が要るものは Codex へ）
#
# 前提: ローカル実験サーバーが起動していて、AI Bridge のクライアントが
#       127.0.0.1:8000 に接続していること。本番には触れない。
set -euo pipefail

MODE="${1:-dialog}"
SIZE="${2:-}"
BRIDGE_DIR="/private/tmp/claude-501/-Users-aa-Desktop-Cogito/7e97829e-4526-4181-8fce-5f2a5bed462e/scratchpad"
YML="/Users/aa/platform/local/paperclip-tmp/plugins/SocialLikes3/sldata-dialog.yml"
OUT_DIR="/tmp/sldata-uiloop"
STAMP="$(date +%H%M%S)"
SHOT="$OUT_DIR/${MODE}${SIZE:+-$SIZE}-$STAMP.png"
mkdir -p "$OUT_DIR"

echo "== 1. スクリーンショット取得 =="
python3 - "$MODE" "$SIZE" "$SHOT" "$BRIDGE_DIR" <<'PY'
import asyncio, sys, shutil, os
mode, size, dest, bridge = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
sys.path.insert(0, bridge)
from aibridge import call

async def main():
    st = (await call("get_connection_state"))["result"]
    if not st.get("inGame"):
        await call("join_server", {"address": "127.0.0.1:8000"})
        for _ in range(18):
            await asyncio.sleep(4)
            if (await call("get_connection_state"))["result"].get("inGame"):
                break
        await asyncio.sleep(4)
    await call("execute_command", {"command": "sldata dialog reload"})
    await asyncio.sleep(1.2)
    cmd = f"sldata {mode}" + (f" {size}" if size else "")
    await call("execute_command", {"command": cmd})
    await asyncio.sleep(3.5)
    p = (await call("take_screenshot"))["result"]["path"]
    for _ in range(20):
        await asyncio.sleep(0.5)
        if os.path.exists(p) and os.path.getsize(p) > 1000:
            break
    shutil.copy(p, dest)
    print("  ->", dest)

asyncio.run(main())
PY

echo "== 2. Gemini にズレを見てもらう =="
REVIEW_DIR="$OUT_DIR/current"
rm -rf "$REVIEW_DIR"
mkdir -p "$REVIEW_DIR"
cp "$SHOT" "$REVIEW_DIR/shot.png"
cp "$YML" "$REVIEW_DIR/sldata-dialog.yml"

PROMPT=$(
  cat <<'EOF'
Minecraft のダイアログ内に、テキスト文字だけで描いた棒グラフがある。
`REVIEW_DIR/shot.png` を**実際に開いて見て**、**位置のズレだけ**を指摘してほしい。

同じディレクトリの `sldata-dialog.yml` が描画設定。これを書き換えれば再ビルド無しで直せる。

# 前提となる技術制約（これは直せないので、指摘しなくてよい）

- unifont はどの文字も送り幅がインク幅より 1px 広い。**文字を横に並べると必ず 1px の隙間が空く**。
  「線が破線に見える」「太い棒が縦に割れる」のはこれが原因で、文字を変えても直らない
- 行を積む方式なので、行と行の間にも必ず隙間が入る
- ダイアログ本文は中央揃え固定

# 見てほしいこと（ズレだけ）

1. **Y軸ラベルの数値と、対応する目盛り線の高さが合っているか。** ずれているなら、何行ぶん・どちら向きにずれているか
2. **棒の底が 0 の線に乗っているか。** 浮いている／めり込んでいるなら、どちらにどれだけか
3. **X軸ラベルが、対応する棒の真下に来ているか。** ずれているなら、何文字ぶん・どちら向きか
4. **左右の余白が対称か。** グラフ全体が左右どちらかに寄っていないか
5. **各棒の横位置が等間隔か。** 崩れている箇所があれば何本目か

# 出力

- 見つかったズレを、**具体的な位置と量**で書く。「なんとなくずれている」は不可
- それぞれについて、`sldata-dialog.yml` のどの項目で直せそうか。yml で直せないならその旨を書く
- ズレが無い項目は「問題なし」と1行で書く
- 感想や一般論は書かない

日本語で。
EOF
)
PROMPT="${PROMPT//REVIEW_DIR/$REVIEW_DIR}"

/Users/aa/.local/bin/agy -p "$PROMPT" \
  --model "Gemini 3.1 Pro (High)" \
  --add-dir "$REVIEW_DIR" \
  --sandbox --dangerously-skip-permissions \
  2>&1 | grep -v -E '^(Warning:|Ripgrep|True color|Loaded cached|Data collection)' |
  tee "$OUT_DIR/review-$STAMP.txt"

echo
echo "== 完了 =="
echo "  スクショ: $SHOT"
echo "  指摘    : $OUT_DIR/review-$STAMP.txt"
echo "  yml     : $YML"
echo "  直したら: ゲーム内で /sldev （または再度このスクリプト）"
