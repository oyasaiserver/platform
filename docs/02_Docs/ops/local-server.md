# Local Test Server

ローカル開発テスト用の Paper サーバーの起動・停止手順。

## 前提

| 項目 | 値 |
|------|-----|
| サーバーディレクトリ | `local/paperclip-tmp/` |
| ソフトウェア | Paper 1.21.11 build 69 (`paper-paperclip.jar`) |
| Java | Zulu 25 (`/usr/bin/java`) — プラグインが Java 25 でビルドされているため必須 |
| ポート | 8000 (`localhost:8000`) |
| RCON | Optional local-only RCON. Configure the port and password in untracked `local/paperclip-tmp/server.properties`; do not commit real passwords |
| online-mode | Local test setting only; never use this runbook as production configuration |
| OP | ローカル検証者が自分の環境で設定する |

## 導入済みプラグイン

| プラグイン | 用途 |
|-----------|------|
| SocialLikes3 | テスト対象 |
| LuckPerms | SL3 の依存 (`Tools.<clinit>` で必要) |
| TokenManager | SL3 の compileOnly 依存 |
| PlugManX | ホットリロード用 |

## 起動

```bash
cd "$(git rev-parse --show-toplevel)/local/paperclip-tmp"
java -Xms512M -Xmx1G -jar paper-paperclip.jar --port 8000 --nogui
```

バックグラウンドで起動する場合:

```bash
cd "$(git rev-parse --show-toplevel)/local/paperclip-tmp"
java -Xms512M -Xmx1G -jar paper-paperclip.jar --port 8000 --nogui &
```

## 停止

RCON 経由（パスワードはローカル設定を参照）:

```bash
echo "stop" | nc -w 3 localhost 25575
```

またはプロセスを直接停止:

```bash
kill $(pgrep -f "paper-paperclip.jar")
```

## プラグイン JAR の更新

```bash
# 1. ビルド
cd "$(git rev-parse --show-toplevel)"
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:SocialLikes3:build

# 2. JAR をコピー
cp plugins/SocialLikes3/build/libs/SocialLikes3.jar local/paperclip-tmp/plugins/

# 3. サーバー再起動 (または PlugManX でリロード)
```

## トラブルシューティング

### UnsupportedClassVersionError (class file version 69)

プラグインが Java 25 でビルドされている。`/usr/bin/java -version` が 25 であることを確認。

### NoClassDefFoundError: joptsimple/OptionException

`versions/1.21.11/paper-1.21.11.jar` を直接 `-jar` で起動している。Paperclip JAR (`paper-paperclip.jar`) を使うこと。

### NoClassDefFoundError: Tools.<clinit> (LuckPerms)

LuckPerms が plugins/ にない。`LuckPerms.jar` を配置して再起動。

### Purpur の Paperclip が起動しない (jbsdiff/Patch)

既存の `local/cache/` とバージョン不一致。新しいディレクトリで Paper を使う (`paperclip-tmp/`)。
