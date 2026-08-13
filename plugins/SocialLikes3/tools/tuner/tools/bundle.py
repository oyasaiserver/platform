#!/usr/bin/env python3
"""分割したチューナーを、Claude の Artifact 用に1枚のHTMLへ戻す。

Artifact は単一ファイルしか受け付けず、外部ホストへの要求は CSP で全部落ちる。
さらに Artifact 側が <!doctype><html><head>...</head><body> で包むので、
出力にそれらのタグを入れてはいけない。<title> から始める。

    python3 tools/bundle.py -o /tmp/tuner-bundled.html
"""
import argparse, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

# index.html の <script src> の順をそのまま使う。二重管理しない。
def script_order(index_html):
    return re.findall(r'<script src="js/([^"]+)"></script>', index_html)

def build():
    index = (ROOT / "index.html").read_text(encoding="utf-8")

    m = re.search(r"<title>(.*?)</title>", index, re.S)
    title = m.group(1) if m else "tuner"

    m = re.search(r"<body>(.*)</body>", index, re.S)
    if not m:
        sys.exit("index.html に <body> が見つからない")
    body = m.group(1)
    body = re.sub(r'<script src="js/[^"]+"></script>\s*', "", body).strip()

    css = (ROOT / "css/tuner.css").read_text(encoding="utf-8")

    js = []
    for name in script_order(index):
        p = ROOT / "js" / name
        if not p.is_file():
            sys.exit("見つからない: " + str(p))
        js.append("/* ===== %s ===== */\n%s" % (name, p.read_text(encoding="utf-8")))

    return ("<title>%s</title>\n<style>\n%s\n</style>\n\n%s\n\n<script>\n%s\n</script>\n"
            % (title, css, body, "\n".join(js)))

def verify(out_text, path):
    bad = []
    head = out_text.lstrip()[:200].lower()
    if not head.startswith("<title>"):
        bad.append("<title> で始まっていない")
    # <header> を <head> と誤検出しないよう、タグ名の直後が空白か > か / のものだけ見る
    for tag in ("!doctype", "html", "head", "body"):
        if re.search(r"</?" + tag + r"(?=[\s/>])", out_text, re.I):
            bad.append("禁止タグが含まれる: <" + tag + ">")
    for m in re.finditer(r'(?:src|href)\s*=\s*"([^"]+)"', out_text):
        u = m.group(1)
        if not u.startswith("data:"):
            bad.append("外部参照が残っている: " + u[:60])
    if bad:
        print("NG:")
        for b in bad:
            print("  -", b)
        return 1
    print("OK  %s  %d bytes" % (path, len(out_text.encode("utf-8"))))
    return 0

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("-o", "--out", required=True)
    a = ap.parse_args()
    text = build()
    p = pathlib.Path(a.out)
    p.write_text(text, encoding="utf-8")
    sys.exit(verify(text, p))
