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

- 2026-10-13: 外部レビューの各指摘をコードと照合し、対象制限・締切・空放送文の履歴・再有効化・通知内容・境界挙動を訂正。回答検証、GUI/入力本の権限、削除後のデータと質問順、報酬判定等の注意を3文書へ反映した。静的確認のみで、実機のイベント順序・外部コマンドの反映結果は未確認。
- 2026-10-13: 旧 PROJECT の JSON 保存説明を現行実装に合わせて更新。通常の永続化先は `admintools.db` で、JSON/YAML は一回限りの互換取込元。運営コマンドの権限・Essentials 共存設計の詳細は `ESSENTIALS_STAFF.md` に残し、コードで確認できた挙動を本書と [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-admin-tools/operator.md) に反映した。
