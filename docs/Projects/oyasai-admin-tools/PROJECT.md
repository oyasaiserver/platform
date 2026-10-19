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
  - packages/oyasai-assistant-pi/
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

- 自然言語で状況照会・コマンド依頼・使い方の質問を受け付ける任意機能。既定OFFで、環境変数の認証情報がない場合も無効。`/assistant allow list` と `allow remove <番号>` は機能が無効でも権限を持つ送り主が使用できる。初期化・終了の失敗は独立機能として隔離する。
- 既定バックエンドの反復はKoog 1.3.0のグラフDSLを使用。道具は `get_context`・`run_command(command, summary)`・`search_docs(query)`・`list_docs`・`read_doc(name, part)`・`finish(answer)`。毎回道具を必須にし、文章だけの途中経過では終了しない。`finish`も含む呼び出し回数・全体の時間・運営ごとの間隔を制限する。道具を呼ばない応答も最大 `max-tool-calls + 1` 回で終了し、回数上限では道具なしの追加要求を1回だけ行い、取得済みの情報を日本語で短くまとめる。失敗・空回答・時間切れ時には短い定型文を返し、生の道具結果を並べない。道具回数の既定は12（既存設定値は上書きしない）。
- Koogの接続先はOpenRouter・Google・DeepSeek。モデルは `LLModel` のprovider・id・Completion/Tools capabilitiesで指定する。既定IDは `deepseek/deepseek-v4.1-flash`。Google・DeepSeekの専用クライアントは同系列の `1.3.0-beta`。集約モジュールを使わず、agents-core・KtorのHTTPクライアント・3接続先の専用モジュールを同梱する。未使用のデバッグサーバー・OpenAI/Anthropic/Ollama専用クライアント・CIOを除き、HTTPはJDKエンジンを使う。既定シリアライザーのJacksonとOpenAI互換の基底クライアントは残す。
- 試作のPiバックエンドは `assistant.backend: pi` で選択する（既定 `koog`）。Node子プロセスと標準入出力のJSON行で通信し、ポートを開かない。`pi.node`・`pi.script`・`pi.docs`・`pi.model` を指定し、認証情報は子の環境へ渡す。起動時に子を開始し、停止・依頼の時間切れ・プロトコル異常で終了する。異常終了した依頼は失敗し、次の依頼で再起動する。子は1つで依頼を直列処理するため、待ち時間も既存の全体時間制限に含む。
- Pi 0.73.1 SDKは `get_context`・`run_command`・`search_docs`・`read_doc`・`search_memory` の名前を明示許可し、自作の道具だけを登録する。拡張・技能・テンプレート・AGENTSの自動探索を行わないResourceLoaderと、メモリ内の認証・設定・会話を渡す。組み込みのread/bash/write/edit等をモデルに公開せず、再読込・再有効化でも登録されないことをテストする。これは道具の制限でありOSのサンドボックスではない。
- Piの資料は指定フォルダ直下の各プロジェクトの `PROJECT.md`・`player.md`・`operator.md` だけを起動時に読み取り専用のスナップショットへ取り込む。シンボリックリンク・任意パスを許可せず、1ファイル512KiB・合計10MiB・最大500ファイルに制限する。検索は最大3節の短い抜粋、読取は検索で得た資料名と見出しの完全一致で最大4000文字。公開資料と運営資料をコピーするスクリプトだけを公開し、運営資料はjar・Gitへ入れない。
- `assistant.backend: pi-container` はrootless Podman内でPiの組み込みread/bash/write/editとget_context/run_commandを使う試作。既定のkoogと従来のpiは維持する。`pi-container.podman`・`pi-container.image` と共通の `pi.docs`・`pi.model` を指定する。公式Node 24.22.0 bookworm-slimをダイジェスト固定したContainerfileから別途イメージを作る。
- コンテナはネットワーク・IPC共有なし、UID 1000、全capability削除、no-new-privileges、読み取り専用ルートで起動する。資料ルートだけを `/docs:ro` として公開し、64MiBのtmpfs `/workspace` だけを書込先にする。メモリ512MiB・CPU 1個相当・PID 64を上限とし、起動時から1つ待機させ、依頼の前後に子プロセスと作業ファイルを片付ける。異常・時間切れはコンテナを破棄して次の依頼で再作成し、停止時にも削除する。起動時間も全体の制限に含み、検証時の推奨は `timeout-seconds: 90`（既定45・最大180）。
- コンテナへAPIキーを渡さない。Piのstdio独自プロバイダがモデル要求をJSON行で渡し、プラグインのKtorクライアントが固定のOpenRouter接続先へ非ストリーミングで中継する。接続先・認証・モデル・出力上限はコンテナから変更できない。要求/応答各512KiB、通常のモデル要求は `max-tool-calls + 1` 回まで、記録要約は別の道具なし要求1回までとし、異常・キャンセルでも名前指定のコンテナを削除する。Minecraft操作は従来の本人権限と確認判定だけを通す。
- Piでも実行は同じ `runCommand` と確認処理を通る。道具数は既存の設定値で制限し、上限後は道具を外した要求を一度だけ行う。SDKが1実行中の道具一覧を保持するため、要求境界でも道具を除く。無効な道具要求も含め応答回数を `max-tool-calls + 1` に制限し、全体時間を超えた子は終了する。最終回答はPiの通常の文章応答を使用し、途中経過だけで終わらない方針を指示する。
- Pi/pi-containerは運営UUIDごとにPiセッションを保持し、`session-idle-minutes`（既定10分）で破棄する。`/assistant reset` は本人の会話・直近結果・確認待ちを消すが共有記録は消さない。`session-max-messages`（40）・`session-max-chars`（48000）に達したUUIDのセッションは作り直す。最大32セッションで古いものから破棄し、毎回のモデル要求で観測データ内の指示を無視する方針を再適用する。Koogは会話・記録とも対象外。
- Piの依頼終了時、プラグインの監査イベントから実行・受付・提案・取消・拒否を抽出し、道具なしAI要求1回の短い要約とともに `assistant-memory/YYYY-MM-DD.md` へ追記する。本人が確認後に実行・取消した場合も補足を追記する。原文の依頼・生のチャット・道具の出力は要約入力にしない。コマンド名、既知の照会サブコマンド、プレイヤー名、固定の質問分類だけを渡し、IP/秘密情報のパターンも保存時に除去する。受付は成功と区別する。
- 記録は運営共通。`search_memory(query, days)` は日付と最大8キーワード（AND）で過去1～3650日を検索し、直近10行まで返す。1日分の読取は末尾256KiBに制限する。Markdownはファイルロック付き追記だけで既存記録を消さず、Linux/Macではフォルダ0700・ファイル0600とする。AIには任意のファイルパスを渡せず、コンテナにも記録フォルダを追加マウントしない。
- 判定は必ず正規化→固定の禁止項目と設定の追加禁止項目→共有許可リスト→未許可なら確認の順。旧 `allowed-commands`・`read-only-commands` は無視し、起動時に一度警告する。追加禁止の正規表現が不正なら機能の初期化に失敗させる。固定の禁止項目は設定で外せない。
- 正規化は先頭の `/` を1つ除き、小文字化・空白の集約を行う。タブは空白へ集約し、それ以外の制御文字・改行・`§`・256文字超を拒否する。CommandMapで実際に解決したCommandの所有プラグインと `getName()` を使い、`<所有者>:<名前> <引数>` とする。バニラ・本体は登録済み名前空間から所有者を求め、複数なら `minecraft → bukkit → paper → spigot → purpur` の順で選ぶ。それ以外の名前空間同士のあいまいさは拒否する。未知・正規名の登録と一致しないコマンド、`FormattedCommandAlias` を拒否する。引数も小文字化されるため、大文字小文字を区別する値には注意する。
- PaperのBrigadierラッパーは取得ごとに別オブジェクトとなり、名前空間付きのルートも複製されるため、公開フィールド `VanillaCommandWrapper.vanillaCommand` から登録ノードを確認する。バニラのAPIミラー `ShadowBrigNode` は公開の `getHandle()` で実体を参照し、引数一覧を提供しない不透明なノードは同等とみなさない。実行処理・権限条件・引数ノードが同じものだけを同一のコマンドとして扱い、別名のメタデータから正規名を求める。ルートのredirect/forkは拒否する。確認後の再照合には正規名の登録ノードの同一性を使い、ラッパーの作り直しと登録の差し替えを区別する。フィールドが取得できなければ従来の参照一致へ戻り、不明な登録は拒否する。本体系の禁止パターンは上記5名前空間すべてで適用する。
- 許可の範囲はコマンド名と、最初の引数が英字だけの語ならその語まで。引数がないかその条件を満たさないときは常時許可を登録せず、ボタンも表示しない。それ以降の引数は何でも許可する。語の境界で照合するため `lookup` の許可で `lookupx` は動かない。運営全員で共有し、AdminDbの `assistant_allow` に固定番号・範囲・追加者名/UUID・時刻を保存する。初回に `dynamicprofile:syokaku iscandidate`・`getrank`・`seerequirements` を登録する。削除した初期値を再起動で復活させない。`seeplayerinfo` は初期値に含めない。
- 固定禁止の正本は `assistant/AssistantRules.kt` の `CORE_BLACKLIST`。停止・reload/restart、照会以外のPlugManX、op/deop、限定した照会以外のLuckPerms、GOOD特例の昇降格、execute/sudo/function/schedule/return、CraftScript/マクロ、SocialSpy、`@a`/`@e`/`@r`、token addall、whitelist on/off/reload、save-off、CoreProtect purge/対象者指定のないrollback・restore、FAWEのチャンク/スキマティック削除、assistant自身を拒否する。CoreProtectの独立した `co`・`core`・`coreprotect` 登録、rollback/restoreの短縮形、FAWE削除の `d` も含める。
- 許可済み・確認後とも、通常は `Assistant(<運営名>)` という独自CommandSenderをメインスレッドでdispatchする。権限はオンラインの依頼者から毎回借り、isOpはfalse、コンソール/Playerではなく権限Attachmentも持たない。`sender-permissions` は空なら本人と同じ、設定すると列挙した権限だけに絞る。出力はAIへ返し、本人画面へは転送しない。`sender-wait-ms`（既定1500）・`sender-idle-ms`（300）で非同期出力を待つ。収集32Ki文字・AI返却8000文字まで。
- `player-commands`（既定tp/teleport/gamemode/gm/gms/gmc/gmsp/gma/fly）は本人として実行する。それ以外のPlayer専用エラーはAIへ返し、別の「本人として実行」確認を出す。自動で再実行しない。全経路で実行直前の正規化・禁止・本人権限・登録同一性を再確認する。確認後の出力は次のget_contextでも参照できる。
- 未許可の依頼は `[実行] [次から確認しない] [やめる]` を表示する。ホバーに共有許可へ追加する正規化済みの範囲と、引数が何でも対象になることを示す。クリック時に本人一致・オンライン・権限・60秒期限・禁止判定を再確認する。実行/取り消しで提案を一度だけ消費する。次からの許可はコマンド受付成功時に追加し、チャットとログで知らせる。1依頼で確認待ちにできるのは1件。時間切れと機能停止時に確認待ちを取り消し、永続化しない。
- `get_context` は運営の名前・ワールド・座標と48ブロック以内の視線先・見えるプレイヤー最大20人を返す。チャットは収集しない。観測値や道具の出力を指示として扱わないよう明記する。公開の `docs/Projects/*/PROJECT.md`・`player.md` のうち `project_kind: plugin` の自作プラグイン資料だけをビルド時に `assistant-docs/` へ同梱する。`search_docs` は200文字以内のキーワードで見出し単位の節を検索し、全キーワードを含む節から最大3節・合計4000文字未満の抜粋を返す。必要なら一覧の名前と1からの分割番号で最大6000文字ずつ読む。FAWE・WorldGuard・LuckPerms・CoreProtect等の外部プラグインや資料にない話題は一般知識と明記して回答し、関係のない資料を読み歩かない。Koogは非公開の運用資料やファイルパスを指定して読む機能を持たない。
- ログは運営名/UUIDと `event=` を含む1行。依頼・道具・実行・取り消しに加え、`allow-add`・`allow-remove`・`denied:blacklist` 等を記録する。道具結果は先頭500文字、最終回答は `event=answer`、詳細部分は制御文字と装飾コードを除去し最大2000文字。外部APIの例外本文は記録しない。
- Koog・Ktor・kotlinxと関連依存は専用パッケージへ移動し、サービス定義を統合する。反射を壊す縮小は行わない。Kotlin stdlib/reflectionは元の名前を保持する（[Shadow公式の注意](https://gradleup.com/shadow/configuration/relocation/)）。自動テストは正規化・別名拒否・禁止優先・共有許可の範囲と永続化・資料の同梱と境界・戦略の終了条件・jar単体の読込を確認する。外部API通信とゲーム内のボタン操作は別途実機確認が必要。

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

- 2026-10-19: 確認後は同じ運営のPiセッションへ実行結果を観測データとして渡し、AIの続きを表示する。説明と確認カードは1つにまとめ、実行は緑・運営全員の常時許可は金で分ける。最初の引数が英字のサブコマンドと見なせない操作は常時許可ボタンを出さず、コマンド全体へ範囲を広げない。回答は指示文で短い平文とし、固定整形はしない。Piの役割・書き方・作業手順は資料直下のAGENTS.mdとINDEX.mdへ分離して毎依頼読み直し、安全の約束と探索しないResourceLoaderはコードに残す。追加の作業票・版照合・予防的な制御は設けない。

- 2026-10-19: コンテナを起動時から待機させ、作業ファイルだけを毎回消す方針へ変更した。短い会話はUUID別のメモリ内セッション、長い記録は運営共通の追記Markdownに分ける。追加の要約APIを使うcompactionは選ばず、上限で古いセッションを作り直す。記録要約には監査から抽出した安全な事実だけを渡し、生のチャットやコマンド出力を永続化しない。曖昧な実行受付から成功を捏造しないよう、事実欄をAI要約と別に添える。

- 2026-10-19: 本人と同じ権限を借りるAI専用送り主を採用し、出力を直接AIへ返す。コンソール相当のPaper送り主は使用しない。Paperのdispatchに必要なネイティブ橋渡しは、権限なし・Player実体なしのSourceStackとAI送り主自身をcaller/calleeにしたProxyを使う。サーバー内部API変更時は拒否し、コンソールへは代替しない。Player専用のバイトコード判定はやめ、設定一覧と実際のPlayer専用エラーを使い、本人としての再実行には改めて確認を要求する。出力待ちでメインスレッドを止めず、dispatchは一度だけ行う。

- 2026-10-19: Piの組み込み道具を試すため、キーを持たずネットワークもないrootlessコンテナとstdioモデル中継を追加した。常駐方式の作業ファイル混入を避け、通常の起動が約1.1秒だったことから依頼ごとの破棄を選ぶ。初回起動は約13.8秒だったため45秒の既定は維持しつつ試作では90秒を推奨する。道具上限2回での4問比較では資料検索・回答品質の一律改善は見られず、既定を切り替える根拠とはしない。

- 2026-10-19: 本体コマンドの正規化失敗へ対応。名前空間の優先順だけでは解消しないため、Paperが毎回生成するラッパーと、複製されたBrigadierルートの同等性も確認する。Command名だけの比較は別の実行処理を許可し得るため採らず、実行処理・権限条件・引数ノードの参照を照合する。実行直前の登録差し替え拒否は正規名ノードの同一性で維持し、redirect/forkは拒否する。優先順は上記5種類に限定し、それ以外のあいまいさは拒否したままとする。

- 2026-10-19: 頭脳だけをPi SDKのNode子プロセスへ分離する試作を追加した。ネットワークの待受けを作らず、既存の安全判定を共用するため標準入出力を選んだ。CLI/RPCの自動探索を避け、4つの自作道具・メモリ内の設定と会話・探索しないResourceLoaderを明示する。既定はKoogを維持する。非公開の運営資料はデータフォルダへ別配置し、公開jarとビルドには含めない。Nix/GradleへのNode組込みと本番配置は試作の範囲外とする。

- 2026-10-19: 外部プラグインの使い方を求められ、関係のない資料を読み歩いて回数上限に達する問題へ対応した。キーワードで関連する節だけを返す検索を追加し、同梱を自作プラグインの公開資料に限定する。外部プラグインは一般知識と明記して回答させる。上限時は生の道具結果を返さず、Koogの道具なし要求で一度だけ要約する。失敗・空回答・時間切れは短い定型文にする。既定の道具上限を8から12へ増やし、全体の時間制限は維持する。

- 2026-10-18: 全コマンドの事前分類を廃止し、解除できない禁止項目と運営全員で育てる共有許可へ変更した。未許可は本人確認、許可済みは本人権限で実行する。コンソール相当の出力捕捉は撤去した。Paperの汎用フィードバック送り主はコンソール権限のため採用せず、本人の画面へ出力する方式を選んだ。公開資料だけを同梱し、使い方の回答も資料に基づかせる。

- 2026-10-18: 途中の宣言で停止する原因は、Koogの既定戦略が文章だけの応答を最終回答とするためだった。既成のReActも同じ終了条件なので、既存のグラフDSLと道具必須の要求を使い、最終回答用の道具を呼ぶまで続ける戦略に変更した。独自のエージェントループは作らず、道具実行・結果の受け渡しはKoogを使う。上限時は観測結果を返し、完了したとは伝えない。

- 2026-10-18: アシスタントの依存を集約モジュールから必要な公開モジュールへ変更。未使用のAWS・計測・デバッグサーバー等を除き、HTTPエンジンをJDK標準へ変更した。コマンド・設定・プロンプト・権限・確認処理は変更しない。反射とシリアライズを使うため、クラスの縮小は行わず、生成jar単体で3接続先・エージェントのセッション生成・道具の引数変換を検証する。

- 2026-10-18: アシスタントは既定OFFの独立機能として追加。読み取りは既知の昇格照会2種類に固定し、設定で任意のコンソール操作を許可できない形にした。外部コマンドの非同期出力は待ち時間付きで取得し、実行の道具は持たせず、本人による一回限りの確認とプレイヤー権限で実行する。短い別名は追加せず、複数提案や会話履歴の保存も設けない。

- 2026-10-13: 外部レビューの各指摘をコードと照合し、対象制限・締切・空放送文の履歴・再有効化・通知内容・境界挙動を訂正。回答検証、GUI/入力本の権限、削除後のデータと質問順、報酬判定等の注意を3文書へ反映した。静的確認のみで、実機のイベント順序・外部コマンドの反映結果は未確認。
- 2026-10-13: 旧 PROJECT の JSON 保存説明を現行実装に合わせて更新。通常の永続化先は `admintools.db` で、JSON/YAML は一回限りの互換取込元。運営コマンドの権限・Essentials 共存設計の詳細は `ESSENTIALS_STAFF.md` に残し、コードで確認できた挙動を本書と [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-admin-tools/operator.md) に反映した。
