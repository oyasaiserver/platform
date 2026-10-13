---
title: "OyasaiToken — トークン台帳"
status: active
source: plugins/OyasaiToken/（コードから作成。ゲーム内での確認は未実施）
source_of_truth: "plugins/OyasaiToken/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: bukkit-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiToken

SQLite を使うトークン残高プラグインです。`TokenManager` 互換 API としても公開します。

- 使い方: [プレイヤー向け](player.md) / [運営向け](operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiToken/` |
| 主要コード | `OyasaiTokenPlugin.kt`（起動・コマンド・SQLite・API 登録・イベント）、`TokenLedger.kt`（残高変更とキュー受付）、`LegacyDataMigration.kt`（旧フォルダコピー）、`NotificationSettings.kt`、`TabPlaceholderIntegration.kt` |
| API | `api/`（OyasaiToken の通常 API・commit 確認 API・サービス API）、`me/realized/tokenmanager/api/`（互換インターフェース・イベント）、`me/realized/tm/api/TMAPI.kt`（旧静的 API） |
| テスト | `src/test/kotlin/io/oyasai/oyasaitoken/`。`LegacyDataMigrationTest` は旧フォルダ全体コピー・既存フォルダ非上書き・失敗後の再試行・旧フォルダ不在を確認。`TokenLedgerTest` は残高変更、移送、自己送金、負数・不足・オーバーフロー、キュー拒否、初期残高、名前更新、完了 future の受け渡しを確認。Bukkit コマンド・SQLite transaction・YAML 取り込み・イベント・TAB 連携のテストはない |
| ビルド | `nix develop --command gradle :plugins:OyasaiToken:build`（`plugins/OyasaiToken/build/libs/OyasaiToken.jar`） |
| Nix package | `packages/oyasai-plugins.nix` が `OyasaiToken.jar` を生成し、小文字属性 `oyasaitoken` で公開。`packages/oyasai-minecraft-main.nix` がその属性を選択する |

## 技術仕様

### 構成

- `plugin.yml` の `name` は `OyasaiToken`、`provides` は `TokenManager`、`softdepend` は `TAB`。コマンドは `token` だけで、`/tm` alias は宣言していない。`paper-plugin.yml` はない。
- Gradle は Purpur 開発バンドル、Kotlin stdlib と SQLite JDBC を implementation（ShadowJar で jar に同梱）、TAB API を compileOnly にする。ルート Gradle は ShadowJar を使い、通常の `jar` を無効化して名前を `OyasaiToken.jar` にする。
- 起動時は `onLoad` で必要なら旧 `TokenManager` データフォルダをコピーする。`onEnable` で設定と通知設定を読み、SQLite を開いて schema を用意し、残高と取引番号を読み込む。任意の `data.yml` 取り込み後、永続化ワーカー、ServicesManager API、イベント、TAB placeholder、`/token` を登録する。
- `onDisable` は永続化ワーカーの停止とキュー drain を最大設定秒数待ち、完了後に SQLite を閉じる。時間切れでワーカーが動作中なら接続をすぐ閉じず、後続クローザーへ委ねる。

### 主要な処理の流れ

1. `TokenLedger` のロック内で残高を確認し、永続化 job を有界キューへ投入する。
2. キュー受付に成功した場合だけメモリ残高を更新し、API の変更イベントをメインスレッドへ送る。受付拒否では台帳を更新しない。
3. `OyasaiToken-DB-Writer` が FIFO で job を一つずつ実行し、残高・取引行・通知 outbox・checkpoint を一つの SQLite transaction に書く。
4. キュー受付された操作の commit 確認 future は transaction 結果で完了する。受付拒否やサービス API の数量0などの例外は「外部 API・依存」を参照。従来 API の Boolean はキュー受付結果で、commit 結果ではない。

送金の debit と credit は一つの job に入り、両方の残高を先にメモリ台帳へ反映してから二つの balance-change event を送ります。自己送金は debit 行と credit 行を記録しますが、残高は変わりません。

### データ形式と永続化

既定 DB は `plugins/OyasaiToken/tokens.db` です。SQLite の WAL、foreign keys、既定5,000ms busy timeout を使います。

| テーブル | 内容 |
|---|---|
| `token_balances` | UUID を主キーにした名前、0以上の残高、作成・更新時刻 |
| `token_transactions` | 取引 ID、UUID、差分、変更後残高、理由、実行者 UUID、時刻 |
| `token_notification_outbox` | commit 済み変更の通知先・種別・差分・残高・作成／配信時刻 |
| `token_legacy_ids` | 旧データの識別子種別・識別子と移行先 UUID |
| `schema_meta` | 最終適用取引 ID、data.yml 取り込み済み印など |

各 job は SQLite transaction を使います。再利用された job の全取引 ID がすでに存在する場合は重複としてスキップし、一部だけ重複する場合は job 全体を rollback します。これは未 commit の変更がクラッシュ時に失われない保証ではありません。

### 起動時移行

- `plugins/OyasaiToken/` がまだ存在せず、兄弟の `plugins/TokenManager/` がある場合だけ、全内容を一時フォルダへコピーしてから移動します。旧フォルダは保持し、コピー先が存在する場合は上書き・マージしません。コピーが失敗すると新フォルダを公開せず、プラグインは DB を開く前に有効化を拒否します。
- `migration.import-tokenmanager-data-yml` は同梱 `config.yml` では `false` ですが、`migrationImportPreflight` の `getBoolean` の fallback は `true` です。キーのない `config.yml`（旧フォルダコピーで持ち込まれた旧設定など。`saveDefaultConfig` は既存ファイルを上書きしない）では取り込みが有効になります。有効時は `plugins/OyasaiToken/data.yml` の `Players` を起動時に処理し、既に移行済み印がある、DB に残高がある、入力がない場合はスキップします。
- 取り込み時、非 UUID キーはプレイヤー名として解決し、UUID キーは UUID として扱います。値を数値化できない場合は0、負数は0です。別々の旧識別子が同じ UUID に解決された場合、後の UPSERT が残高を上書きします。
- 既定では import 前に WAL を FULL checkpoint し、DB 本体と存在する `-wal`・`-shm` をバックアップします。import と移行済み印は同一 transaction で保存します。
- 取り込んだ各項目は理由 `migration:data.yml`・差分0の取引行と `token_legacy_ids`（source `data.yml`）の行を作ります。取り込みは `onEnable` のメインスレッドで同期実行し、永続化ワーカー起動前に終わります。
- MariaDB からの変換は別ツール `plugins/OyasaiToken/tools/migrate_tokenmanager_to_sqlite.py` が扱います。プラグイン本体は MariaDB に接続しません。ツールは `schema_meta` に `tokenmanager_data_yml_imported_at`・`last_applied_tx_id=0`・`migration_source`・`migrated_at` を書くため、生成 DB では `data.yml` 取り込みが常にスキップされます。`token_notification_outbox` は作らず、プラグインの `ensureSchema` が作ります。
- 変換ツールの dry-run は集計確認で、起動可能性の検証ではありません。UUID は文字列のまま扱い、本実行でも妥当性を検証しないため、不正 UUID の DB を作れても `OyasaiTokenPlugin.kt` の `loadBalances` で `UUID.fromString` が失敗します。dry-run は SQLite 書き込みをしないので、処理後の残高の符号付き64ビット整数範囲超過も検出しません。投入前の UUID・残高範囲確認と、生成 DB の照合・検証環境での起動確認が必要です。

### 同期・非同期

- 残高キャッシュとコマンド処理は Bukkit の呼び出しスレッド上で動きます。SQLite の永続化は単一 `ThreadPoolExecutor`（既定キュー上限4096）へ送ります。
- 既定値の初回作成やプレイヤー名の更新もキュー投入後にキャッシュへ反映します。読み取り時の初回作成をキューが受け付けない場合は設定既定値を返しますが、そのアカウントをキャッシュへ登録しません。
- SQLite 書き込み失敗ではログを出して commit future を `false` にしますが、キュー投入時に更新したメモリ残高を戻しません。再起動後は DB に残る値がロードされます。
- 後続操作はメモリ残高から計算し、`writeBalanceRows` が残高全体を UPSERT します。残高100への加算10が保存失敗した後、加算1が保存成功すると DB は111になります。失敗分を含む残高が後から保存されても、失敗した取引行・通知は復元されません。失敗を根拠に再実行すると二重加算になり得るため、後続操作も含めて照合します。
- 同じ executor・キューで、ログイン時の保留通知取得と `delivered_at` 更新（`submitDatabaseTask`）も実行します。通知タスクもキュー容量を使い、満杯なら警告して捨てます（保留通知は次回ログインまで残る）。
- 停止時の drain は既定10秒です。タイムアウト後も worker が動いている間は SQLite 接続を閉じず、daemon スレッド `OyasaiToken-DB-Closer` がさらに最大60秒待ってから閉じます。`shutdown()` 後の enqueue は `RejectedExecutionException` になり、ログはキュー満杯と同じ `Token persistence queue is full; rejected tx …` です。hard crash では未 commit の末尾 job が失われる可能性があります。
- `runOnMainThread` は無効化後に何もしないため、停止中に完了した job のコマンド結果メッセージ・通知は送られません。
- 停止待ち秒数は `onDisable` で設定を読むため reload 後の停止に反映します。DB 接続設定・キューサイズは reload で作り直しません。

### コマンド・イベント

- `/token` のプレイヤー機能は残高確認、送金、top。管理操作は `add`、`addall`、`remove`、`set`、`reload`。`token.use` / `token.admin` の権限と既定値は [operator.md](operator.md) を参照。
- `PlayerJoinEvent` で残高を読み（未登録なら初期残高の行を作り、名前が変わっていれば `name-update` を保存）、20 tick 後に通知が有効なら保留通知を取得します。
- `TMTokenBalanceChangeEvent` は残高操作 job がキュー受付された時点で発火し、SQLite commit より前の場合があります。呼び出し元がメインスレッドなら同期的に、それ以外なら次 tick にメインスレッドで発火し、listener の例外はログに出して握りつぶします。`reason` は `add`・`remove`・`set` で、送金は `remove`（送り手）→ `add`（受け手）の2回です（自己送金も2回）。残高読取による初回アカウント作成と YAML import はこのイベントを発火しません。
- `TMTokenSendEvent` は送金先がオンラインのときだけ、transfer 前に発火します。残高・上限の判定より前なので、キャンセルされなかった送金がその後残高不足で失敗することがあります。キャンセルされると transfer は開始しません。
- TAB が有効な場合 `%tm_tokens_commas%` を TAB native player placeholder（refresh `-1`）として登録し、残高を桁区切りで表示します。値は `TMTokenBalanceChangeEvent`・TAB の `PlayerLoadEvent`・`TabLoadEvent`（TAB reload）で更新します。値の取得は `getBalance` なので未登録アカウントの初期化を伴います。TAB event bus が利用できない場合は警告し、placeholder を登録しません。
- tab 補完は権限に応じたサブコマンド、第2引数のオンラインプレイヤー名、`add`/`remove`/`set` の第4引数 `-s` です。

### 外部 API・依存

- ServicesManager は `OyasaiTokenApi`（既存 Boolean API）、`OyasaiTokenCommitApi`（加算 commit 確認）、`OyasaiTokenService`（非同期 charge/grant と commit 確認）、旧 `TokenManager` interface を公開します。
- `OyasaiTokenService` の `charge` / `grant` は、正の数量の操作がキューに受理された場合、その SQLite transaction の保存結果を待って `TokenResult` の future を完了します。数量0は `Success(balanceOf(uuid), 0)`、負数は `Failed`、残高不足・受付拒否も保存を待たず完了します。`balanceOf` は同期でメモリ残高を返し、未知アカウントの初期残高保存をキューへ依頼しますが commit は待ちません。数量0や残高不足時の初期化も同様です。
- `TokenRequest(uuid: UUID, amount: Long, playerName: String? = null, delivery: Delivery = Delivery.Silent)` の `amount` は0以上、`playerName` は保存名の更新用です。`Delivery.Silent` は通知を作らず、`Delivery.Default` は通知設定が無効でも outbox へ記録します（数量0は記録しない）。配信は通知設定が有効な場合だけで、オフライン・通知無効時の保留分は通知を有効にした後のログイン時に取得します。

| `TokenResult` | 値・意味 |
|---|---|
| `Success(newBalance: Long, delta: Long)` | 操作後残高と符号付き増減。正の数量の受理操作では保存成功、数量0では保存を待たない現在値 |
| `InsufficientFunds(balance: Long, required: Long)` | `charge` の残高不足。判定時の残高と必要数量 |
| `Failed(reason: String)` | 負数、キュー拒否・加算上限超過などの受付拒否、または保存失敗。保存失敗でもメモリ残高は戻らない |

- future の完了処理は Bukkit メインスレッドとは限らず、受理操作は DB ワーカー、即時結果は呼び出し元で完了し得ます。Bukkit 操作は呼び出し側でメインスレッドへ切り替え、待ち時間を制限したい場合は独自にタイムアウトを設けてください。メインスレッドで待機せず、タイムアウトを操作取消や保存失敗とみなさないでください。
- `OyasaiTokenCommitApi.addTokensWithCommit(uuid, amount)` は受理操作の保存成功で `true`、受付拒否・保存失敗で `false` を返します。サービス API と異なり数量0も台帳へ渡し、受理された場合は保存結果を待ちます。
- `me.realized.tm.api.TMAPI` は旧 static API の入口です。数量は `Int`。`addTokens`・`setTokens` は戻り値なし（受付拒否は呼び出し側に分からない）、`removeTokens` は Boolean、`addTokensWithCommit` は `OyasaiTokenCommitApi` へ委譲し、未提供なら `false` で完了します。`OyasaiTokenApi` がなければ ServicesManager の `TokenManager` provider か `TokenManager` という名前のプラグインへフォールバックします（その場合 `removeTokens` はオンラインプレイヤーだけ、`getTokens(UUID)` はオフラインなら0）。旧 `TokenManager` API の `addTokens` / `removeTokens` Boolean は永続化キューへの受付結果で、`setTokens` は受付拒否をログへ記録します。
- `setTokens` に負数を渡すと UUID / Player 版は `IllegalArgumentException`、名前版は0へ補正します。UUID / Player 版の従来 `addTokens` は通知なし、名前版は通知設定が有効かつ `silent=false` のとき通知します（`silent` なしの名前版は `false` として扱う）。
- 実装・descriptor 上の外部連携は Purpur API、SQLite JDBC、TAB API です。PlaceholderAPI や Vault の provider / placeholder は実装していません。

### 標準通知

- `notifications.yml` は既定無効です。通知対象の加算・減算・残高設定は commit 後にオンライン対象へ配信し、未配信分はログイン後に取得します。1件なら個別文面、複数件なら件数と合計増減の要約です。呼び出し元ごとの通知条件は [operator.md](operator.md) を参照。
- `NotificationSettings.kt` は保存された `balance_after` を表示し、配信時の台帳を読み直しません。要約は最後の保留通知の残高です。通知付き加算後に通知なし減算があれば、ログイン通知と現在残高が異なり得ます。
- `OyasaiTokenPlugin.kt` はメッセージ送信後、別の非同期 DB タスクで `delivered_at` を更新します。更新前のクラッシュ、キュー拒否、DB エラーでは送信済み通知が次回ログイン時に再配信され得るため、一度だけの配信は保証しません。

### テストが保証する範囲

- `LegacyDataMigrationTest` はファイルシステム上のコピー完了、ネストした DB と sidecar の保持、既存コピー先の非上書き、失敗時の staging cleanup と再試行を確認します。
- `TokenLedgerTest` はメモリ台帳の計算、atomic transfer の enqueue、同一 UUID の送金、負数・不足・加算 overflow、queue rejection 後の不変、初期残高・名前更新、completion future を確認します。
- SQLite transaction の動作、コマンド応答・権限、YAML import、notification outbox、イベント dispatch、TAB、サーバー上での API 統合はこれらの unit test では保証されません。この資料作成では実機テストを行っていません。

### 既知の制限

- 永続化キューは有界で、満杯なら fail-fast します。キュー投入後の DB commit が失敗しても、legacy API では成功したように見える場合があり、メモリ台帳も rollback しません。
- `addall` はオンラインプレイヤーだけを対象にし、キュー受付人数を結果表示に使います。各 DB commit を待ちません。
- 通知は `notifications.yml` で既定無効です。送金通知は outbox へ記録せず、保存後の通知処理時に送金先がオンラインの場合に限り、その場で送信します。
- `plugin.yml` に `/tm` alias はありません。旧名 `TokenManager` はプラグイン提供名・API 互換用です。
- 旧 shop/worth、Vault Economy provider、PlaceholderAPI 残高拡張、複数サーバー共有 DB はありません。
- SQL / 起動・移行例外、イベント listener の実機挙動や、TAB の実環境表示は未確認です。

### 既存資料との食い違い

`plugins/OyasaiToken/DESIGN_COMPARISON.md` は `/tm` と `/tm transfer confirm` を現行機能のように記載し、`TESTPLAN.md`、`MANUAL_TEST_CHECKLIST.md`、`tools/RUNBOOK.md` にも `/tm` の例があります。現在の `plugin.yml` は `/tm` alias を宣言せず、`OyasaiTokenPlugin.kt` に `transfer` サブコマンドはありません。これらのコマンド例は現行の使い方として扱わず、本書と運営ガイドを参照してください。`api/OyasaiTokenService.kt` の KDoc にある「すべて commit 後に完了」「Failed なら永続的変更なし」も、数量0・初期化・保存失敗後の後続操作には当てはまりません。契約はコメントだけでなく実装と照合してください。`config.yml` のコメント・同梱値（`import-tokenmanager-data-yml: false`）も、キー欠落時の fallback `true` とは一致しません。

