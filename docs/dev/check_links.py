#!/usr/bin/env python3
"""docs/ の相対リンク切れと、どこからもリンクされていない Markdown を報告する。

使い方: python3 docs/dev/check_links.py   （問題があれば終了コード 1）
"""

import re
import sys
from pathlib import Path
from urllib.parse import unquote

DOCS = Path(__file__).resolve().parent.parent
# 入口。ここだけは被リンクが無くてよい。
ROOTS = {"_MANIFEST.md", "README.md", "AGENTS.md", "CLAUDE.md", "GEMINI.md"}
LINK = re.compile(r"\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
FENCE = re.compile(r"```.*?```|`[^`\n]*`", re.S)


def md_files():
    return [p for p in DOCS.rglob("*.md") if "local" not in p.relative_to(DOCS).parts]


def links(path):
    text = FENCE.sub("", path.read_text(encoding="utf-8"))
    for target in LINK.findall(text):
        if re.match(r"^[a-z][a-z0-9+.-]*:|^#", target):
            continue
        yield target, (path.parent / unquote(target.split("#")[0])).resolve()


def check():
    files = md_files()
    linked, broken = set(), []
    for f in files:
        # archive/ は当時の構成へのリンクを残すので、切れていても報告しない。
        historical = "archive" in f.relative_to(DOCS).parts
        for target, dest in links(f):
            if not dest.exists():
                if historical:
                    continue
                broken.append(f"{f.relative_to(DOCS)}: {target}")
            elif dest != f.resolve():
                linked.add(dest)
    orphans = [
        str(f.relative_to(DOCS))
        for f in files
        if f.resolve() not in linked and str(f.relative_to(DOCS)) not in ROOTS
    ]
    return broken, orphans


if __name__ == "__main__":
    broken, orphans = check()
    for b in broken:
        print("broken:", b)
    for o in sorted(orphans):
        print("orphan:", o)
    print(f"{len(broken)} broken, {len(orphans)} orphan")
    sys.exit(1 if broken or orphans else 0)
