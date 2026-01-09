# Contributing to platform

platform は、おやさい鯖に関連するプラグイン・インフラ・Web アプリケーションなどを統合的に管理するモノレポ
です。このガイドラインは、プロジェクトへスムーズに参加し、貢献を行うための手順とルールをまとめたものです。

## 開発環境の準備

> [!IMPORTANT]
>
> Windows
> ユーザーは[WSL](https://learn.microsoft.com/ja-jp/windows/wsl/install)をインストールしてください。全ての作業は
> WSL 内で行います。

### Nix

1. [nixos.org](https://nixos.org/download/) から Nix
   をインストールしてください。マルチユーザーを推奨しますが、シングルユーザーでも問題ありません。インストール後にターミナルを再起動することを忘れずに。

1. いくつかの実験的要素を有効化する必要があります。次のコマンドを実行してください：

   ```console
   $ mkdir -p ~/.config/nix && echo 'experimental-features = nix-command flakes' >> ~/.config/nix/nix.conf
   ```

1. このレポジトリ内で `nix flake show` と実行してください。エラーが出なければ成功です。

1. 今度は `nix develop` と実行してください。これが開発シェル (devshell)、Java など開発に必要なツールが全て入っています。

### Docker Runtime（任意）

Docker 実行環境があると、本番に近い形のインフラ環境で Platform を実行できます。以下のいずれかをインストールしてください：

- Docker Desktop
- OrbStack（macOS）
- Colima（macOS / Linux）

## コード規約

### フォーマット

フォーマットされていないコードは受け付けられません。フォーマットを行うには：

```console
$ nix fmt
```

と実行してください。

### PR 規約

PR のタイトルは [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/)
に従ってください。

例：

```
feat: add some feature
fix(infra): resolve issue with deployment
chore(deps): update dependencies
```

## テスト

CI では、全てのパッケージをビルドし、（もし存在するなら）テストを実行します。ローカルで行うには：

```console
$ nix flake check -L
```

と実行してください。

## ローカル開発

> 現在工事中。[`process-compose`](https://github.com/F1bonacc1/process-compose)
> を使用した環境を構築中です。

### プラグイン開発

devshell に必要なツールは全て入っています。全てのプラグインをビルドしたい場合は、レポジトリのルートで：

```console
$ gradle build --parallel
```

特定のプラグインをビルドしたい場合は：

```console
$ gradle :plugins:<name>:build
```

依存関係を変更した場合は、`gradle.lock`の再生成が必要です：

```console
$ gradle2nix
```

## コードレビュー

[CODEOWNERS](https://github.com/oyasaiserver/platform/blob/master/CODEOWNERS)
に沿ってレビュー担当者が自動アサインされます。1 approval でマージ可能です。
