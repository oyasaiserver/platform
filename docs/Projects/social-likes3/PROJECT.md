---
title: "SocialLikes3 — 建築いいね・訪問システム"
status: active
source: plugins/SocialLikes3/（コードから作成。ゲーム内での確認は未実施）
source_of_truth: "plugins/SocialLikes3/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
  - docs/Projects/social-likes3/sqlite-migration-design.md
  - docs/Projects/social-likes3/sociallikes-dialog-text-graph.md
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# SocialLikes3

建築の看板登録・いいね・訪問・フォロー・旅行ガイド・統計表示を提供するプラグイン。コード確認日: 2026-10-13。ゲーム内、外部サービス、本番データでの動作確認は未実施。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/social-likes3/operator.md)
- 経緯: [SQLite移行の当初設計](sqlite-migration-design.md) / [Dialog描画の判断記録](sociallikes-dialog-text-graph.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/SocialLikes3/`。以下のKotlinパスは `src/main/kotlin/com/github/srain3/sociallikes/` からの相対パス |
| 主要コード | `SocialLikes.kt`（enable/disable・バックアップ）、`Events.kt`（登録・いいね・報酬・保護・アイテム設置）、`Tools.kt`（移動・報酬API・通知）、`WorldLocationListener.kt` |
| 永続化 | `datas/Data.kt`（キャッシュ・YAML・主保存選択）、`datas/SLDatabase.kt`（Exposed/JDBC）、`datas/DirtyBuildManager.kt`、`datas/BuildTimestamps.kt`、`OfflineLikePointStore.kt` |
| 画面・ガイド | `command/`・`gui/`、`GuidebookService.kt`・`GuidebookListener.kt`、`stats/SLDataStatsService.kt`、`discord/SLDiscord.kt` |
| テスト | `src/test/kotlin/com/github/srain3/sociallikes/`。下の保証範囲を参照 |
| ビルド | `nix develop --command gradle :plugins:SocialLikes3:build`（`build/libs/SocialLikes3.jar`）。テスト単独は `:plugins:SocialLikes3:test`。本作業では実行していない |
| Nix package | `packages/oyasai-plugins.nix` がGradleで各プラグインjarを作り、`sociallikes3` の個別出力も公開。`packages/oyasai-minecraft-main.nix` はプラットフォーム構成でその出力を選択 |
| 既定値・登録 | `src/main/resources/plugin.yml`・`config.yml`・`DiscordConfig.yml`、`build.gradle.kts`。`paper-plugin.yml` はない |
| 補助資料・ツール | `COMMANDS.md`、`DIALOG_STYLE.md`、`GRAPH_SHAPES.md`、`sldata-stats2-text.md`、`tools/`、`resourcepack-poc/`、`dialog-json/`。資料の観測・設計と現行コードを区別する |

## 技術仕様

### 構成と依存

`SocialLikes : JavaPlugin` を `plugin.yml` で登録（名前SocialLikes3、version 0.5.3、api-version 1.20）。これは実際に対応検証したMinecraftバージョンの証明ではない。Purpur開発bundleを使い、Paper Dialog API、CraftBukkit/NMSの書見台・進捗パケットに直接依存する。

ビルドはPurpur、DiscordSRV、LuckPerms、OyasaiToken、FAWEをcompileOnly、Kotlin stdlib・InventoryFramework・Javacord・Exposed core/jdbc・SQLite JDBCをimplementationに指定。FAWE由来のAdventureを除外してPaperとのバイナリ不一致を避ける。ルート `build.gradle.kts` がShadowJarの名前を `SocialLikes3.jar` にし、通常jarを無効化する。プラグイン固有ビルド定義は統計文言mdをresourcesへ追加する。旧設計にあるCoroutinesとライブラリrelocateは現行の固有定義にない。

メインはobject単位のコマンド・イベント・画面を登録する。設定、画面、権限、外部サービスの起動条件は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/social-likes3/operator.md) が一覧。旧設計の「OyasaiTokenAPIへ全置換」「全件キャッシュ廃止」は現行実装と異なる。

### 起動と主要な処理の流れ

1. enable最初に既存dataFolderを全コピーし、成功後にstartupバックアップの古い世代を削除する。コピー失敗は例外で起動を中断。
2. SQLite書込みexecutorでスキーマ、ビュー、索引、移行表を初期化し、`requireReady` が最大30秒待つ。初期化失敗をYAMLだけで回避して起動する経路はない。
3. dirty一覧をロード、定期再保存開始、建築ロードを開始する。YAMLかSQLiteから全件キャッシュ、作者いいね数、近隣インデックスを作る。YAML起動ではSQLiteを全件同期。起動時dirty再保存を予約する。
4. メインスレッドでワールド参照を再解決し `Data.loading=true`（操作可能）へ戻す。名称に反してfalseがロード中。初期値はtrueで、YAMLのdataフォルダがなければ読込関数は早期returnする。
5. 全建築・作者別のGUIアイテム生成と宣伝履歴読込はさらに独立したThreadで行う。キャッシュ完了と画面・宣伝履歴完了は同じ障壁で揃えない。

イベント・コマンド登録後、dirty一覧・定期タスク→建築読込開始→移動履歴→オフラインポイント→オンラインプレイヤーのフォロー→宣伝履歴→Discord接続の順で進む。`SLtp.userLastSLTPTimeLoad`・`OfflineLikePointStore.load`・`FollowBuild.reloadJoinFix` の不正値例外はonEnableで捕捉しない。イベント登録・建築読込開始後の起動中断になり得る。

停止は再保存タスク停止→Discord切断→移動履歴・オフラインポイント保存→SQLiteクローズ。SQLiteのキュー上のクローズを最大10秒待つが、YAML書込み・コマンドログ全件排出の待機はない。

**登録:** SignChangeEventで表面の1行目がtrim・lowercase後 `likes`、タイトル非空、ロード完了なら最大ID+1を発行。`SLData`を保存し、看板を装飾・wax・世代2 PDCに変更、GUI更新・全体告知。別ThreadでDiscordへ投稿し、投稿IDを保存する。登録数・所有範囲・座標重複の事前検査はない。

**右クリック:** HIGHEST・ignoreCancelled=false。ガイド編集キー処理を先に行う。通常SL看板はPDCを解決し旧世代なら世代2に変更、現役データと座標を照合。座標不一致はslupdateモード時だけ登録位置を変更。一致してしゃがんでいればいいね一覧。通常クリックで未いいねならUUIDと時刻をメモリに追加し主保存成功後にLikeEventと報酬を実行する。メモリの作者いいね数・GUI・音・アクションバーとガイド完成判定は保存成功を待たない。既存いいねは重複通知のみ。OPの通常クリックはcheckをtrueに保存し✓を付ける。

**旧看板:** `[SocialLikes]` は前面1行目の文字色の整数値を負IDとして解決する。登録座標と合えば、新しい文字とPDCに変えるだけで、そのクリックにいいねは付かない。

**移動・再入手:** 再入手アイテムは建築IDと世代2をBlockStateMetaとアイテムPDCへ持つ。設置後1tickで看板の両面・色・発光・waxを可能なら復元する。登録位置は変更しない。slupdateは保存と別の `moved` イベントログを積み、元座標の看板をID照合せずAIRにする。材質名は保存するが、向き・壁付き位置・吊り形状の完全なスナップショットを建築DBに保存しない。

### データ形式と永続化

`SLData` は建築ID、Locationと別のworldName、作成LocalDateTime、所有UUID、タイトル、likesのUUIDリスト、likesWithTimestampのUUID→epoch ms、check、コメント、DiscordメッセージID、deletedAt/deletedBy、signMaterialを持つ。

メモリは50件区切りキーの `ConcurrentHashMap<String, MutableList<SLData>>` とCopyOnWriteArrayList、作者いいね数のConcurrentHashMap、worldName→chunkX→chunkZ→リストの近隣索引。新規IDは同期ブロック内でlastIDを増やし、空きIDを再利用しない。全件・現役件数はこのキャッシュを走査する。GUIの建築マップは作成日時をキーにするため、同一作成日時の建築は上書きされ得る。

| SQLiteテーブル・ビュー | 内容・制約 |
|---|---|
| `builds` / `active_builds` | ID主キー。座標、チャンク、作成日時、所有UUID、タイトル、チェック、コメント、Discord ID、削除日時・実行者・看板材質。activeはdeleted_at IS NULL |
| `players` | 整数ID主キー、UUID一意、最終確認名・時刻 |
| `build_likes` / `build_likes_with_uuid` | `(build_id, player_id)` 主キー、liked_at nullable、WITHOUT ROWID。UUIDはplayersへJOIN。build削除はCASCADE、player参照も外部キー |
| `publicity_history` | 自動採番ID、timestamp、user_uuid、sl_id。sl_idに外部キーなし |
| `sl_event_log` | 自動採番ID、build_id、event_type、actor_uuid、before_json/after_json、occurred_at。建築への外部キーなし |
| `id_migration_map` / `migration_state` | old_id主キー・new_id一意、文字列key/valueの完了マーカー |
| `guidebooks` | ID、PERSONAL/OFFICIAL、作成者、タイトル・説明・公開状態・作成時刻、告知済み・編集フラグ |
| `guidebook_entries` | `(guidebook_id, build_id)` 主キー、position。両方の外部キーに削除CASCADE |
| `guidebook_completions` | `(guidebook_id, player_uuid)` 主キー、初完成時刻。INSERT OR IGNOREで初回を判定 |
| `guidebook_extra_slots` | player_uuid主キー、購入枠数。保存時にexpectedSlotsと照合 |
| `guidebook_publicity` | ガイド宣伝のID・guidebook_id・実行者・価格・時刻。ガイドへの外部キーなし |

SQLiteは `SocialLikesShadow.db`、WAL、busy_timeout=5000、foreign_keys=ON、synchronous=NORMAL。buildsのdeleted_at・deleted_by・sign_materialとガイド追加列は不足時にALTERするが、旧UUID直結build_likesを現形式へ変換する処理はない。現役座標の部分一意索引は作成失敗時に警告・重複列挙し、そのまま続ける。いいね同期はUUID重複の先頭を採用し、差分だけINSERT/UPDATE/DELETEする。日時のNULL→値・値→NULLも更新する。

建築のYAMLは `data/<範囲>/<ID>.yml`。id、loc.world/x/y/z、time、owner、title、likes、likesWithTimestamp、check、comment、DiscordTextID、deleted/deleted_at/deleted_by、sign_materialを保存。YAMLロードは削除済みもキャッシュに持つが、SQLiteロードは現役行だけ。最大ID取得はSQLiteの削除済みも含む。保存先一覧は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/social-likes3/operator.md)。

`BuildTimestamps` は新規保存をepoch msの文字列にする。旧ISO local値は2022-12-23以前をAmerica/New_York、2025-07-22以前をJST、それ以後をUTCとしてJSTへ変換する。不正値は警告してnull。既存建築のtime・created_atと既存宣伝timestampは通常保存・同期でその文字列を維持する。全データを自動正規化しない。

### 主保存・同期/非同期・失敗

- `Data.save` はメモリとランク候補数を先行更新。主保存成功でcallbackをメインへ戻す。YAML主ならYAMLの実保存成功、SQLite主ならDBトランザクション成功が基準。副保存はbest effortで、双方成功の一括保証はない。
- YAMLはID別のCompletableFuture連鎖で順序を揃え、保存時にLocation・likes・timestampをコピーする。Bukkit非同期タスクで保存し、停止時の全排出待ちはない。
- SQLiteは単一書込み・単一読込みexecutor。Exposed通常transactionを使う。submitWriteの最大5試行と制約違反打切りは建築保存等の経路だけ。一般submitのイベントログ・名前・全件同期は例外をログに出すのみ。blocking読取/書込はFuture.getで最大30秒呼出元を止め、失敗はnull等を返す。
- dirtyはSQLite保存失敗IDをファイルに持ち、起動時YAML優先・定期メモリ優先で1tick25件をメインでスナップショット化してSQLiteへ再投入。SQLite主でも起動時YAML優先なのに注意。元データ欠落3回でdirtyから削除する。
- delIDはソフトデリートしキャッシュ・画面から外し、DBフラグ更新とYAMLミラーを非同期実行。看板除去と成功表示は保存確定を待たない。復元コマンドなし。建築の通常削除で宣伝履歴を消す呼出はない。
- オフラインポイントファイルはロード成功前には書かず、同じディレクトリの一時ファイルをATOMIC_MOVE・REPLACE_EXISTINGで置換する。原子的置換に対応しない環境では保存失敗。確定報酬を消すファイル保存が失敗すればメモリの未受取額を復元する。
- その他のYAMLヘルパーsaveはIOExceptionをログに出すだけ。宣伝・フォロー等の画面成功が永続化成功の証明にならない。

### ガイド・統計・イベント

ガイドの所有・タイトル・冊数・掲載重複をServiceで判定しSQLiteに保存する。個人は作者の建築のみ、公式はOPのみが編集。物理BOOK/WRITABLE_BOOKはPDC IDのキーで、内容表示はNMSの仮想書見台。読取時に公開・編集権限を再確認し、表示用の本の持出しを止め、閉じたとき・参加時に漏れた表示用アイテムを回収する。ページしおりと15秒確認はメモリだけ。

進捗は現在有効な掲載IDと現在いいね済みIDの集合比較。未ロードチャンクは有効候補とし、実際の案内でチャンクをロードして看板と登録IDを照合する。通常SLロゴはID照合、旧SLロゴは文字色IDを照合しない。公開判定は現役建築が1件以上で、全看板の存在検査はしない。案内失敗・存在しない候補を飛ばす処理、未発見案内の待機、完成記録の詳細は使い方を参照。完成演出は新しいいいねから呼ばれ、主保存完了を待たない。

ガイド課金はOyasaiTokenServiceの非同期charge/grantを利用。追加枠・宣伝の同一ユーザー並行操作は集合で拒否する。DB保存や公開状態・価格が変化した場合は返金するが、異なるDBを跨ぐ原子性はない。建築宣伝の従来TokenManager経路とは別。

統計は原則 `Data.getSLDataAll()` と `PublicityHistory` のメモリから計算し、SQLiteは主に名前解決に使用。`/sllucky` の抽選とOPのフォント週次試作はSQLiteを読む。したがって同期失敗中には件数や抽選対象が一致しない場合がある。

通常のグラフ・ランキングはJST、月曜始まり、時刻付きいいねのみで期間を区切る。全期間ランキングは時刻なしも本人のいいねも含む（除外と書かれた一部コメントとは異なる）。詳細統計のライフ除外はワールド別いいねレシオだけに適用し、詳細統計全体を除外するものではない。`stats/SLDataStatsService.kt` の `isLifeWorld` は名前を小文字化し、`world`・`life`・`lifeworld`・`life_world` の固定リストで判定する。既定では除外し、ワールド名変更でこの表の集計対象が変わる。詳細集計は対象・life除外・期間ごとに30秒キャッシュし、「再読込」ボタンもキャッシュを迂回しない。SQLiteフォント試作の週次はUTCで、削除済み建築のいいねも除外しない。

詳細表示の注意: 期間で絞るものと通算・固定週数のものが混在する。「全いいねに時刻がある建築だけ」と表示されても、初速・一番乗りのループは2026-07-02以降かつ時刻ありを使い、全件の時刻充足を条件にしない。個人の宣伝効果は送受イベントを結合するため本人いいねが重複し得る一方、公開宣伝効果は時刻数が揃った建築だけで本人いいねを除外する。ガイドの宣伝履歴はこの建築宣伝集計に含まれない。「最初のファン」「最初の盟友」は最古時刻ではなく一番乗り回数・送信件数で並べた先頭を使う。画面の自然言語を無条件に集計定義の正本としない。

外部向け `api/LikeEvent` はlikeUserとbuildOwnerのUUIDだけを持つ同期Bukkitイベント。主保存成功後メインで発火し、Cancellableではない。建築IDは含まない。内部のsl_event_logはcreated、liked、deleted、moved、checked_changed、title_changed、comment_changed、sign_material_changed、publicizedの別保存。イベントログ失敗にdirty再保存はない。

### 外部APIと保護範囲

TokenManager互換API・反射でのaddTokensWithCommit、OyasaiTokenService、コンソール `eco give`、LuckPerms、WorldEdit、Javacord、PlayerDB、floodgateの反射APIを使う。DiscordSRVはsoftdependとビルド指定があるが、本体にDiscordSRV APIを使う処理はない。Discordの反応をいいねへ取り込まない。

保護は看板と一部の支えの破壊・爆発・ピストン。建築や土地全体の保護ではなく、キャンセル済みイベントの処理もある。移動の所有者検査なし、supportの分岐不足、SLTPの判定まで到達しない早期returnの範囲は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/social-likes3/operator.md) を参照。

### テストが保証する範囲

以下はテストコードの検査対象です。本資料作成時にテストを実行した結果ではありません。

| テスト | 検査対象 |
|---|---|
| `GuidebookCommandRulesTest` | コマンド引数からactionへの解析、数値・余分な引数・廃止構文の拒否、削除・追加枠の明示確認構文 |
| `GuidebookRulesTest` | 有効IDによる進捗、初回/再完成、告知、上限・重複、設定既定・部分上書き、追加枠価格、価格の整数上限、タイトル、文字幅と改行による説明切詰め |
| `GuidebookTeleportRulesTest` | 未発見案内の待機境界、既いいね例外、0・負の待機時間 |
| `GuidebookBookRulesTest`・`GuidebookStyleTest` | ページ分割、コメントの先頭と省略、印、Next、削除確認期限、しおり補正、配色フォールバック・置換 |
| `SLtpYawTest`・`TabCompletionTest` | 16方位のyaw変換、補完の前方一致・空引数だけのヒント |
| `BuildTimestampsTest` | epoch/JST、旧NYの夏冬・重複時刻、旧JST/UTC、正規化・往復 |
| `BuildLikesNormalizationTest` | 空SQLiteの現行スキーマ、索引・WITHOUT ROWID、2つの外部キーとbuild削除CASCADE。旧スキーマからの移行を検証しない |
| `SLDatabaseLikeSyncTest` | JDBC実DBのいいね差分追加・削除・日時更新・NULL遷移・重複先頭採用、1000件への1件追加が1行書込 |
| `DataLoadConcurrencyTest` | 起動読込中のキャッシュ反復、近隣索引の置換・削除、作者いいね数の並行加算、削除済みの読取意味 |
| `DirtyBuildManagerTest` | 連続失敗ログの抑制条件だけ。復旧・永続化は未検査 |
| `OfflineLikePointStoreTest` | 未読込・読込失敗後の保存抑止、置換・0額除外、一時ファイル後始末、往復。実際のポイントAPI確定・二重支払防止は未検査 |
| `StartupBackupRetentionTest` | startup世代の古い2件だけ削除し、手動バックアップを保持。全コピー・失敗時は未検査 |

コマンド実行と権限、キャンセル済みイベント、看板・アイテムPDCの移行、表示/NMS互換、WorldEdit・Discord・Token連携、統計定義、主保存失敗とdirty復旧、起動から停止までの排出、実データの完全性はテストの保証範囲にない。

### 補助ツールと既知の制限

- `tools/compare_shadow_data.py` はコピー上のYAML/SQLiteを比較し、建築・いいね・宣伝履歴の件数・行・時刻の差分を報告する。削除フラグ・看板材質・ガイド・索引は比較しない。移行実行ツールではない。
- `tools/backfill-player-names.py` はworldのplayerdataをnbt CLIで読み、usercacheを補助に既存関連UUIDの名前をDBへ追記する。読取専用ではない。
- `tools/release-timestamps.sh` が呼ぶ `TimestampMigrationMain` はこのソースにない。現行jarによる実行は保証しない。
- `tools/build-archive.sh` はビルド・ソース/差分退避だけでなく、ローカル検証jarも置き換える。資料確認だけのつもりで実行しない。通常Gradleビルドへの自動アーカイブ登録はない。
- `tools/localserver.sh` はローカル検証サーバー操作、`shot.py`・`uiloop.sh` はクライアント連携・スクリーンショット補助。独立した実験用処理で、現在の実行環境は未確認。
- `tools/booktuner/` はガイドの配色・文言を試しconfigへ書き出すWebツール。`tools/tuner/` はフォント・レイアウト・サンプル指標のプレビュー、`tools/chartlab/` は描画実験。ブラウザーでのプレビューはゲーム内表示の証明にならない。
- `resourcepack-poc/` は画像グリフと生成器。SLResourcePackの固定配布先はローカル用、600tickでタイムアウト、拒否ならready callbackを捨てる。OPフォント画面のナビゲーションは仮置きで、クリックはキャンセルだけ。`dialog-json/` は静的な比較画面で、実データに連動しない。
- 全件キャッシュ、GUIの非並行マップ、メインで呼ぶblocking DB、別Threadから使うBukkit・GUI APIが混在する。非同期化した箇所があることだけで、全処理のスレッド安全性やtick非阻塞を保証しない。
- 通常保存では既存作成時刻を維持し、移行表と完了マーカーを読むだけ。`SLDatabase.markSqlitePrimaryReady()` は呼出元がなく、マーカーを立てるコマンドもない。起動時の負ID二ブロック移行・全YAMLから新DBへの改名移行はない。

## 判断の記録

- 2026-10-13（レビュー指摘のコード照合）: 運営向けにOPの✓・SLTP回収と削除後の保護・起動時YAML例外・region更新の副作用を明記。`biomeCount` は不一致だけでなく全抽選を数える。ライフ除外はワールド別レシオだけに限定する。WorldEditのPDC複製・統合版表示・外部報酬は実機未確認。
- 2026-10-13（レビュー訂正）: 非OPのrankupは `false`、plugin.ymlにusageなし。Bukkitの [PluginCommand](https://github.com/PaperMC/Paper/blob/main/paper-api/src/main/java/org/bukkit/command/PluginCommand.java) はusageの既定が空で、falseだけでは使い方を出さない。COMMANDS.md記載のOyasaiAdminToolsからのsltp呼出は現行コードに見つからず、確認できたDynamicProfile・OyasaiMenuのみ運営文書に記載。

- 2026-10-12（コード照合）: 当初のSQLite設計は履歴として保持し、主保存の正本は `Data.kt`・`SLDatabase.kt` とする。自動移行、DB名、Coroutines、全件キャッシュ廃止、Token API置換の当初案を現行仕様へ流用しない。
- 2026-10-12（コード照合）: 権限ノードの宣言より `isOp`・所有者・group検査を読む。特にslupdate、旧dialog reload、rankup第2引数、保存前の成功表示は、既存のコマンド説明だけでは分からない。
- Dialog表示の過去の比較・判断は [描画記録](sociallikes-dialog-text-graph.md) に保持。現在は通常経路が2倍・low系固定で、旧large/low引数による切替は行わない。実機の見た目と統合版互換は未確認。
