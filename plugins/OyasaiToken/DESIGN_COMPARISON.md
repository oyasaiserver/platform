# TokenManager vs OyasaiToken 対比・設計理由ドキュメント

Codex(gpt-5.5)が作成、Gemini(3.1 Pro High)が正確性・網羅性をレビューし、指摘を反映した最終版。

---

## 第1部: TokenManager(サードパーティ版) vs OyasaiToken(自作版) 対比表

| 観点                               | TokenManager(サードパーティ版)                                                                                                                                                                                                         | OyasaiToken(自作版)                                                                                                                                                                                                                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| データベース/ストレージ方式        | フル機能の経済プラグイン。MySQL/MariaDB対応を持ち、旧データは `data.yml` 系として扱われる。本番Nix registryにはまだ `tokenmanager.jar` が残っている。                                                                                  | SQLite単体。`plugins/TokenManager/tokens.db` に `token_balances`、`token_transactions`、`schema_meta`、`token_legacy_ids` を作る。WAL、foreign keys、busy timeoutを設定する。                                                                                                                        |
| 旧 `data.yml` からの移行           | 旧TokenManagerは `plugins/TokenManager/data.yml` に残高を保持していた。                                                                                                                                                                | 初回起動時に `data.yml` をSQLiteへ自動インポートする。`backup-before-import` が有効なら `PRAGMA wal_checkpoint(FULL)` 後に `tokens.db` とWAL sidecarをバックアップする。`schema_meta.tokenmanager_data_yml_imported_at` で自動再実行を防ぎ、必要時は `/tm transfer confirm` で手動再インポートする。 |
| 認証情報の扱い(セキュリティ)       | MySQL/MariaDB接続のため、`config.yml` にDBパスワード等を平文で置く設計。                                                                                                                                                               | DBはローカルSQLiteファイルなのでDB接続パスワードを持たない。`config.yml` はファイル名、busy timeout、キューサイズ、移行設定のみ。                                                                                                                                                                    |
| ショップ/worth機能の有無           | shop/worth、Vault、PlaceholderAPI hookなどを含むフル機能。旧JARには `me.realized.tokenmanager.hook.hooks.PlaceholderHook` があり、`%tm_tokens%`、`%tm_tokens_formatted%`、`%tm_tokens_raw%` などのPAPIプレースホルダーを提供していた。 | shop/worth機能は削除。依存プラグインが参照し得る `Shop`/`Slot` や一部イベント型は互換用に残すが、`getShop`、`getWorth`、`Slot.purchase()` の機能面は持ち込まない。PlaceholderAPI拡張登録も存在せず、旧TM由来の `%tm_tokens%` 系プレースホルダーは提供しない。                                        |
| 永続化のタイミング(同期/非同期)    | サードパーティ実装依存。フル機能DB連携を持つ。                                                                                                                                                                                         | API呼び出し時はメモリを即時更新し、SQLite書き込みは専用ワーカースレッドへ非同期投入する。キュー投入に失敗した操作は成功扱いにしない。                                                                                                                                                                |
| イベント発火の範囲                 | 元のAPI経由の残高操作では、残高変更イベントのカバーが不足していた。                                                                                                                                                                    | `set/add/remove` 成功時に `TMTokenBalanceChangeEvent` を発火する。`/token send` では相手がオンラインの場合に `TMTokenSendEvent` も発火する。                                                                                                                                                         |
| スレッド安全性・排他制御の設計     | 既存プラグインとしての設計に依存。今回の要件に合わせた監査・制御はできない。                                                                                                                                                           | 残高メモリ用の `lock` とSQLite接続用の `dbLock` を分離。DB I/Oは単一ワーカーで直列化し、メインスレッドやグローバル残高ロックで長時間DB処理を抱えない。                                                                                                                                               |
| クラッシュ耐性・冪等性             | 既存実装に依存。                                                                                                                                                                                                                       | `token_transactions.id` と `schema_meta.last_applied_tx_id` を使い、重複txはスキップする。通常停止ではキューdrainを待つ。ハードクラッシュ時は、メモリで受理されたがSQLite未到達の末尾更新は失われ得るが、重複適用は避ける設計。                                                                      |
| 依存プラグインからの呼び出し互換性 | 依存側は `TokenManager` として直接・間接に利用している。                                                                                                                                                                               | plugin名を `TokenManager` のままにし、`me.realized.tokenmanager.api.TokenManager`、`me.realized.tm.api.TMAPI`、ServicesManager登録、PluginManager+cast、リフレクション、`/token send` コマンドを吸収する。                                                                                           |
| コマンド体系(`/token`, `/tm`)      | `/token`、`/tm` に加え、shop/worth系を含む。                                                                                                                                                                                           | `/token balance/send/top`、`/tm add/remove/set/balance/top/transfer/reload`。`/tm shop`、`/tm worth`、`/token shop` は存在しない。`/tm set` のみ0以上、`add/remove/send` は正数を要求する。                                                                                                          |

## 第2部: なぜOyasaiTokenはこの仕様になったのか

### SQLite単体を維持し、MySQL対応を追加しなかった理由

OyasaiTokenの出発点は、えるちゃんの「SQLite等のまともなDBを使い、configに平文でキーやパスワードを書かないでほしい」という要望だった。MySQL/MariaDB対応を追加すると、結局DBホスト、ユーザー名、パスワード、場合によってはTLS設定を `config.yml` や周辺の秘密情報管理に戻す必要がある。

今回の依存5プラグインは、TokenManagerを「残高を読む・増やす・減らす」用途で使っているだけだった。そのため、外部DBサーバーを持つ理由よりも、ローカルSQLiteで運用面と秘密情報面を単純化する価値が大きかった。

実装上も、SQLiteは単一サーバー内のトークン台帳に十分合う。OyasaiTokenはWALを有効化し、専用DBワーカーで書き込みを直列化する。ネットワークDB対応を入れると、接続断、再接続、認証情報、遅延、トランザクション境界の扱いが増え、今回の置き換え目的に対して過剰になる。

### 旧 `data.yml` からSQLiteへ自動移行する理由

OyasaiTokenは旧TokenManagerの全機能を再実装しないが、既存残高を失わずに置き換える必要はある。そのため、旧 `plugins/TokenManager/data.yml` から `tokens.db` への移行は、運営者が別ツールを手で実行する前提ではなく、プラグイン初回起動時の自動インポートとして実装した。

`plugin.yml` の `name` は `TokenManager` のままなので、データフォルダは通常 `plugins/TokenManager/` になる。したがって、移行元は同じデータフォルダ内の `data.yml`、移行先は同じく `tokens.db` である。起動時はSQLite接続を開き、スキーマを作成し、既存残高を読み、transaction counterを初期化した後、`importTokenManagerDataYml(force = false)` を実行する。その後に永続化ワーカーを起動する。

自動移行は一度だけでよい。繰り返し実行すると、運用中にSQLite側で進んだ残高を古い `data.yml` で上書きする危険がある。そこで、移行済みかどうかを `schema_meta.tokenmanager_data_yml_imported_at` に記録し、通常起動では再実行しない。また、自動移行時に `tokens.db` 側へ既に残高が入っている場合も、既存DBを壊さないためスキップする。この場合は、運営者が内容を確認したうえで手動再インポートする。

`migration.backup-before-import: true` の場合、インポート前にDBバックアップを作る。実装ではまず `PRAGMA wal_checkpoint(FULL)` を実行し、WALの内容を可能な限りDB本体へ反映してから、`migration-backups/` に `tokens.db.<timestamp>.bak` をコピーする。存在する場合は `tokens.db-wal.<timestamp>.bak` と `tokens.db-shm.<timestamp>.bak` も一緒に残す。初回起動でまだDBファイルが実体として存在しない場合はバックアップ対象がないため作られないが、既存DBに対する再インポートではこのバックアップが重要になる。

手動再インポートは `/tm transfer confirm` で行う。このコマンドは `data.yml` を再度読み込み、同じUUIDに対応する残高をSQLite側へ反映する。実行時は永続化キューが空になるのを待ち、移行中は `migrationInProgress` によりトークン書き込みをfail-fastさせる。これは、移行処理と通常の残高更新が同時に走って順序や上書き関係が曖昧になることを避けるためである。

注意点として、現行実装は `data.yml` を `data.yml.migrated` のようにリネームしない。移行済み判定はファイル名変更ではなく、SQLite側の `schema_meta.tokenmanager_data_yml_imported_at` で管理する。

### shop/worthを削除した理由

監査で、OyasaiPets、DynamicProfile、OyasaiMenu、SocialLikes3、OyasaiAdminToolsのいずれもshop/worth APIを使っていないことを確認した。実コード検索でも、依存側から `getShop`、`getWorth`、`Slot.purchase()` への呼び出しは出ていない。

したがって、shop/worthを再実装すると、未使用機能のために仕様、GUI、権限、イベント、購入処理、Vault/PlaceholderAPI連携まで抱えることになる。これは置き換え範囲を不必要に広げる。

一方で、クラスロード互換は別問題である。OyasaiTokenには `me.realized.tokenmanager.shop.Shop`、`Slot`、shop系イベント型が残っている。これは依存プラグインや古いjarが型参照だけで落ちることを避けるためで、shop機能そのものを維持する判断ではない。

追加調査で、旧TokenManagerにはPlaceholderAPI連携も存在していたことが分かった。旧JARには `me.realized.tokenmanager.hook.hooks.PlaceholderHook` があり、PlaceholderAPIのidentifierとして `tm` を使い、少なくとも `%tm_tokens%`、`%tm_tokens_formatted%`、`%tm_tokens_raw%` などの残高プレースホルダーを提供していた。

しかし、OyasaiTokenには `PlaceholderExpansion` の実装、`me.clip.placeholderapi` import、PAPI向け `register()`、`plugin.yml` の `softdepend: [PlaceholderAPI]` が存在しない。つまり、OyasaiTokenでは旧TokenManager由来のPAPI残高プレースホルダーは互換対象から外している。

これは、サーバー内でPlaceholderAPI自体を使わないという意味ではない。DynamicProfileやSocialLikes3はそれぞれ独自のPAPI連携を持ち、OyasaiMenuもPlaceholderAPIの置換呼び出しを使っている。捨てたのは「TokenManager/OyasaiTokenがトークン残高をPAPIとして公開する機能」である。必要になった場合は、OyasaiToken用の `PlaceholderExpansion` を別途追加するのが正しい追加範囲になる。

### メモリ主+非同期永続化にした理由

Minecraft/Paperプラグインでは、メインスレッドの停止や長時間ブロックがそのままTPS低下になる。トークン残高の読み書きは、ペット購入、メニュー購入、看板報酬、プロフィール送金などユーザー操作の中で頻繁に呼ばれるため、API呼び出しごとにSQLite書き込み完了を待つ設計は避けた。

OyasaiTokenは、残高の正本を実行中メモリに置く。`set/add/remove` はキュー投入に成功した時点でメモリを更新し、呼び出し元へ即時に成功を返す。SQLiteには同じ操作を `PersistenceJob` として非同期に流し、`token_balances` と `token_transactions` を1トランザクションで更新する。

「取引ログだけ同期で書く」案は採用しなかった。同期ログ書き込みは、結局API呼び出し側をSQLiteのfsyncやロック待ちに巻き込む。さらに、残高反映は非同期、ログだけ同期という二重構造にすると、復旧時のリプレイ、順序、ログ済みだが残高未反映の状態を扱う複雑さが増える。今回必要だったのは銀行DBの完全無損失保証ではなく、ゲーム内操作を止めず、通常停止ではdrainし、クラッシュ時にも重複適用しないことだった。

### 有界キュー+fail-fastにした理由

非同期永続化は、キューが無制限だとバックプレッシャーが消える。DBが詰まっているのにAPIは成功し続け、メモリ上だけ残高が進み、停止時やクラッシュ時の未永続化範囲が膨らむ。先行実装のSocialLikes3で無制限キューにバックプレッシャーが無い見落としが見つかったため、OyasaiTokenでは最初から有界キューにした。

実装は `ArrayBlockingQueue` + 単一 `ThreadPoolExecutor` + `AbortPolicy` である。キュー満杯時は `RejectedExecutionException` を捕捉し、APIは `false` を返す。`/tm add/set` は「Token persistence queue is full.」として失敗し、`/tm remove` は「残高不足またはキュー満杯」として失敗する。

重要なのは、キュー投入に成功するまでメモリ残高を更新しない点である。これにより、永続化できない操作をゲーム内だけ成功したように見せない。OyasaiPetsのような消費側も、`removeTokens` のBooleanを見て処理を中断できる。

### CallerRunsフォールバックを捨てた理由

コードレビューで、キュー満杯時に `CallerRunsPolicy` のようなフォールバックを使うとCRITICAL級のデータ破損が起き得ることが分かった。

問題は順序である。古い更新Aがキューに残っている状態で、新しい更新Bがキュー満杯により呼び出しスレッド上で直接SQLiteに書かれると、Bが先にDBへ反映される。その後、ワーカーがAを書くと、`token_balances` が古い残高で上書きされる。これは残高巻き戻りであり、経済プラグインとして許容できない。

また、呼び出しスレッドでDB I/Oを実行すると、メインスレッドや残高ロックを長時間占有する危険がある。修正後は `AbortPolicy` に統一し、満杯時は直接書かず、失敗を返す。

### 依存プラグイン側を書き換えなかった理由

依存5プラグインは、TokenManagerを5通りの異なる方法で呼んでいた。

- OyasaiPets: `me.realized.tm.api.TMAPI` を直接import
- DynamicProfile: `PluginManager.getPlugin("TokenManager")` + cast、および `/token send` コマンド実行
- OyasaiMenu: リフレクションで `getTokens`、`removeTokens` を探索
- SocialLikes3: ServicesManager優先、PluginManager fallback
- OyasaiAdminTools: `PluginManager.getPlugin("TokenManager")` + `TokenManager` cast

呼び出し側をすべて書き換える案は、変更範囲が広すぎる。各プラグインのユーザー機能、GUI、コマンド、権限、テスト範囲まで巻き込むため、TokenManager置き換え作業のリスクが増える。

そこで、OyasaiToken側が互換層を持つ方針にした。`plugin.yml` の名前は `TokenManager` のままにし、メインクラスは自作の `OyasaiTokenPlugin` に差し替える。旧 `me.realized.tokenmanager.api.TokenManager` インターフェース、旧 `TMAPI` 静的メソッド、ServicesManager登録、PluginManagerからのcast、リフレクションで見えるメソッド、`/token send` コマンドをすべて受ける。

この方針により、依存側の業務ロジックをほぼ固定したまま、ストレージと安全性だけを置き換えられる。

### `TMAPI.removeTokens(UUID)` のBoolean修正

OyasaiPetsは残高消費に `TMAPI.removeTokens(player.uniqueId, amount)` を使う。ここが失敗しても握りつぶされると、残高不足やキュー満杯でもペット側の処理が進んでしまう。

そのため、`TMAPI.removeTokens(UUID)` はBooleanを返し、OyasaiTokenの `removeTokens(uuid, amount)` の成否をそのまま伝えるようにした。OyasaiPets側は `false` を受けたら購入、餌やり、スキル解放、復活、交配などの消費処理を中断できる。

### 残高変更イベントを追加した理由

元のTokenManager API経由操作では、残高変更を横断的に監視するイベントが不足していた。OyasaiTokenでは `TMTokenBalanceChangeEvent` を追加し、`set/add/remove` の成功時に発火する。

イベントにはUUID、プレイヤー名、変更前残高、変更後残高、delta、reasonを含める。APIが非同期スレッドから呼ばれた場合でも、イベント発火はBukkitメインスレッドへ戻す。これにより、監査、ログ、将来の連携処理を安全に追加しやすくなる。

### `schema_meta.last_applied_tx_id` と冪等性

OyasaiTokenは `token_transactions` にtx id付きで操作履歴を保存し、`schema_meta.last_applied_tx_id` に最後に適用したtx idを記録する。起動時は `last_applied_tx_id` と `MAX(token_transactions.id)` の大きい方から次のtx idを初期化する。

永続化ワーカーは、同じtx idがすでに `token_transactions` に存在する場合は重複としてスキップする。これにより、復旧やリプレイ時に同じ加算・減算を二重適用する事故を避ける。

ただし、これは完全無損失保証ではない。コードコメントにもある通り、ハードクラッシュ時に「メモリでは受理済みだがSQLiteに到達していない」末尾ジョブは失われ得る。OyasaiTokenの狙いは、通常停止でdrainし、クラッシュ時に重複や巻き戻りを避けることにある。

### `onDisable()` でdrainを待つ理由

非同期永続化では、停止時にキューを捨てると通常運用でもデータを失う。OyasaiTokenは `onDisable()` で永続化Executorをshutdownし、設定された `persistence.shutdown-await-seconds` までキューのdrainを待つ。

通常の `/stop` では、キューが空になってからSQLite接続を閉じる。もしタイムアウトした場合は警告を出し、ワーカーが動いている間は接続を閉じず、後続のクローザーで閉じる。この挙動は「無限待機でサーバー停止を固める」ことを避けつつ、通常停止での永続化完了を最大限保証するためのもの。

### イベント無限再帰バグが変えたこと

実機テストで、Kotlin companion objectの命名衝突によりイベントの `getHandlerList()` が無限再帰し、`StackOverflowError` になるバグが見つかった。

修正後のイベントクラスは、`private val HANDLERS = HandlerList()` を持ち、`getHandlers()` と `@JvmStatic getHandlerList()` が明示的に `HANDLERS` を返す。Bukkitイベントではこの静的 `getHandlerList()` 形が必須なので、KotlinのプロパティgetterとJVM staticメソッド名が衝突しないようにした。

この修正により、`TMTokenBalanceChangeEvent` や `TMTokenSendEvent` を実機で安全に発火できるようになった。

### `/tm set <player> 0` 拒否バグが変えたこと

手動テストで `/tm set <player> 0` が拒否される実バグが見つかった。原因は、金額パーサが全操作に対して「正数のみ」を要求していたことだった。

`add`、`remove`、`send` は0を許可する意味が薄く、正数でよい。一方で `set` は残高を0にする管理操作が必要であり、0を拒否してはいけない。修正後は `parseAmount()` を正数用、`parseNonNegativeAmount()` を `set` 用に分離した。

この変更は、OyasaiPetsなどの残高不足テストにも必要だった。残高を0にできなければ、消費失敗時に処理が中断されるかを再現しにくい。

### Vault `/pay` 問題の扱い

テスト環境で `/pay` が動かなかった件は、OyasaiToken起因ではなかった。DynamicProfileのエメラルド送金はVault Economy側の `/pay` に依存するが、テスト環境にはVault APIはあってもEconomy実装(EssentialsX等)が無かった。

OyasaiTokenが担当するのはTokenManager互換のトークン残高と `/token send` であり、Vault Economyの実装ではない。したがって、この問題はOyasaiToken仕様変更の対象外とした。

### 現在の仕様のまとめ

OyasaiTokenは、TokenManagerの全機能を再実装したものではない。おやさいサーバーで実際に使われていた「トークン残高API」と「既存プラグイン互換」を、自作・監査可能・秘密情報不要なSQLite実装に置き換えたもの。

そのため、仕様は意図的に狭い。

- 残すもの: 残高取得、設定、加算、減算、送金、ランキング、旧API互換、旧コマンド互換、旧 `data.yml` からの移行
- 捨てるもの: 未使用だったshop/worth、旧TokenManager由来のPlaceholderAPI残高プレースホルダー、MySQL/MariaDB接続、平文DBパスワード前提、Vault Economy provider化
- 強化するもの: Boolean失敗伝播、有界キュー、fail-fast、冪等tx、通常停止drain、残高変更イベント、WALチェックポイント付きバックアップ、移行済みメタデータによる自動再実行防止

この形にした理由は、機能を増やすためではなく、実際の依存関係と運用要件に合わせて、危険な部分を減らし、必要な互換性だけを保つためである。
