#!/usr/bin/env bash
# ローカル検証サーバーの起動・停止・状態確認。
#
#   ./localserver.sh start|stop|restart|status|log|rcon <cmd>
#
# 本番（192.168.0.22）には一切触らない。ここが操作するのは
# /Users/aa/platform/local/paperclip-tmp だけ。
set -euo pipefail

SERVER_DIR="/Users/aa/platform/local/paperclip-tmp"
JAR="paper-paperclip.jar"
PORT=8000
RCON_PORT=25575
SCREEN="oyasai-local"
JAVA_OPTS="-Xms512M -Xmx1G"
LOG="$SERVER_DIR/logs/latest.log"

die() {
  echo "エラー: $*" >&2
  exit 1
}

pid_on_port() { lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1; }

rcon_pass() {
  sed -n 's/^rcon\.password=//p' "$SERVER_DIR/server.properties" | head -1
}

rcon() {
  local cmd="$1"
  python3 - "$cmd" "$RCON_PORT" "$(rcon_pass)" <<'PY'
import socket, struct, sys
cmd, port, pw = sys.argv[1], int(sys.argv[2]), sys.argv[3]
s = socket.create_connection(("127.0.0.1", port), 5)
def send(i, t, b):
    d = struct.pack("<ii", i, t) + b.encode() + b"\x00\x00"
    s.send(struct.pack("<i", len(d)) + d)
def recv():
    ln = struct.unpack("<i", s.recv(4))[0]
    d = b""
    while len(d) < ln:
        d += s.recv(ln - len(d))
    return d[8:-2].decode("utf-8", "replace")
send(1, 3, pw); recv()
send(2, 2, cmd); print(recv())
s.close()
PY
}

status() {
  local p
  p="$(pid_on_port || true)"
  if [ -n "$p" ]; then
    echo "起動中  pid=$p  port=$PORT"
    screen -ls 2>/dev/null | sed -n "s/^\s*\([0-9]*\.$SCREEN\).*/  screen: \1/p" || true
    rcon list 2>/dev/null || echo "  (RCON 未応答)"
  else
    echo "停止中  port=$PORT は listen していない"
  fi
}

start() {
  [ -d "$SERVER_DIR" ] || die "$SERVER_DIR が無い"
  [ -f "$SERVER_DIR/$JAR" ] || die "$SERVER_DIR/$JAR が無い"
  if [ -n "$(pid_on_port || true)" ]; then
    echo "すでに起動している。何もしない。"
    status
    return 0
  fi
  screen -S "$SCREEN" -X quit >/dev/null 2>&1 || true
  screen -dmS "$SCREEN" bash -c "cd '$SERVER_DIR' && exec /usr/bin/java $JAVA_OPTS -jar '$JAR' --port $PORT --nogui"
  echo -n "起動待ち"
  for _ in $(seq 1 60); do
    sleep 2
    echo -n "."
    if [ -n "$(pid_on_port || true)" ] && grep -q 'Done (' "$LOG" 2>/dev/null; then
      echo
      echo "起動完了"
      status
      return 0
    fi
  done
  echo
  die "60秒以内に起動しなかった。$LOG を見ること"
}

stop() {
  if [ -z "$(pid_on_port || true)" ]; then
    echo "すでに停止している。"
    return 0
  fi
  rcon stop >/dev/null 2>&1 || true
  echo -n "停止待ち"
  for _ in $(seq 1 30); do
    sleep 2
    echo -n "."
    [ -z "$(pid_on_port || true)" ] && {
      echo
      echo "停止完了"
      screen -S "$SCREEN" -X quit >/dev/null 2>&1 || true
      return 0
    }
  done
  echo
  die "停止しなかった。screen -r $SCREEN で確認すること"
}

case "${1:-status}" in
start) start ;;
stop) stop ;;
restart)
  stop
  start
  ;;
status) status ;;
log) tail -n "${2:-60}" "$LOG" ;;
rcon)
  shift
  [ $# -gt 0 ] || die "コマンドを指定すること"
  rcon "$*"
  ;;
*) die "使い方: $0 start|stop|restart|status|log [行数]|rcon <cmd>" ;;
esac
