# Contributing to platform

platform は、おやさい鯖に関連するプラグイン・インフラ・Web アプリケーションなどを統合的に管理するモノレポ
です。このガイドラインは、プロジェクトへスムーズに参加し、貢献を行うための手順とルールをまとめたものです。

## 開発環境の準備

### Nix

1. [nixos.org](https://nixos.org/download/) から Nix
   をインストールしてください。インストール後にターミナルを再起動することを忘れずに。
1. このレポジトリ内で `nix flake show` と実行してください。エラーが出なければ成功です。
1. 今度は `nix develop` と実行してください。これが開発シェル (devshell)、Java など開発に必要なツールが全て入っています。

### Docker Runtime（任意）

Docker 実行環境があると、本番に近い形のインフラ環境で Platform を実行できます。 以下のいずれかをインストールしてください：

- Docker Desktop
- OrbStack（macOS）
- Colima（macOS / Linux）

## コード規約

Nix により管理されています。コードのフォーマットを行うには

```
$ nix fmt
```

と実行してください。フォーマットされていないコードは受け付けられません。

### PR規約

PR のタイトルは [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/)
に従ってください。

例:

```
feat: add some feature
fix(infra): resolve issue with deployment
chore(deps): update dependencies
```

## コードレビュー

Platform では CODEOWNERS に沿ってレビュー担当者が自動アサインされます。1 approval でマージ可能です。
