#!/usr/bin/env python3
"""ローカル実験サーバーでコマンドを実行し、スクリーンショットを撮る。

    python3 tools/shot.py "sldata dialog ranking" out.png

AI Bridge（Minecraft クライアント側の Mod、ws://127.0.0.1:9527）を使う。
接続先はローカル 127.0.0.1:8000 のみに制限している。本番へは繋がない。
"""

import asyncio
import itertools
import json
import os
import shutil
import sys

import websockets

URL = "ws://127.0.0.1:9527"
ALLOWED = {"127.0.0.1:8000", "localhost:8000"}
_ids = itertools.count(1)


async def call(method, params=None, timeout=60):
    if method == "join_server" and (params or {}).get("address") not in ALLOWED:
        raise RuntimeError(f"接続先が許可されていない: {params}")
    async with websockets.connect(URL, max_size=64 * 1024 * 1024) as ws:
        await ws.send(json.dumps({"id": next(_ids), "method": method, "params": params or {}}))
        return json.loads(await asyncio.wait_for(ws.recv(), timeout))


async def main(command, dest):
    state = (await call("get_connection_state"))["result"]
    if not state.get("inGame"):
        await call("join_server", {"address": "127.0.0.1:8000"})
        for _ in range(25):
            await asyncio.sleep(3)
            if (await call("get_connection_state"))["result"].get("inGame"):
                break
        await asyncio.sleep(6)
    await call("execute_command", {"command": command})
    await asyncio.sleep(4)
    path = (await call("take_screenshot"))["result"]["path"]
    for _ in range(30):
        await asyncio.sleep(0.5)
        if os.path.exists(path) and os.path.getsize(path) > 1000:
            break
    shutil.copy(path, dest)
    print(dest)


if __name__ == "__main__":
    asyncio.run(main(sys.argv[1], sys.argv[2]))
