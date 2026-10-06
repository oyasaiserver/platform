#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND="$SCRIPT_DIR/backend"
FRONTEND="$SCRIPT_DIR/frontend"

echo "=== Minecraft World Analyzer ==="
echo ""

# --- Backend setup ---
cd "$BACKEND"

if [ ! -d ".venv" ]; then
  echo "[1/3] Python仮想環境を作成中..."
  python3 -m venv .venv
fi

echo "[2/3] バックエンド依存関係をインストール中..."
.venv/bin/pip install -q -r requirements.txt

echo "[3/3] バックエンドサーバーを起動中 (port 8000)..."
.venv/bin/uvicorn main:app --host 0.0.0.0 --port 8000 --reload &
BACKEND_PID=$!

# --- Frontend setup ---
cd "$FRONTEND"

if [ ! -d "node_modules" ]; then
  echo "[4/4] フロントエンド依存関係をインストール中..."
  npm install
fi

echo ""
echo "フロントエンドを起動中 (port 5173)..."
echo "ブラウザで http://localhost:5173 を開いてください"
echo ""
echo "終了: Ctrl+C"
echo ""

npm run dev &
FRONTEND_PID=$!

# Wait for Ctrl+C and clean up
trap "echo ''; echo '終了中...'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit 0" INT TERM

wait $FRONTEND_PID
