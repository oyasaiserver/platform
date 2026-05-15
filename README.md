<p align="left">
  <img src="./assets/icon.png" width=128 />
</p>

# OyasaiServer Platform

おやさい鯖の開発を行っているモノレポです。インフラからプラグインまで、幅広く開発しています。

オープンソース・クローズドコントリビューションです。貢献に興味がある方は
Discord[^1]に参加して、サーバーに慣れてきたらぜひ運営チームに声をかけてください。

脆弱性を発見した場合も Discord[^1]でご連絡ください。

## はじめに

> [!IMPORTANT]
>
> Windows
> ユーザーは[WSL](https://learn.microsoft.com/ja-jp/windows/wsl/install)をインストールしてください。全ての作業は
> WSL 内で行います。

開発には Nix を使用しています。Nix の使用を推奨しますが、基礎的なプラグイン開発のみの場合、Nix を使用しない開発も可能です。

## Nix を使用した開発

### Nix

1. [nixos.org](https://nixos.org/download/) から Nix
   をインストールしてください。マルチユーザーを推奨しますが、シングルユーザーでも問題ありません。インストール後にターミナルを再起動してください。

1. いくつかの実験的要素を有効化する必要があります。

   ```
   experimental-features = nix-command flakes
   ```

   この行を、マルチユーザーの場合は `/etc/nix/nix.conf`
   に、シングルユーザーの場合は`~/.config/nix/nix.conf`に追加してください、

1. このレポジトリ内で `nix flake show` と実行してください。エラーが出なければ成功です。

1. `nix develop` と実行してください。これが開発シェル (devshell)、Java など開発に必要なツールが全て入っています。

1. Nix
   を使用してくると、キャッシュが溜まっていきます。定期的に`nix-garbage-collect -d`と実行して、キャッシュをクリアしてください。

### フォーマット

```console
nix fmt
```

フォーマットされていないコードは受け付けられません。

## Nix を使用しない開発

> [!WARNING]
>
> Nix を使用しない開発は**非推奨**です。限定的なプラグイン開発のみ可能です。開発チームは正式にサポートしません。

### Java

[Java (JDK) 25](https://www.oracle.com/jp/java/technologies/downloads/)をインストールしてください。

```console
javac --version # javac 25 と出れば成功
```

### フォーマット

```console
./gradlew fmt
```

フォーマットされていないコードは受け付けられません。Nix を使用しない開発では、Kotlin ファイルのみフォーマット可能です。

## プラグイン

[`./plugins`](./plugins)で開発を行います。

### ビルド

全てのプラグインを並列でビルドするには、レポジトリのルートから：

```console
./gradlew build --parallel
```

特定のプラグインのみビルドしたい場合は：

```console
./gradlew :plugins:<plugin-name>:build
```

`<plugin-name>`をビルドしたいプラグインの名前に変更してください。

Nix でビルドする場合は：

```console
nix build .#oyasai-plugins -L
```

全てのプラグインが並列でビルドされますが、`passthru`経由で独立したプラグインにアクセスできます。

### 依存

[Gradle Version Catalog](https://docs.gradle.org/current/userguide/version_catalogs.html)
を使用して、プロジェクト内のバージョンを一貫させています。依存関係を変更したい場合は、[`./gradle/libs.versions.toml`](./gradle/libs.versions.toml)を編集してください。

依存関係を変更した場合（依存を追加・削除、バージョンの変更、など）、依存のロックが必要です。

```console
./gradlew lock
```

[`gradle.lock`](./gradle.lock)が再生成されます。

## パッケージ

[`./packages`](./packages)以下はそれぞれビルド可能なパッケージです。Docker イメージ、実行可能なバイナリ、Gradle
Plugin 等、Nix でビルド可能な様々なパッケージが入っています。

```console
nix build .#<package-name>
```

でビルドできます。

[^1]: https://discord.gg/Pq8PHhZRrG
