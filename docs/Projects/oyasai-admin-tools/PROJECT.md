---
title: "OyasaiAdminTools — 運営ツール・広報・プレイヤー履歴"
status: active
source: "plugins/OyasaiAdminTools/（コードから作成。コードと照合してレビュー済み。ゲーム内での確認は未実施）"
source_of_truth: "plugins/OyasaiAdminTools/"
related_paths:
  - plugins/OyasaiAdminTools/src/main/kotlin/io/oyasai/oyasaiAdminTools/OyasaiAdminTools.kt
  - plugins/OyasaiAdminTools/src/main/kotlin/io/oyasai/oyasaiAdminTools/storage/
  - plugins/OyasaiAdminTools/src/main/kotlin/io/oyasai/oyasaiAdminTools/bulletin/
  - plugins/OyasaiAdminTools/src/main/kotlin/io/oyasai/oyasaiAdminTools/staff/
  - plugins/OyasaiAdminTools/src/main/kotlin/io/oyasai/oyasaiAdminTools/assistant/
  - plugins/OyasaiAdminTools/src/main/resources/plugin.yml
  - plugins/OyasaiAdminTools/src/main/resources/config.yml
  - plugins/OyasaiAdminTools/src/test/kotlin/io/oyasai/oyasaiAdminTools/
  - plugins/OyasaiAdminTools/ESSENTIALS_STAFF.md
  - packages/oyasai-plugins.nix
  - packages/oyasai-plugin-registry/package.nix
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiAdminTools

運営コマンド、ワールド境界、お知らせ・アンケート、プレイヤー履歴をまとめた Paper プラグイン。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-admin-tools/operator.md)
- 運営コマンド内製化の判断・設計記録: [ESSENTIALS_STAFF.md](../../../plugins/OyasaiAdminTools/ESSENTIALS_STAFF.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiAdminTools/` |
| 主要コード | `OyasaiAdminTools.kt`（初期化・機能分離）、`plugin.yml`（コマンド・権限・softdepend）、`config.yml`（既定値）、`storage/AdminDb.kt`（SQLite・移行） |
| 機能コード | `bulletin/`（お知らせ・アンケート・GUI）、`worldborder/`（独自境界）、`staff/` と各機能パッケージ（運営コマンド）、`playerhistory/`（記録・旧 userdata 取込） |
| テスト | `src/test/kotlin/io/oyasai/oyasaiAdminTools/`。SQLite と旧データ取込、履歴・トグル保存、SocialSpy のラベル判定と Essentials 実行時フラグ、運営コマンド登録・引数、経験値計算を検証。イベントや GUI のゲーム内動作、各コマンドの実行、実環境での外部プラグイン連携は保証しない |
| ビルド | `nix develop --command gradle :plugins:OyasaiAdminTools:build` |
| Nix package | `packages/oyasai-plugins.nix` が `oyasaiadmintools` を公開する。`packages/oyasai-plugin-registry/package.nix` 経由で利用でき、`packages/oyasai-minecraft-main.nix` の Paper プラグイン一覧に含まれる |

## 技術仕様

### 構成と起動・停止

- `plugin.yml` のプラグイン名は `OyasaiAdminTools`、`api-version` は `1.21`。起動時に既定 `config.yml` を保存し、`plugins/OyasaiAdminTools/admintools.db` を開く。
- SQLite の初期化に失敗すると `AdminTools SQLite unavailable: ...` をログに出してプラグイン全体を無効化する。お知らせ・アンケート、ワールド境界の旧データ取込失敗は該当機能だけを利用不可にする。履歴 DB 初期化失敗時は `seen`・`whois`・`tpoffline` を登録せず、ほかのスタッフ機能の初期化は続ける。各スタッフ機能の初期化失敗もその機能だけを止める。
- 停止時はスタッフ機能、履歴、タイマーを停止し、DB 書き込み executor の終了を待ってから接続を閉じる。
- コマンドの入口は `/bulletin`（別名 `/bl`, `/anno`）、`/anke`、`/wborder`（`/wb`）、`/playermanager`（`/pm`, `/pmanager`）、`/kakutyo`、`/applylifeworldsettings` とスタッフ用7コマンド。既定値・権限・運用手順は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-admin-tools/operator.md) を参照。

### 主な処理

- **広報:** お知らせ・アンケートの定義を SQLite から読み、GUI から編集する。編集内容はデータベースへ保存し、定期放送タイマーを作り直す。放送対象は `targetGroups` が空なら全員、そうでなければ `group.<名前>` のいずれかを持つプレイヤー。メッセージはプレイヤーごとにランダム選択し、MiniMessage と `%player%` を適用する。
- **アンケート:** 回答進行状況は UUID ごとにメモリ上に保持し、選択肢・記述式の回答を完了時に保存する。回答数・報酬数は UUID ごとの最新値、回答本文は追記結果として保存する。報酬はコンソールコマンドを実行し、Webhook が設定されていれば Discord に通知する。
- **ワールド境界:** ワールド名ごとに中心・X/Z 半径・任意の形状上書きを保持する。独自の矩形／楕円判定を定期実行し、範囲外のプレイヤーを戻す。テレポート、エンダーパール、ポータルにもリスナーを持つ。
- **スタッフ機能:** `StaffFeature` が権限確認、オンライン対象の検索、コマンド・イベント登録を共通化し、各機能が処理を実装する。Essentials が所有する同名コマンドと指定別名は置き換え、他プラグイン所有の名前は奪わない。Essentials が後から有効化された場合も再確認する。
- **履歴:** join/quit 時に UUID、名前、epoch ミリ秒の時刻、IP、最終位置を記録する。位置はワールド UUID と名前、座標・yaw・pitch を保存する。停止時もオンラインプレイヤーを quit として記録する。

### 運営アシスタント

- 自然言語の依頼を受け、状況の照会とコマンドの提案を行う任意機能。既定は無効で、環境変数の認証情報がない場合も無効になる。初期化と終了の失敗は `Throwable` で隔離し、依存ライブラリのリンク不整合でも他機能を継続する。
- エージェントの反復処理は Koog 1.3.0 のグラフDSLを使用する。毎回 `requestLLMOnlyCallingTools()` で道具を必須にし、文章だけの応答では終了せず、`finish(answer)` で最終回答を確定する。接続先は OpenRouter・Google・DeepSeek、モデルは `LLModel` の provider・id・Completion/Tools capabilities で指定する。OpenRouter の既定モデルIDは `deepseek/deepseek-v4.1-flash`。Google・DeepSeek の専用クライアントは同系列の `1.3.0-beta` を使用する。
- 依存は `agents-core`（道具・executor等を含む）、`http-client-ktor`、3接続先の専用クライアントに限定し、`koog-agents` の集約モジュールは使わない。未使用のリモートデバッグ用Ktor server、OpenAI・Anthropic・Ollamaの専用クライアント、CIOエンジンを推移的依存から除外する。HTTPはKtorのJDK標準エンジンを使用し、Apacheエンジンは同梱しない。KoogのJVM既定シリアライザーが使うJacksonと、OpenRouter・DeepSeekが共有するOpenAI互換の基底クライアントは残す。
- コマンドを実行する機能はエージェントに公開しない。許可された提案をチャットの確認操作で実行し、クリックした本人の `Player.performCommand` を使う。表示には要約と実際のコマンドの両方を含める。本人一致、オンライン、権限、60秒の期限を確認し、実行・取り消しで同じ提案を一度だけ消費する。許可リストは語の境界で照合し、名前空間・制御文字を拒否する。昇格の備考に `GOOD` を含む提案は、大文字小文字を問わず拒否する。
- 照会は DynamicProfile 所有の昇格条件・概要の2コマンドに固定し、設定はその範囲を狭めるために使う。対象はプレイヤー名1つのみで、履歴ページ・GUI・追加引数は渡さない。`Server.createCommandSender` はコンソール相当の権限を持つため、呼び出し前に運営本人の元コマンドの権限を確認し、所有プラグインの名前空間を指定して実行する。出力の取得は最大5秒、最後の出力から500msの無出力で打ち切る。完了通知のない外部コマンドなので、空・不完全な出力から条件達成と判断しないよう指示する。
- 状況照会は運営の名前・ワールド・座標、最大48ブロックの視線先、周囲の見えるプレイヤー最大20人と距離を返す。チャットは収集しない。ワールドやプレイヤーの観測値を指示として扱わないようシステムプロンプトに明記する。
- 通信と反復処理は非同期、プレイヤー参照・照会の開始・提案・確認後の実行はメインスレッドで行う。道具呼出し回数、依頼全体の時間、運営ごとの間隔を制限し、同時依頼と確認待ち中の新規依頼を拒否する。最終回答の道具も `max-tool-calls` に数え、複数の道具が一度に返っても上限を超えて実行しない。道具を呼ばない応答も最大 `max-tool-calls + 1` 回で打ち切る。回数・時間の上限では取得済みの道具の結果（各500文字まで）を返す。時間超過では確認待ちの提案を取り消す。1依頼の提案は1件。終了時は通信・ジョブを閉じ、確認待ちの状態は永続化しない。
- 依頼・照会・提案・実行・取り消しを運営名とUUID付きの1行ログへ記録する。道具の結果を `event=tool-result:<道具名>`（先頭500文字まで）、最終回答を `event=answer` で記録し、既存と同じ制御文字除去・1行化・詳細部分2000文字の制限を適用する。外部サービスの例外本文は記録せず、認証情報の混入を避ける。Koog・Ktor・kotlinxと関連依存は専用パッケージへリロケートし、サービス定義を統合する。反射・サービス読込を壊す縮小は行わない。Kotlin stdlib/reflection は元の名前で同梱する。移動すると組み込み型の解決が壊れることを生成jarのテストで確認し、[Shadow公式の注意](https://gradleup.com/shadow/configuration/relocation/)にも従う。
- 自動テストは偽のLLMによる文章だけの応答からの継続・明示的な終了・回数上限での停止、許可リストと特例拒否、およびサーバーのライブラリなしで生成jarから3接続先の初期化・終了ができることを確認する。外部APIとの通信、チャットの表示、本人・他人による確認ボタンの操作は別途実機確認が必要。

### データ形式・永続化

- DB は `plugins/OyasaiAdminTools/admintools.db`。SQLite の `journal_mode=WAL`、`synchronous=FULL`、`busy_timeout=5000` を設定する。機能別 `*_meta` に `schema_version=1` を記録する。起動時に `AdminDb.open()` が作る bulletin / worldborder の schema 不整合はプラグイン全体の初期化を失敗させる。後から個別に初期化する履歴・vanish・socialspy の schema 不整合は該当スタッフ機能だけを止める。
- 共通テーブルは `bulletin_announcements`、`bulletin_surveys`、`bulletin_survey_counts`、`bulletin_survey_results`、`worldborder_borders`。定義本体と回答一覧は Gson JSON 文字列。お知らせ・アンケートの順序は `sort`、アンケート回答数と報酬数は `(survey_id, uuid)` ごとの行、回答履歴は `id` 順の追記行。
- 機能別テーブルは `playerhistory_players`、`vanish_players`、`socialspy_players`。プレイヤー履歴は UUID 主キー。Vanish/SocialSpy は UUID と ON/OFF を保存する。
- 旧お知らせ・アンケート JSON と旧 WorldBorder YAML はそれぞれの `*_meta.legacy_imported` がない初回にだけ取り込む。移行データは SQLite の transaction 内で登録する。元ファイルは削除しない。旧 Essentials userdata は履歴または SocialSpy の UUID 行を初めて作る時だけ読む。ファイルがない場合も空／OFF の行を作るため、後からファイルが現れても再取込しない。壊れた YAML は行を作らず例外にするため修復後に再試行できる。
- `SurveyProgress` と直近のアンケートタイマー処理 ID 50件はメモリだけにあり、再起動後に復元されない。放送文が空なら履歴は追加されないが、以前追加した ID は放送文を空にしても残る。結果データと回答数は DB に残る。

### 同期・非同期と保存失敗

- DB 接続は単一の `AdminTools storage` executor で順序制御する。`readFeature` / `writeFeature` と `load*` は Future の完了を待つ。履歴・トグル保存は transaction 完了を待ち、呼び出し側へ例外を返す。
- `saveAnnouncements`、`saveSurveys`、`saveAnswer`、境界保存・削除は executor に非同期で積み、呼び出し側を待たせない。書き込み失敗は `AdminTools SQLite write failed: ...` をログに出すだけで、ゲーム内の状態や成功表示を巻き戻さない。回答結果・境界・定義が再起動後に戻る可能性がある。
- Discord の回答通知と CSV エクスポートは Bukkit の非同期タスクから送信する。エクスポートは DB の結果取得も行う。エクスポート結果のプレイヤー向けメッセージも非同期タスク内で送信するため、ゲームスレッド上の挙動は未確認。例外はプレイヤーまたはログに通知するが、ネットワーク送信の成功は保証されない。
- ワールド境界と広報タイマーは Bukkit scheduler の同期タスク。境界の既定チェック間隔は5 tick。

### イベント

| 機能 | イベント・処理 |
|---|---|
| 広報 | 同期タイマーで期限・対象グループを確認して放送。`PlayerEditBookEvent` で管理 GUI の入力本とアンケート記述式の署名を受け取る |
| WorldBorder | `PlayerTeleportEvent` で範囲外テレポートを補正し、既定では範囲外のエンダーパールを取消。`PlayerPortalEvent` は設定時に行先を補正。`WorldLoadEvent` でバニラ境界を reset |
| 履歴 | `PlayerJoinEvent` / `PlayerQuitEvent` を `MONITOR` で記録 |
| Vanish | join/quit/respawn、アイテム取得、プレイヤー間ダメージ、mob のターゲット、sculk のゲームイベント、矢による発火を処理 |
| SocialSpy | 取消済みでない `PlayerCommandPreprocessEvent` を `HIGHEST` で確認し、設定ラベルに一致する入力を配信 |
| Invsee | クリック・ドラッグを `LOWEST` で検査し、対象が退出した場合は閲覧者の画面を閉じる |

### 外部 API・依存と連携

- Gradle 依存は Purpur API、LuckPerms API、OyasaiToken API（compileOnly）、Kotlin stdlib、Gson、Discord Webhooks、InventoryFramework、SQLite JDBC。`plugin.yml` の softdepend は TokenManager、Essentials、DynamicProfile、SocialLikes3、LuckPerms。
- 実コードで API を使う連携は、TokenManager の残高確認・消費、LuckPerms のロード済みグループ一覧、Essentials の権限・userdata と SocialSpy 実行時状態。Essentials の SocialSpy 互換処理は reflection で holder の状態を一時抑止し、YAML を保存する setter は呼ばない。Essentials 内部構造の変更時は再確認が必要。
- `/applylifeworldsettings` は Multiverse の `mv`、WorldGuard の `rg`、`mv gamerule` をコンソールコマンドとして多数実行する。これらの API 依存や実行結果の検証はなく、最後に成功メッセージを送る。コマンドの導入・対象ワールドの状態は運営側で確認する。
- `DynamicProfile` と `SocialLikes3` は `softdepend` に記載されているが、プラグインコードからの API 呼び出しはない。SocialSpy は設定されたコマンド入力ラベルを監視する。
- 内製 WorldBorder は Bukkit のバニラ境界を使わない。起動時にロード済み全ワールド、ワールド読込時に該当ワールドの `WorldBorder.reset()` を呼ぶ。

### テストが保証する範囲

- `AdminDbTest`: bulletin 旧 JSON の一回取込、回答追記・件数更新、無効 JSON 時に移行印を付けないこと、旧境界 YAML のワールド名・半径・形状取込。
- `PlayerHistoryTest`: Essentials userdata の一回取込、欠落ファイルを空値で確定すること、壊れた YAML の修復後再試行、join/quit 記録、機能 schema の失敗分離。
- `RuntimeSpyStateTest`: Essentials holder が親クラスにある場合の検索、保存 setter を呼ばない抑止・復元、holder 再読込検出。
- `StaffCommandRegistrationTest` / `StaffCommandsTest`: Essentials 所有コマンド・別名の置換復元、他プラグイン所有名を奪わないこと、権限・別名メタデータ、SocialSpy のコマンドラベル判定、トグル引数。
- `WhoisTest`: 経験値計算式の境界レベルと丸め。
- コマンドの Paper 上での実行、GUI、イベントの実機挙動、SQLite 書込失敗後の運用、外部サービスとの通信はテストされていない。ゲーム内確認も未実施。

### 既知の制限

- `/bl survey <ID>` や `/anke <ID>` で ID を直接指定した場合、開始処理は対象の有効状態・期限を再確認しない。無効・期限切れでも、対象グループと回答上限を満たせば開始できる。一方、通常の `/anke` は直近50件のタイマー処理履歴から有効・未上限のアンケートを探す。この検索は期限自体を再確認しない。放送文が空なら新しい履歴は追加されないが、残存履歴の ID は候補になり得る。再開・回答受付では有効状態・期限・対象グループを再確認しないため、無効化・期限設定・開始後のグループ権限剥奪では回答を停止できない（`SurveyManager.kt`、`commands/SurveySubCommand.kt`、いずれも `bulletin/survey/` 配下）。
- 質問が0件のアンケートは開始直後に完了し、回答数を増やして報酬コマンドを実行する。放送文なしの新規定義はタイマー履歴へ追加されないため、それだけでは `/anke` から選ばれない（`bulletin/utils/BulletinTimerHandler.kt`）。ID 指定での開始や残存履歴からの選択は可能。
- 期限切れが起動時点ですでに過ぎている定義はタイマー登録されないため、`enabled` は DB 上で true のまま残る。タイマー登録後に期限を過ぎた場合は次回実行で無効化する。
- アンケート回答進行状況はメモリのみ。サーバー再起動やクラスローダーを作り直す再読込で失われる。`SurveyManager` は Kotlin `object` で、`stopAll`・`load` は進行状況と放送履歴を消さないため、同じクラスローダーでの disable → enable や広報 reload では残る。回答完了後の保存は非同期で、失敗時に報酬コマンドや成功表示を取り消さない。
- Webhook URL はアンケートごとの DB 項目。エクスポート CSV は時刻・UUID・プレイヤー名・回答を含み、回答通知の Embed はプレイヤー名・質問・回答を含むが UUID は含まない（`bulletin/survey/SurveyExporter.kt`）。`config.yml` の `webhook-url` はコードから参照されていない。
- `bulletin/survey/SurveyManager.handleAnswer` は現在の質問 index 一致のみを確認し、形式や選択肢への所属は検証しない。`/anke answer` で選択式にも任意文字列（MiniMessage をプレーンテキスト化）を記録して次へ進め、完了時は通常の回答数・報酬処理に入る。番号回答は選択肢の範囲、`text` は記述式かを別途検査する。
- 管理 GUI と入力本コールバックは管理権限を再確認しない。`utils/BookInputHandler.kt` は本のセッション ID でコールバックを取り出すだけで、署名者と所有者を照合しない。権限剥奪後の操作や他人による入力本署名を防ぐ保証はない（`bulletin/survey/gui/`、`bulletin/utils/BulletinGUIUtils.kt`）。
- アンケート削除は `bulletin_surveys` の定義だけを除去する。`bulletin_survey_results` と `bulletin_survey_counts` は残り、同じ ID を再作成すると旧結果が CSV に混ざり、`loadSurveys` で旧回答数・報酬数も復元する（`bulletin/survey/gui/SurveyEditor.kt`、`storage/AdminDb.kt`）。
- 回答一覧は質問 ID ではなく順番で保存する。CSV は現在の質問一覧の index で旧回答を参照するため、質問削除・変更で列の意味が変わり、現在の質問数を超える旧回答は出力されない（`bulletin/survey/models/Survey.kt`、`bulletin/survey/gui/SurveyQuestionEditor.kt`、`bulletin/survey/SurveyExporter.kt`）。公開後の質問変更は新しいアンケート ID で行う。
- 回答本・管理入力本の `addItem` 残余は処理せず、満杯でも付与メッセージを出す。記述式の署名処理は次の質問表示の後、次 tick に手持ち本を削除するため、連続記述式で新しい本が渡されない経路がある（`bulletin/survey/SurveyManager.kt`・`SurveyListener.kt`、`utils/BookInputHandler.kt`）。プレイヤーには空き枠確保後の `resume` と `text` を案内する。
- 報酬は `%player%` を名前に置換してコンソール実行する。戻り値は検査せず、上限未到達なら一覧が空でも報酬回数を増やす（`bulletin/survey/SurveyManager.kt`）。
- ID 作成時に数値・予約語との衝突を検査しない。`SurveySubCommand` はサブコマンドと整数回答を優先するため、接頭辞付きの ID を使う。経路ごとの予約語は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-admin-tools/operator.md) を参照。
- WorldBorder は独自判定で、バニラ境界を reset する。無効化時に元のバニラ境界を復元しない。境界半径入力に正数範囲の一貫した検査はないため、正の半径を設定する。
- 範囲外補正のY座標は、飛行中なら現在の高さをワールド範囲内に丸め、飛行中でなければ補正先の最高ブロック上を使う。補正位置が得られない場合はワールドのスポーン位置へ移動する。
- 境界補正はプレイヤーが乗る乗り物を停止・移動し、乗客を排出する。独立した一般エンティティの境界検査はない。`/wb set` の中心は、ワールド名の明示にかかわらず実行者が指定ワールドにいれば現在位置、それ以外はロード済みならスポーン位置、未ロードなら `(0, 0)`（`worldborder/WorldBorderManager.kt`、`commands/WorldBorderCommandExecutor.kt`）。
- 履歴対象は実名完全一致・既知キャッシュ・UUID で解決し、外部の名前解決はしない。オンライン対象の共通検索は部分一致・表示名も使う。sudo は対象の `chat` 経由で権限・コマンド入力イベントを通し、コンソール実行者は複数指定と対象の免除権限の例外になる（`playerhistory/PlayerHistoryFeature.kt`、`staff/StaffFeature.kt`、`sudo/SudoFeature.kt`）。
- `/playermanager` の `pm` 別名は staff 用の Essentials コマンド所有権調整の対象外。別プラグインの別名と競合する環境での実際の所有者は未確認。
- プレイヤー履歴には IP と最終位置を保存する。DB と旧 userdata の読取権限・バックアップ取扱いが必要だが、自動バックアップや保存期間管理は実装されていない。

## 判断の記録

- 2026-10-18: 途中の宣言で停止する原因は、Koogの既定戦略が文章だけの応答を最終回答とするためだった。既成のReActも同じ終了条件なので、既存のグラフDSLと道具必須の要求を使い、最終回答用の道具を呼ぶまで続ける戦略に変更した。独自のエージェントループは作らず、道具実行・結果の受け渡しはKoogを使う。上限時は観測結果を返し、完了したとは伝えない。

- 2026-10-18: アシスタントの依存を集約モジュールから必要な公開モジュールへ変更。未使用のAWS・計測・デバッグサーバー等を除き、HTTPエンジンをJDK標準へ変更した。コマンド・設定・プロンプト・権限・確認処理は変更しない。反射とシリアライズを使うため、クラスの縮小は行わず、生成jar単体で3接続先・エージェントのセッション生成・道具の引数変換を検証する。

- 2026-10-18: アシスタントは既定OFFの独立機能として追加。読み取りは既知の昇格照会2種類に固定し、設定で任意のコンソール操作を許可できない形にした。外部コマンドの非同期出力は待ち時間付きで取得し、実行の道具は持たせず、本人による一回限りの確認とプレイヤー権限で実行する。短い別名は追加せず、複数提案や会話履歴の保存も設けない。

- 2026-10-13: 外部レビューの各指摘をコードと照合し、対象制限・締切・空放送文の履歴・再有効化・通知内容・境界挙動を訂正。回答検証、GUI/入力本の権限、削除後のデータと質問順、報酬判定等の注意を3文書へ反映した。静的確認のみで、実機のイベント順序・外部コマンドの反映結果は未確認。
- 2026-10-13: 旧 PROJECT の JSON 保存説明を現行実装に合わせて更新。通常の永続化先は `admintools.db` で、JSON/YAML は一回限りの互換取込元。運営コマンドの権限・Essentials 共存設計の詳細は `ESSENTIALS_STAFF.md` に残し、コードで確認できた挙動を本書と [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-admin-tools/operator.md) に反映した。
