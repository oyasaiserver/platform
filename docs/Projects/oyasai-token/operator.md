---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiToken/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiToken の運用（運営向け）

プレイヤー向けの操作は [player.md](player.md)、内部仕様は [PROJECT.md](PROJECT.md) を参照。

## 権限

| 権限 | 既定 | できること |
|---|---|---|
| `token.use` | 全員 | 自分の残高確認、送金、ランキング |
| `token.admin` | OP | 他プレイヤーの残高確認、残高の加算・減算・設定、オンライン全員への加算、設定再読込 |
| `tokenmanager.use` | 全員 | 旧権限名。`token.use` を付与 |
| `tokenmanager.use.send` | 全員 | 旧権限名。`token.use` を付与 |
| `tokenmanager.admin` | OP | 旧権限名。`token.admin` を付与 |

権限はコマンドに対して確認します。プラグイン API を呼び出す他プラグインの操作は、このコマンド権限では制限されません。

## コマンド

OyasaiToken は `/tm` alias を宣言していません。コマンド名は `/token` です。

| コマンド | 権限 | 動作・制限 |
|---|---|---|
| `/token`、`/token balance` | `token.use` | 実行者の残高を表示 |
| `/token balance <player>` | `token.admin` | 対象の残高を表示。コンソールからも対象名を指定して実行可能 |
| `/token send <player> <amount>` | `token.use` | プレイヤー専用。正の数量を送る。相手がオンラインなら送金イベントを発火 |
| `/token top [n]` | `token.use` | 上位残高を表示。既定10件、表示数は1〜50件。整数以外は10件として扱う |
| `/token add <player> <amount> [-s]` | `token.admin` | 対象へ加算。数量は0以上。`-s` は通知を抑止 |
| `/token remove <player> <amount> [-s]` | `token.admin` | 対象から減算。数量は0以上。残高不足なら拒否。`-s` は通知を抑止 |
| `/token set <player> <amount> [-s]` | `token.admin` | 残高を設定。数量は0以上で、0に設定できる。`-s` は通知を抑止 |
| `/token addall <amount>` | `token.admin` | 実行時点でオンラインの全員に正の数量を加算 |
| `/token reload` | `token.admin` | `config.yml` と通知設定を再読込 |

`add`・`remove`・`set` の保存成功時は `<名前またはUUID>: <残高> tokens` と表示します。同じプレイヤーが自分の残高を変更し、通知が有効で増減がある場合は通知文面を使います。`addall` は全件受付時に `<件数> 人に <数量>P 付与しました`、一部だけ受付時に `<受付件数> 人に <数量>P 付与しました（<失敗件数> 人は付与失敗）` と表示します。

コマンドの `<player>` には名前または UUID を指定できます。UUID として解釈できる入力は名前解決より先に処理します。名前の場合はオンライン完全一致の後、Bukkit のオフラインプレイヤー解決を使います。対象が見つからない場合に拒否する処理はありません。未登録名への残高問い合わせは初期残高のアカウントを作る場合があり、誤った名前での管理操作は意図しない対象に作用し得るため、実行前に対象を確認してください。

### コマンドの失敗・境界

| 表示 | 意味 |
|---|---|
| `You do not have permission.` | 必要なコマンド権限がありません。 |
| `This command is player-only.` | `/token send` はプレイヤー専用です。 |
| `Usage: /token balance <player>` | コンソールから残高を調べる場合は対象を指定してください。 |
| `Usage: /token balance [player]` | `/token balance` の引数が多すぎます。 |
| `Usage: /token top [n]` | `/token top` の引数が多すぎます。 |
| `Usage: /token addall <amount>` | `/token addall` の数量がないか、正の整数ではありません。 |
| `Amount must be non-negative.` | 管理操作の数量が整数の0以上ではありません。 |
| `Usage: /token add <player> <amount> [-s]`、`Usage: /token remove <player> <amount> [-s]`、`Usage: /token set <player> <amount> [-s]` | 管理操作の引数が違います。 |
| `Usage: /token reload` | `/token reload` の引数が多すぎます。 |
| `Amount must be positive.` | 送金数量が整数の正数ではありません。 |
| `Amount is outside the send limit.` | `send-amount-limit` の範囲外です。 |
| `Token send was cancelled.` | オンラインの送金先に対する `TMTokenSendEvent` がキャンセルされました。 |
| `Not enough tokens.` | 送金を拒否しました。残高不足のほか、送金先残高の上限超過や永続化キューの満杯でも同じ表示になります。 |
| `Not enough tokens or token persistence queue is full.` | 管理者の減算が、残高不足またはキュー満杯で受け付けられませんでした。 |
| `Token persistence queue is full.` | 管理者の加算・設定を永続化キューへ追加できませんでした。計算上限に達した加算もこの表示になります。 |
| `Token persistence failed; no target notification was delivered.` | キュー投入後の SQLite 保存に失敗しました。メモリ上の残高は自動で巻き戻りません。DB とログを確認してください。 |
| `Token persistence failed; no send notifications were delivered.` | 送金の SQLite 保存に失敗しました。DB とログを確認してください。 |
| `OyasaiToken config reloaded.` | 通知設定の再読込に成功しました。`config.yml` の読込結果はこの表示に含まれないため、`config.yml` を直したときはログも確認してください。 |
| `対象なし` | `/token addall` 実行時にオンラインプレイヤーがいません。 |
| `notifications.yml is invalid; previous notification settings kept.` | 再読込した通知設定が不正です。前回有効だった通知設定を維持します。 |

未対応サブコマンドでは `Usage: /token [balance|send|top|add|remove|set|reload]` と表示します。この usage 表示には、実装されている `addall` が含まれていません。

`/token addall` の完了人数は SQLite のコミット数ではなく、永続化キューに受け付けられた人数です。後続の書き込み失敗はログで確認してください。`add`・`remove`・`set` と送金は、キュー投入後のコミット結果を待ってコマンド結果を返します。

## 設定と既定値

`plugins/OyasaiToken/config.yml` は、存在しない場合に起動時に作成されます。既存のファイルは上書きしません。

**キーがないときの既定に注意:** `config.yml` に項目がない場合はコード内の既定値を使います。下表の既定値とほぼ同じですが、`migration.import-tokenmanager-data-yml` だけはキーがないと `true`（取り込み有効）になります。旧フォルダのコピー（後述）で旧 `TokenManager` の `config.yml` が持ち込まれた場合などは、このキーを明示的に `false` に書いてから起動してください。

| 項目 | 既定値 | 内容 |
|---|---:|---|
| `default-balance` | `25` | 新規アカウントの初期残高。負数は0として扱う |
| `database.file` | `tokens.db` | SQLite ファイル名 |
| `database.busy-timeout-ms` | `5000` | SQLite の busy timeout（ミリ秒） |
| `persistence.queue-size` | `4096` | 永続化ワーカーの待ち行列上限。実行時は最低1 |
| `persistence.shutdown-await-seconds` | `10` | 停止時にキュー完了を待つ秒数。実行時は最低1 |
| `migration.import-tokenmanager-data-yml` | `false` | 旧 `data.yml` の起動時取り込み。同梱設定では無効。**キーがないと有効** |
| `migration.backup-before-import` | `true` | 取り込み前に既存 DB と SQLite sidecar をバックアップ |
| `migration.backup-directory` | `migration-backups` | バックアップ先。既定ではプラグインデータフォルダ内 |
| `send-amount-limit.min` | `1` | 送金額の最小値 |
| `send-amount-limit.max` | `-1` | 送金額の最大値。負数は上限なし |

`/token reload` は設定ファイルを読み直しますが、DB 接続先や起動時に作った永続化ワーカーを作り直さず、移行を再実行しません。`database.file`、`database.busy-timeout-ms`、キューサイズの変更と `migration.*` の処理は再起動後に反映されます。`default-balance` と送金額の範囲は再読込後の API・コマンドで読み直されます。`persistence.shutdown-await-seconds` は停止時に設定を読むため、再読込後の停止から反映されます。

通知設定は `plugins/OyasaiToken/notifications.yml` にあります。

| 項目 | 既定値 | 内容 |
|---|---|---|
| `schema-version` | `1` | 必須の設定形式バージョン |
| `enabled` | `false` | 標準通知の有効・無効 |
| `messages.add` | `{amount}トークンを受け取りました。現在の残高は{balance}トークンです。` | 加算通知 |
| `messages.remove` | `{amount}トークンが差し引かれました。現在の残高は{balance}トークンです。` | 減算通知 |
| `messages.set` | `トークン残高が{balance}トークンに変更されました（増減: {delta}）。` | 残高設定通知 |
| `messages.summary` | `ログアウト中に{count}件のトークン変更があり、合計{delta}トークンでした。現在の残高は{balance}トークンです。` | オフライン中に複数通知がたまった場合 |

`{amount}` は絶対値、`{delta}` は符号付き増減、`{balance}` は変更後残高、`{count}` は保留通知数です。未設定または空の文面は既定文面に戻ります。初回読込で形式が不正なら通知を無効にしてログへ記録し、再読込で不正なら前の有効設定を維持します。

`{balance}` は通知対象の変更時に保存した `balance_after` であり、配信時に台帳を読み直した値ではありません。複数件の要約も最後の保留通知の値を使います。オフライン中の通知付き加算後に通知なし減算がある場合など、ログイン時の通知残高と `/token balance` が異なることがあります。

通知が有効なとき、管理者の `add`・`remove`・`set` は `-s` を付けなければ outbox に通知を記録します。`addall` は通知なし、`/token send` は送金先へその場で直接通知し、outbox には記録しません。`OyasaiTokenService` の `Delivery.Default` は通知が無効でも outbox に記録し、通知を有効にした後の次回ログイン時に配信します。通知の再読込だけでは、すでにオンラインのプレイヤーに保留分を再取得させません。

保留通知はログイン後に取得し、1件なら個別、複数件なら件数と合計増減をまとめて配信します。送信後の配信済み記録は別の非同期 DB タスクです。記録前のクラッシュ、キュー拒否、DB エラーでは次回ログイン時に再配信され得るため、一度だけの配信は保証しません。

## 保存先とデータ

- 既定の残高 DB は `plugins/OyasaiToken/tokens.db` です。DB 名は `database.file` で変えられます。
- `token_balances` に UUID・名前・残高を保存します。残高列は0以上の整数です。ログイン時に未登録なら初期残高で行を作り、名前が変わっていれば更新します。
- `token_transactions` に UUID・差分・変更後残高・理由・実行者 UUID・時刻を記録します。理由（`reason`）は `add`・`remove`・`set`、初期作成の `default`、名前更新の `name-update`、`data.yml` 取り込みの `migration:data.yml` です。送金は送り手の `remove` と受け手の `add` の2行で、送金専用の理由はありません。実行者 UUID はプレイヤーが打った `add`・`remove`・`set` だけに入り、コンソール・`addall`・送金・API では空です。
- `token_notification_outbox` に通知対象・内容・配信時刻を保存します。
- `token_legacy_ids` に旧識別子と UUID の対応、`schema_meta` にスキーマ関連情報と移行済み印を保存します。
- SQLite は WAL モード、外部キー制約、有効化した busy timeout を使います。
- 移行前バックアップは既定で `plugins/OyasaiToken/migration-backups/` に置き、DB 本体のほか存在する `-wal`・`-shm` もコピーします。

## 起動・移行

### 旧データフォルダのコピー

`plugins/OyasaiToken/` が存在せず、隣に `plugins/TokenManager/` がある場合、`onLoad` で旧フォルダ全体を新フォルダへコピーします。入れ子のフォルダや SQLite sidecar も対象です。旧フォルダは残り、コピー先がすでに存在する場合は上書きもマージもしません。コピーは一時フォルダで完了してから移動し、失敗時は一時フォルダを削除します。コピー失敗後はトークン DB を開かず、プラグインの有効化が失敗します。

旧フォルダの全ファイルをコピーするため、旧設定に秘密情報が含まれていないか非公開の作業環境で確認してください。新フォルダが存在するとコピー処理は行われません。

コピーされた旧 `config.yml` はそのまま OyasaiToken の `config.yml` として使われます（同梱の既定ファイルで置き換えません）。旧設定に同名のキーがあればその値が効き、`migration.import-tokenmanager-data-yml` がなければ取り込みが有効になります。旧 `config.yml` の中身はこの資料では確認していません。

### 旧 `data.yml` の起動時取り込み

`migration.import-tokenmanager-data-yml` が有効な場合（`true`、またはキーがない場合）だけ、起動時に `plugins/OyasaiToken/data.yml` の `Players` セクションを SQLite に取り込みます。各項目は `token_transactions` に理由 `migration:data.yml`・差分0の行としても記録され、`token_legacy_ids` に旧識別子と UUID の対応が残ります。UUID キーは UUID として扱い、それ以外はプレイヤー名として解決します。数値化できない値は0、負数は0として保存します。取り込みは次の場合にスキップします。

- `schema_meta.tokenmanager_data_yml_imported_at` がすでにある
- SQLite に残高がすでに読み込まれている
- `data.yml`、`Players`、またはプレイヤー項目がない

既定では取り込み前バックアップが有効です。取り込みは一つの SQLite transaction で行い、成功後に移行済み時刻を記録します。壊れた YAML、バックアップ失敗、SQLite エラーが起動時の取り込み中に発生した場合、プラグインの有効化が失敗することがあります。手動再取り込みコマンドはありません。

別々の旧識別子（UUID と名前など）が同じ UUID に解決された場合、後に処理した項目の残高で上書きします。残高を合算する処理はないため、取り込み前に同一人物の重複項目を確認してください。

MariaDB からの移行はこの `data.yml` 取り込みとは別です。`plugins/OyasaiToken/tools/migrate_tokenmanager_to_sqlite.py` はヘッダーなしの UUID・残高 TSV から新しい SQLite DB を作ります。`--output` は既存ファイルでない必要があり、名前補完用の `--names`、負残高の `--negative clamp|skip|fail`、DB を作らない `--dry-run` を指定できます。既定の負残高処理は `clamp`、TSV 内で UUID が重複した場合は先に出た行を使います。生成した DB には `data.yml` 取り込み済みの印（`schema_meta.tokenmanager_data_yml_imported_at`）を書き込むため、その DB を使うと設定に関係なく `data.yml` の起動時取り込みは行われません。取引履歴・通知用のテーブルは空（通知テーブルは OyasaiToken の起動時に作成）で始まります。まずは新しい出力名で dry-run し、集計を確認してから `--dry-run` を外して実行します。

dry-run は列数・数値・負残高方針と集計を確認するもので、起動可能な DB の検証ではありません。UUID の妥当性は本実行でも検証せず、不正な UUID を含む DB を作成できてもプラグインの初期ロードで失敗します。dry-run は SQLite に書き込まないため、処理後の残高が符号付き64ビット整数の範囲（0〜9,223,372,036,854,775,807）を超えていても検出しません。投入前に UUID・残高範囲を確認し、生成した DB の照合と検証環境での起動確認を行ってください。

```sh
python3 plugins/OyasaiToken/tools/migrate_tokenmanager_to_sqlite.py \
  --input export.tsv --output tokens-converted.db \
  --names usercache.json --negative clamp --dry-run
```

エクスポートは旧プラグインをクリーン停止した後に行います。エクスポート用スクリプトは接続先などの環境固有情報を含むため、実行前に非公開環境で内容を確認してください。TSV と dry-run 出力にはプレイヤー UUID・残高が含まれるため、公開場所へ置かないでください。

`plugins/OyasaiToken/tools/RUNBOOK.md` などの既存手順書には、現在提供していない `/tm` の例があります。移行・検証コマンドは本書の現行仕様と照合してください。現在のコマンドは `/token` で、`/tm transfer confirm` に相当する手動取り込みコマンドもありません。

## 障害時・停止時

- DB 接続やスキーマ作成、初期ロードに失敗するとプラグインは有効化できません。`latest.log` の OyasaiToken エラーと DB ファイルを確認してください。
- 残高変更は単一ワーカーの有界キューへの投入に成功してから、SQLite 保存完了を待たずにメモリ台帳を更新します。キューが満杯なら変更を受け付けず、メモリ残高も変わりません。
- キューに受け付けた後で SQLite transaction が失敗しても、メモリ残高は自動で戻りません。コミット確認 API は `false` / `Failed` を返しますが、旧 Boolean API はキュー受付時点の結果です。ログに `Failed to persist token job ${job.entries.first().txId}-${job.entries.last().txId}.` が出たら、ゲーム内残高を確定値とみなさず DB の状態を照合してください。
- 後続の変更はメモリ残高を元に計算し、その残高全体を DB へ保存します。残高100への加算10の保存が失敗してメモリ110・DB100になった後、加算1の保存が成功すると DB は111になります。失敗した10の取引行・通知が復元されるわけではありません。失敗表示だけを根拠に再実行すると二重加算につながるため、後続操作を含めてメモリ・DB・取引履歴を照合してください。
- ハードクラッシュでは、メモリで受け付け済みでも SQLite に未コミットの末尾変更が失われることがあります。取引 ID による重複スキップは、未コミット変更の消失を防ぐものではありません。
- 同一ジョブの全取引 ID が DB に存在すれば重複としてスキップします。一部だけ重複しているジョブは transaction を失敗させます。
- 通常停止ではキュー完了を既定10秒待ちます。時間切れは `Timed out waiting ${timeoutSeconds}s for token persistence queue to drain. Remaining jobs: ${persistenceExecutor.queue.size}` と警告し、ワーカーが動いている間は DB 接続を閉じません。その後さらに最大60秒待って閉じ、それでも終わらなければ `Token persistence worker is still running; SQLite connection remains open.` を出します。
- 停止処理が始まった後の残高変更は保存キューに入らず拒否されます。このときのログも `Token persistence queue is full; rejected tx …` となり、キュー満杯と区別できません。
- 保存キューは、ログイン時の保留通知の取得と配信済み記録にも使われます。キューが満杯で取得できなかった保留通知は、次のログインまで配信されません。
- `/token send` の画面上の失敗表示は残高不足、保存キューの拒否、送金先残高の数値上限を区別しません。運営コマンドの表示も上表のとおり複数原因をまとめる場合があります。

## 守られる範囲・守られない範囲

- **守る範囲:** SQLite の各 persistence job は transaction で残高と取引履歴を保存します。送金の両側は一つの job に含まれ、片側だけのコミットを避けます。保存残高は0未満にならず、キュー満杯時は fail-fast します。
- **保証しない範囲:** 複数サーバー間での共有台帳、ハードクラッシュ直前に未コミットだった変更の保持、SQLite transaction 失敗後のメモリ台帳の巻き戻しはありません。旧 API の Boolean はディスクへのコミット保証ではありません。
- 権限はコマンド利用を制御します。サーバー上で API を呼べるプラグインの操作をプレイヤー権限で制限する仕組みではありません。
- OyasaiToken は Vault Economy provider、ショップ・価値判定、PlaceholderAPI の残高展開を登録しません。TAB が有効な場合は TAB の `%tm_tokens_commas%` プレイヤー placeholder を登録します。

## 他プラグインとの連携

- `plugin.yml` はプラグイン名 `OyasaiToken`、`provides: [TokenManager]`、`softdepend: [TAB]` を宣言します。`paper-plugin.yml` はありません。
- Bukkit ServicesManager に `OyasaiTokenApi`、`OyasaiTokenCommitApi`、`OyasaiTokenService`、旧 `TokenManager` を登録します。
- `me.realized.tm.api.TMAPI` は旧静的 API 名を提供します。`removeTokens(UUID, Int)` の結果は Boolean で返ります。
- `TMTokenBalanceChangeEvent` は台帳の変更が永続化キューに受理された後にメインスレッドで発火します。SQLite commit 前の通知であり、DB 保存完了を意味しません。
- `TMTokenSendEvent` は送金先がオンラインの場合だけ送金前に発火し、キャンセルできます。オフライン送金では発火しません。
- TAB は compileOnly / softdepend です。PlaceholderAPI や Vault の API・依存宣言はありません。

