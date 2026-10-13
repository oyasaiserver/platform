---
title: "Vertex — サービス型プラグイン基盤"
status: active
source: plugins/Vertex/（コードから作成。ゲーム内での確認は未実施）
source_of_truth: "plugins/Vertex/"
related_paths:
  - packages/oyasai-plugins.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-12"
---

# Vertex

サービスごとにコマンドを登録するプラグイン。現在は `SchematicsService` だけを持ち、schematic.cloud の配布 API からファイルをダウンロードして FastAsyncWorldEdit の保存先へ配置する。建築のロードや貼り付けは行わない。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/vertex/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/Vertex/` |
| 主要コード | `Vertex.kt`（メイン、`services` レジストリ）、`services/Service.kt`（基底クラス）、`services/schematics/SchematicsService.kt` |
| テスト | `plugins/Vertex/` にテストソースはない。コマンド・権限・通信・ファイル保存・停止時の挙動を保証する自動テストはない |
| ビルド | `nix develop --command gradle :plugins:Vertex:build`（`plugins/Vertex/build/libs/Vertex.jar`）。今回の資料作成では未実行 |
| Nix package | `packages/oyasai-plugins.nix` が検出し `vertex` を公開する |

## 技術仕様

### 構成

- `plugin.yml`: 名前 `Vertex`、メインクラス `io.oyasai.vertex.Vertex`、version `1.0-SNAPSHOT`、api-version `1.21`。`paper-plugin.yml` はない。FastAsyncWorldEdit は `softdepend` で、必須依存ではない。
- `Vertex.services` は `SchematicsService` だけを持つ。`Service` は `Listener` とコマンド一覧を持ち、ライフサイクル関数は空実装。現在の `onLoad`・`onEnable`・`onDisable` は `open` ではなく、派生サービスで override できない。
- `Vertex.onEnable` はサービスをイベントリスナーとして登録し、コマンドを登録してから `service.onEnable()` を呼ぶ。現在のサービスにイベントハンドラはない。
- コマンドは `plugin.yml` ではなく `server.commandMap` に登録する。同じ `command.name` を持つ既存コマンドの値を `knownCommands` から削除してから登録するため、同名の他プラグインのコマンドに影響する。停止時に明示的に登録解除する処理はない。
- `Secrets.kt` は環境変数 `DISCORD_WEBHOOK_URL` を読むオブジェクトだが、現在の Vertex 内に参照箇所はない。初めて参照した時に変数がなければ `IllegalStateException` を投げる。現在の起動・ダウンロード処理には使われない。

### コマンドと主要な処理の流れ

1. `OyasaiSchematics.execute` で最初の引数を小文字化し、`load` の場合だけ処理する。引数なし・未知のサブコマンドは `true` を返すだけで、案内を送らない。
2. `sender.isOp || sender.hasPermission("group.blue")` を確認する。満たさなければ `false`。ID 引数なしも `false` で、いずれも専用メッセージはない。送信者をプレイヤーに限定しない。追加引数は無視する。
3. 第2引数の `substringAfterLast("/")` を ID にする。URL の構文・配布元は検証せず、末尾の `/` は空 ID、クエリ文字列などは ID の一部になる。ID の有効文字・URI エンコード・保存先の正規化による検査はない。
4. Bukkit の非同期タスクで保存先を作り、同じディレクトリに `download-*.part` を作る。固定の `https://api.schematic.cloud/download/<ID>` に `HttpURLConnection` でアクセスする。指定された URL 自体へはアクセスしない。
5. HTTP 200 だけを受け付ける。接続10秒・読み取り30秒のタイムアウトを設定し、Content-Length と実際の受信量で32 MiBを超えないか確認する。Content-Length が不明（負数）でも受信量を検査する。
6. ストリーム処理開始前に60秒後の期限を設定し、各 `read` の直前に検査する。HTTP 接続・レスポンス待ちはこの60秒に含まれず、ブロック中の `read` を期限時点で中断する処理もない。全処理が厳密に60秒で終わる保証ではない。
7. 受信完了後に `REPLACE_EXISTING` と `ATOMIC_MOVE` で `<ID>.schem` へ移動する。[Java の `Files.move` 仕様](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html#move(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...))では、`ATOMIC_MOVE` 指定時に他のオプションは無視され、既存ファイルを置換するか例外になるかは実装依存。原子的移動に対応しない環境での代替処理はない。HTTP 接続は `finally` で切断し、一時ファイルも `finally` で削除する。
8. `runCatching` の結果を、プラグインが有効なら同期タスクで通知する。成功時は `/schematic load <ID>.schem` のクリップボードコピーを付けたメッセージを送る。失敗時は送信者への理由付き通知と `Schematic <ID> download failed: <理由>` の warning を出す。

### データ形式と永続化

- 保存先はサーバー作業ディレクトリ基準の `plugins/FastAsyncWorldEdit/schematics/<ID>.schem`。プレイヤーやワールドで分けず共有する。Vertex 自身の設定ファイル・DB・履歴・移行処理はない。
- レスポンスをバイト列として保存するだけで、認証、Content-Type、schematic 形式、内部のブロック数や配置範囲は検査しない。拡張子は常に `.schem`。
- 同じ ID のファイルは上書きを試みるが、既存ファイルを置換できるかは環境依存。ロック・重複排除・バックアップはなく、同時取得で置換が成功する環境では移動の順で結果が変わる。成功通知後に別の取得結果へ置き換わる可能性もある。
- 最終ファイルへの移動前に失敗すれば既存ファイルを置き換えない。移動後の一時ファイル削除が例外になった場合は、保存済みでも失敗結果になる。一時ファイル削除自体の失敗やプロセス終了では `.part` が残り得る。起動時の回収処理はない。

### 同期・非同期とイベント

- 権限・引数の判定と非同期タスクの登録はコマンド処理側。通信・ディレクトリ作成・保存は非同期。受付・開始・進捗の通知はなく、結果メッセージと失敗ログだけを同期タスクで出す。再実行するたびに別の非同期タスクを登録する。
- 権限は受付時にだけ検査し、実行中に権限を失っても再確認しない。同時数・実行間隔の制限、送信者のログアウト検査、通信の明示的な取消処理はない。
- 非同期処理終了時に `plugin.isEnabled` が false なら、結果通知と失敗ログの同期タスクを登録しない。`onDisable` に通信の取消・完了待ち・保存の巻き戻しはない。停止中の実動作は未確認。
- 現在はイベントを処理せず、ブロックの設置・破壊・保護や貼り付けを制御しない。

### 外部 API・依存

- Vertex の `build.gradle.kts` は Purpur API を `compileOnly` で参照する。ルートのビルド設定が Kotlin JVM・Shadow を適用し、`build` に `shadowJar` を含める。Adventure の `Component`・`ClickEvent`、Bukkit のスケジューラとコマンドマップを利用する。
- 外部 API の URL は `https://api.schematic.cloud/download/<ID>` に固定され、設定で変更できない。この API で取得できる ID が必要。期限切れ ID などの専用判定はなく、HTTP ステータスや通信例外として扱う。API の現在の稼働・ID の仕様は未確認。
- FastAsyncWorldEdit のクラスは呼ばず、保存ディレクトリとコピー用コマンドだけを連携点にする。プラグインの存在・有効状態や、送信者の `/schematic load` 権限を確認しない。

### テストが保証する範囲・既知の制限

Vertex のテストソースはない。今回確認したのはコード・リソース・共通ビルド設定と Nix のパッケージ定義までで、ビルド、実通信、ゲーム内表示、FastAsyncWorldEdit でのロード・貼り付けは未確認。

ID の形式検証、取得データの形式検証、同時実行の制御、バックアップ、設定の再読み込み、移行コマンドはない。原子的移動の対応状況・保存権限や外部 API に失敗するとダウンロードが失敗する。

## 確認の記録

- 2026-10-12: 配下の全6ファイルを照合。旧資料の「op限定」を OP または `group.blue` に訂正し、上書き・保存失敗・時間制限と未確認範囲を記録した。ゲーム内での確認は未実施。
- 2026-10-12: レビュー指摘を全6ファイルと Java の `Files.move` 仕様で再確認。上書きの断定を環境依存に訂正し、固定 API・URL 引数の意味、保存先の共有、結果待ち・再実行、ログアウトによる取消がないことを読者別に追記した。実通信・実行環境での上書き・退出後の表示は未確認。
