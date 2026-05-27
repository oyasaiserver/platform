import hashlib
import base64
import sys
import json
import tomllib
import urllib.request
from urllib.error import HTTPError

ZIP_MAGIC = bytes([0x50, 0x4B, 0x03, 0x04])
# Uniform User-Agent to satisfy GitHub, Spiget, Modrinth, etc.
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'


def resolve_stable_url(id: str, version: str, entry: dict) -> str:
    match entry["type"]:
        case "github":
            return (
                f"https://github.com/{entry['owner']}/{entry['repo']}"
                f"/releases/download/{entry['tag']}/{entry['name']}"
            )
        case "modrinth":
            from urllib.parse import urlencode
            params = urlencode({
                "game_versions": f'["{version}"]',
                "loaders": '["paper","spigot","bukkit"]',
            })
            req = urllib.request.Request(
                f"https://api.modrinth.com/v2/project/{entry['slug']}/version?{params}",
                headers={'User-Agent': USER_AGENT}
            )
            with urllib.request.urlopen(req) as resp:
                versions = json.load(resp)
            urls = [f["url"] for v in versions for f in v["files"]]
            assert urls, f"No modrinth URL for {id}@{version}"
            return urls[0]
        case "spiget" | "url":
            url = (
                f"https://api.spiget.org/v2/resources/{entry['id']}/download"
                if entry["type"] == "spiget"
                else entry["url"]
            )
            req = urllib.request.Request(url=url, headers={'User-Agent': USER_AGENT})
            with urllib.request.urlopen(req) as resp:
                return resp.url
        case t:
            raise ValueError(f"Unknown entry type: {t}")


def compute_hash(url: str) -> str:
    # Always include the User-Agent when downloading the file payload
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
    except HTTPError as e:
        print(f"\nFailed to download {url}: {e}", file=sys.stderr)
        raise

    assert data[:4] == ZIP_MAGIC, f"Expected a JAR (ZIP) file but got wrong magic bytes at {url}"
    digest = hashlib.sha256(data).digest()
    return f"sha256-{base64.b64encode(digest).decode()}"


def main():
    registry: dict = tomllib.loads(sys.stdin.buffer.read().decode())
    lock: dict = {}

    for id, versions in registry.items():
        for version, entry in versions.items():
            print(f"lock  {id}@{version} ... ", end="", file=sys.stderr, flush=True)
            try:
                url = resolve_stable_url(id, version, entry)
                hash_ = compute_hash(url)
                lock.setdefault(id, {})[version] = {"url": url, "hash": hash_}
                print("done", file=sys.stderr)
            except Exception as e:
                print(f"failed: {e}", file=sys.stderr)
                sys.exit(1)

    print(json.dumps(lock, indent=2))


if __name__ == "__main__":
    main()
