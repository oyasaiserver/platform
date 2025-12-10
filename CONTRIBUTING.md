# Contributing to platform

platform は、おやさい鯖に関連する プラグイン・インフラ・Web アプリケーションなどを統合的に管理する monorepo
です。
このガイドラインは、プロジェクトへスムーズに参加し、貢献を行うための手順とルールをまとめたものです。

## 1. 開発環境の準備

### 1.1 エディタ

特に指定はありませんが、IntelliJ IDEA の利用を推奨します。

### 1.2 mise-en-place による環境セットアップ

本プロジェクトでは mise-en-place を使用して開発環境を統一しています。
公式ドキュメント: [https://mise.jdx.dev/getting-started.html](https://mise.jdx.dev/getting-started.html)

依存関係のインストール:

```bash
mise install
```

`mise all tools are installed` と表示されれば成功です。

### 1.3 Docker Runtime（任意）

Docker 実行環境があると、本番に近い形のインフラ環境で Platform を実行できます。
以下のいずれかをインストールしてください：

- Docker Desktop
- OrbStack（macOS）
- Colima（macOS / Linux）

## 2. ローカル開発

Platform のインフラ構成は CDKTF で管理しています。ローカル起動は以下のコマンドで可能です：

```bash
npm run deploy -w packages/cdktf
```

※ `dockerd` が稼働している必要があります。

## 3. コード規約・ルール

### 3.1 コーディングスタイル

言語ごとのフォーマットルールは次のとおりです：

#### Kotlin

```bash
./gradlew spotlessApply
```

#### TypeScript / Web / その他

```bash
npm run format
npm run lint
```

Format と Lint が通らない PR は受け付けません。

### 3.2 コミットメッセージ規約

PR のタイトルおよびコミットメッセージは Conventional Commits に従ってください。

例:

```
feat: add some feature
fix(infra): resolve issue with deployment
chore(deps): update dependencies
```

### 3.3 Issue と PR の運用

- Issue の事前作成は不要です。
- すべての変更は必ず PR として提出してください。

### 3.4 ブランチ作成ルール

メンバーでない場合は Fork が必要です。
ブランチ名は自由ですが、以下を推奨します：

```
<name>/<type>/<message>
または
<type>/<message>
```

例:

```
name/feat/add-notification
fix/docker-build
```

## 4. コードレビューについて

Platform では CODEOWNERS に沿ってレビュー担当者が自動アサインされます。

- 1 approval でマージ可能です。
- 修正依頼があれば、PR 内で丁寧に対応してください。
