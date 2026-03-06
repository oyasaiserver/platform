# OyasaiPets リファクタリングロードマップ

本ドキュメントは
`plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/OyasaiPetsUnified.kt`
に統合されたレガシー構成を維持しつつ、秩序立てて改善するためのガイドです。巨大ファイルで運用する期間中も可視性を確保し、将来の分割作業に備えます。

## 0. ガードレール整備

- Kotlin/ShadowJar ビルドに加え、`ktlint`/`detekt`
  を導入（`gradle :plugins:OyasaiPets:ktlintCheck` /
  `:plugins:OyasaiPets:detekt`）。現状は `ignoreFailures=true` で警告のみ記録し、レポートを
  `build/reports/{ktlint,detekt}` に出力。
- `gradle :plugins:OyasaiPets:build` を定期的に実行し、`TokenManager`
  依存が存在するためサーバー側でも起動スモークテストを行う。
- メトリクス/ログ基盤：`BigWolfPlugin`（`OyasaiPetsUnified.kt:75`）で `logger`
  による起動ログ、主要コマンドハンドラ呼び出し前後に `System.nanoTime()`
  計測を挿入する余地あり。まずはコマンド入口と主要システム呼び出しに `debug` ログを配置して可観測性を向上させる。

## 1. 構造診断メモ

- **エントリポイント**：`BigWolfPlugin`（`...Unified.kt:75`）が `SkillSystem`,
  `PetSpawnSystem`, `PetInteractionService` など全責務を直接生成。DI が無いためテスト困難。
- **設定/キー類**：`BigWolfConfig`（`...:557`）、`BigWolfKeys`（`...:771`）が分離されているが、設定ロードは
  `BigWolfPlugin#reloadConfig` 内に散在。
- **データ管理**：`PetDataManager`（`...:915`）は JSON
  永続化とメモリキャッシュを同時に扱い、`PetSpec`（`...:2298` 付近）や `VariantHandler`（`...:2500`
  付近）などドメイン情報と密結合。
- **サービス/システム層**：`services/*`（`...:4200` 以降）と `systems/*`（`...:6300` 以降）が
  EventListener 関連クラスと相互に参照し循環気味。特に `PetInteractionService` が `listeners` と
  `systems` によって直接呼ばれる。
- **プレゼン層**：`listeners/*`（`...:3000` 以降）や GUI 関連クラス（`GuiManager`）が巨大な
  `Inventory` 構築ロジックを複製している。

## 2. 依存関係サマリ

| 主要ブロック | 外部依存 | 備考 | | --- | --- | --- | | `BigWolfPlugin` | 全サービス/システム/リスナー |
起動時に全てを `lateinit` で生成。 | | `services` 群 | `PetDataManager`, `EconomySystem`,
Bukkit API | `StorageService` と `InteractionService` が状態管理の中心。 | | `systems` 群 |
Bukkit API, `services` | フェッチ/ブリーディング/コントロールなどゲームプレイ側ループ。 | | `listeners` 群 |
`services`, `systems`, Bukkit イベント | 1 クラスに複数イベントが混在し 200 行超が多い。 | | `domain` 群
| ほぼ純粋 Kotlin | `PetSpec`, `PetCategory`, `VariantHandler` 等、データ＋ビジネスルール。 |

## 3. 優先課題（巨大ファイル維持前提）

1. **観測性**：コマンド／タスク実行時間をログに出す軽量トレーサーを `BigWolfPlugin` 内に追加し、処理遅延や例外箇所を把握。
1. **状態の見える化**：`PetDataManager` のキャッシュと永続化操作を専用メソッドに分離し、`PetData`
   更新パスをコメントで明示する。
1. **設定集約**：`BigWolfConfig` に集中していない定数・ハードコード文字列（GUI メッセージ等）を順次移し、`reload`
   ルーチンを通じて一元管理。
1. **イベント整理**：各 Listener セクションで扱うイベントごとに `private fun handleXxx()`
   を用意し、`@EventHandler` は薄い入口になるよう再構成する（ファイル分割は行わず、セクションコメントで区切る）。
1. **ドメイン強化**：`PetSpec`／`VariantHandler` に散在するロジックを `PetSpec` 拡張関数へ集約し、`when`
   乱立を減らす。

## 4. 今後のワークパッケージ案

1. **ロギング＆メトリクス導入**：`Component` 経由で表示するユーザ向けメッセージと `logger`
   出力を切り分け、`debug`/`info`/`error` を統一。処理時間やアクティブタスク数をログに追記。
1. **設定・翻訳資産の棚卸し**：`Component.text` でハードコードされている日本語/英語文言を `config.yml` または
   `i18n` セクションに移設するプランを作成（今はコメントのみ追加）。
1. **データアクセス API**：`PetDataManager` を囲う `PetRepository` スタイルの薄いラッパーを作り、読み書き API
   を限定する（同一ファイル内で `object` を定義）。
1. **静的解析結果のモニタリング**：`build/reports/detekt/detekt.html` をレビューし、件数多いルールから順に
   suppress/修正計画を立てる。`ktlint` で自動整形可能な箇所は `ktlintFormat` で即対応。
1. **段階的ドキュメント化**：本ファイル内のセクション先頭に「役割」「依存先」「TODO」をコメントで記入し、分割時の移動先を明記する。

## 5. 次のステップ

1. `nix develop -c gradle :plugins:OyasaiPets:ktlintCheck`.
1. `nix develop -c gradle :plugins:OyasaiPets:detekt`.
1. ログ／メトリクス差し込み対象（コマンド処理、PetSpawn、Economy 連携など）を洗い出し、計測ユーティリティを
   `OyasaiPetsUnified.kt` 内に追加。

これらを繰り返すことで巨大ファイルでも品質を可視化しつつ、将来的なクリーンアーキテクチャ移行に備えられます。
