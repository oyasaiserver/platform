#!/usr/bin/env python3
"""Publish the generated CitiesSkyMine user guide to a Discord channel."""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any


TOOL_DIR = Path(__file__).resolve().parent
PLUGIN_DIR = TOOL_DIR.parent
REPO_ROOT = PLUGIN_DIR.parent.parent
DEFAULT_MARKDOWN = REPO_ROOT / "docs/02_Docs/tools/citiesskymine-user-guide.md"
DEFAULT_CHANNEL_ID = "1513469247714496653"
DEFAULT_STATE = Path.home() / ".local/state/citiesskymine-user-guide-discord.json"
DISCORD_API = "https://discord.com/api/v10"


def normalize_for_discord(markdown: str) -> str:
    lines: list[str] = []
    in_fence = False

    for line in markdown.splitlines():
        if line.startswith("```"):
            in_fence = not in_fence
            lines.append(line)
            continue
        if not in_fence:
            if re.fullmatch(r"\s*-{3,}\s*", line):
                continue
            line = re.sub(r"^#\s+", "## ", line)
            line = re.sub(r"^#{4,}\s+", "### ", line)
            if line.startswith("<!--") and line.endswith("-->"):
                continue
        lines.append(line)

    return "\n".join(lines).strip() + "\n"


def split_markdown(markdown: str, limit: int) -> list[str]:
    blocks = markdown.split("\n\n")
    chunks: list[str] = []
    current = ""
    in_fence = False

    for block in blocks:
        in_fence ^= block.count("```") % 2 == 1
        candidate = block if not current else current + "\n\n" + block
        if len(candidate) <= limit or in_fence:
            current = candidate
            continue
        if current:
            chunks.append(current.strip())
        current = block

    if current.strip():
        chunks.append(current.strip())

    oversized = [len(chunk) for chunk in chunks if len(chunk) > limit]
    if oversized:
        raise ValueError(f"markdown contains blocks larger than Discord limit: {oversized}")
    return chunks


def request_json(method: str, path: str, token: str, payload: dict[str, Any] | None = None) -> Any:
    data = None
    headers = {"Authorization": f"Bot {token}", "User-Agent": "CitiesSkyMineDocsPublisher/1.0"}
    if payload is not None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        headers["Content-Type"] = "application/json"

    request = urllib.request.Request(
        DISCORD_API + path,
        data=data,
        headers=headers,
        method=method,
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            body = response.read().decode("utf-8")
            return json.loads(body) if body else None
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"Discord API {method} {path} failed: {error.code} {body}") from error


def load_state(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {"message_ids": []}
    return json.loads(path.read_text(encoding="utf-8"))


def save_state(path: Path, state: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def publish_chunks(
    chunks: list[str],
    *,
    token: str,
    channel_id: str,
    state_path: Path,
    dry_run: bool,
) -> dict[str, Any]:
    state = load_state(state_path)
    old_message_ids = list(state.get("message_ids", []))
    new_message_ids: list[str] = []

    for index, chunk in enumerate(chunks, start=1):
        content = f"**CitiesSkyMine ユーザーガイド ({index}/{len(chunks)})**\n\n{chunk}"
        if dry_run:
            print(f"chunk {index}: {len(content)} chars")
            continue

        if index <= len(old_message_ids):
            message_id = old_message_ids[index - 1]
            response = request_json(
                "PATCH",
                f"/channels/{channel_id}/messages/{message_id}",
                token,
                {"content": content},
            )
        else:
            response = request_json(
                "POST",
                f"/channels/{channel_id}/messages",
                token,
                {"content": content},
            )
        new_message_ids.append(response["id"])
        time.sleep(0.3)

    if not dry_run:
        for message_id in old_message_ids[len(chunks) :]:
            request_json("DELETE", f"/channels/{channel_id}/messages/{message_id}", token)
            time.sleep(0.3)

        state = {
            "channel_id": channel_id,
            "message_ids": new_message_ids,
            "updated_at_unix": int(time.time()),
        }
        save_state(state_path, state)

    return state


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--markdown", type=Path, default=DEFAULT_MARKDOWN)
    parser.add_argument("--channel-id", default=os.environ.get("DISCORD_CHANNEL_ID", DEFAULT_CHANNEL_ID))
    parser.add_argument("--state", type=Path, default=Path(os.environ.get("CSM_DISCORD_STATE", DEFAULT_STATE)))
    parser.add_argument("--token-env", default="DISCORD_BOT_TOKEN")
    parser.add_argument("--max-chars", type=int, default=1850)
    parser.add_argument("--generate", action="store_true", help="generate the markdown before publishing")
    parser.add_argument("--dry-run", action="store_true", help="show chunks without sending to Discord")
    args = parser.parse_args()

    if args.generate:
        subprocess.run([sys.executable, str(TOOL_DIR / "generate_user_guide.py")], check=True)

    markdown = normalize_for_discord(args.markdown.read_text(encoding="utf-8"))
    chunks = split_markdown(markdown, args.max_chars - 80)

    token = os.environ.get(args.token_env)
    if not token and not args.dry_run:
        raise SystemExit(f"{args.token_env} is required unless --dry-run is used")

    state = publish_chunks(
        chunks,
        token=token or "",
        channel_id=args.channel_id,
        state_path=args.state,
        dry_run=args.dry_run,
    )
    if args.dry_run:
        print(f"dry-run complete: {len(chunks)} chunks for channel {args.channel_id}")
    else:
        print(f"published {len(state['message_ids'])} chunks to Discord channel {args.channel_id}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
