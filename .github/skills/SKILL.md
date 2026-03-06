---

## name: develop-oyasai-platform description: お野菜サーバーの platform リポジトリで開発を行う際のガイドラインです。プラグインをビルドする際に使用してください。

このリポジトリ内でビルドを実行する際は以下の手順に従ってください。

必ず nix develop 環境下である必要があります。

全プラグインのビルド：

`gradle build --parallel`

特定のプラグインのみビルド：

`gradle :plugins:<name>:build`

依存関係の更新：

`build.gradle.kts` 等で依存関係を変更した場合は、`gradle2nix` を実行して `gradle.lock`
を再生成する必要があります。
