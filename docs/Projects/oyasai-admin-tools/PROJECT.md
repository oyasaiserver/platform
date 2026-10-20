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
last_validated: "2026-10-20"
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

- クライアントから道具の呼び出しを受け、安全判定とコマンド実行だけを担当する任意機能。`assistant.enabled` は既定false。頭脳・モデル通信・APIキー・子プロセス・会話セッションはサーバーに持たない。`/assistant <依頼>` はクライアントの `/ai` を案内し、`/assistant allow list`・`allow remove <番号>` は従来どおり機能OFF時も使用できる。
- プラグインメッセージ `oyasai:assistant` を incoming/outgoing に登録する。UTF-8 の JSON 1個、要求は32KiB以下。権限 `oyasai.admintools.assistant` がない送信者・機能OFF時は受信を捨て、監査ログへ残す。不正なUTF-8/JSON、版、ID長、未知の道具、文字列以外の引数を拒否する。
- 要求は `{"v":1,"id":"64文字以内","tool":"道具名","args":{}}`。応答は同じ `v`・`id` に `result` または `error` の文字列を付ける。結果は8000文字までで、JSON化後の送信サイズが上限を超える場合はさらに短くする。相関IDを取り出せない不正要求は監査だけに残す。
- 運営UUIDごとに同時1件。確認待ちも同じ1件に含め、2件目は `error: busy`。`max-tool-calls-per-minute`（既定30）で直近1分の受付数を制限し、超過は `error: rate limit`。会話の区切りや旧 `max-tool-calls`・`timeout-seconds`・`cooldown-seconds`・`session-*` 設定は使用しない。

| 道具 | 文字列の引数 | 動作 |
|---|---|---|
| `get_context` | なし（`args: {}`） | 本人の名前・ワールド・座標、48ブロック以内の視線先と見えるプレイヤー最大20人、直近のコマンド結果。チャットは収集しない |
| `get_selection` | なし（`args: {}`） | 本人の現在ワールドの FAWE 選択範囲の形（cuboid など）・最小/最大座標・各軸の大きさ・ブロック数。選択なし/未完了・別ワールドはその旨を返す。FAWE 不在やクラス読み込み失敗でも起動を止めず利用不可を返す。確認不要で、共通の権限・回数上限・監査を通す。ブロックの中身は読まない |
| `run_command` | `command`, `summary` | 従来の正規化と安全判定を通す。共有許可済みなら実行結果、未許可なら確認カードを表示し返信を保留。実行後に結果を返し、やめる・45秒切れ・退出は `拒否: 本人が実行しませんでした` |
| `lock_selection` | なし | 本人の現在ワールドの空気だけのキュボイドを検査し、本人を actor に `//gmask #region` を同期実行して固定。上限は `selection-lock-max-blocks`（既定1000000）。検査時間も返す |
| `unlock_selection` | なし | 固定前のグローバルマスクを復元する。元のマスクがなければ解除 |
| `run_commands` | `commands`, `summary` | 改行区切り1～20個、空行不可。全件を正規化・禁止・本人権限で検査し、拒否があれば何も実行しない。全件許可済みまたは固定中の対象FAWE編集なら即実行、その他は一覧1枚を1回確認して順番に実行。各コマンドの直前にも判定し直し、受付失敗・固定消失・条件変更で後続を止める |
| `search_memory` | `query`, `days` | 共有記録の検索。日数も文字列で指定 |
| `record_memory` | `summary` | 2000文字以内・制御文字なしの要約を共有記録へ1件追記。運営名と前回の記録以降のサーバー監査事実・実行コマンドを添える。保存成功後だけ区切りを更新 |

- 選択範囲は既存セッションだけをメインスレッドで読む。`getRegionSelector(world)` は別ワールドの選択を消すため使わず、`selectionWorld` を照合して `getSelection(world)` を呼ぶ。各軸の大きさは両端を含む外接範囲、ブロック数は FAWE の `Region.volume`（非直方体では外接範囲の体積と異なる）。FAWE 型を使う処理は別クラスに分け、呼び出し側で `Throwable` を受ける。
- 単独の確認カードは `[実行] [次から確認しない] [入力欄へ] [やめる]`（常時許可の範囲を作れない操作にはそのボタンを出さない）。入力欄への操作はまず提案を消費し、再判定後に SUGGEST_COMMAND のリンクを表示する。リンクをもう一度押すと入力欄に入り、送信は本人が行う。SUGGEST_COMMAND 自体はサーバーへ通知しないため、サーバーだけでは1クリックの移動と消費を同時に行えない。一括カードは `[実行] [やめる]` だけ。待機は45秒、実行も含めた一括処理は55秒を過ぎた時点で後続を止める。
- 固定中のFAWEコマンドは、メインスレッドで再判定後、本人actorとFAWEの `handleCommandTask` を使ってコマンドを同期実行する。Bukkitの受付だけを返すとFAWEのキュー待機中に解除が先行し、元のマスクで実行され得るため、この経路では再キューしない。同期実行はメインスレッドを使い、選び直した巨大範囲や大半径の操作の走査量は固定のブロック数上限では制限できない。実機負荷は未検証。FAWEが捕捉してチャットへ表示する前のコマンド例外を検知し、構文・権限等の失敗でも一括の後続を止める。例外を投げずにエラー表示だけを行うコマンドや非同期処理の最終結果は引き続きチャットで確認する。
- 固定前のマスクは式の再構築をせず元のオブジェクトを保持する。期限 `selection-lock-minutes`（既定10分）、解除道具、退出、機能OFF、プラグイン停止で復元する。元がなければオンライン・権限あり時は本人の `//gmask` でも解除し、退出や権限喪失時も session のマスクを必ず元へ戻す。期限・機能OFFは1秒周期と実行直前に検査する。手動のマスク変更やワールド移動でも固定を解除・復元する。固定と解除を本人のチャットで通知し、本人の手作業にもマスクが効くことを伝える。
- 固定中の `gmask`・`/gmask`・`mask`・`/mask` は許可リストより前に空気・キュボイド・上限を再検査する。通ったときだけ `//gmask #region` として固定範囲と期限を更新する。任意の式や引数なしによるマスクの解除・緩和は実行しない。更新しても解除時の復元先は最初のマスクのまま。
- 固定中のFAWEブロック編集は、実登録の所有者が FastAsyncWorldEdit で、`AssistantBatch.maskedEdit` に列挙した経路だけ確認を省略し、本人として実行する。通常の `/fill`・`/setblock`・`/clone` 等は従来の許可または確認を維持する。本人実行は受付と成功を区別し、結果を `minecraft_get_chat` で確かめるよう返す。一括の各出力は100文字までにして最大20件とも応答に残す。非同期処理や本人画面だけに出る失敗はサーバー側の受付からは判定できない。
- FAWE 2.15.3 のソースを調査: [RegionCommands.regenerate](https://github.com/IntellectualSites/FastAsyncWorldEdit/blob/2.15.3/worldedit-core/src/main/java/com/sk89q/worldedit/command/RegionCommands.java) はマスクを一時解除する。[LocalSession.undo/redo](https://github.com/IntellectualSites/FastAsyncWorldEdit/blob/2.15.3/worldedit-core/src/main/java/com/sk89q/worldedit/LocalSession.java) はセッションのマスクを引き継がない別の EditSession を作る。RecursivePickaxe はマスクを解除し、コマンドブラシは別コマンドを実行する。これら、履歴・復元、エンティティ/バイオーム操作、未調査の経路は固定中でも確認を必須とする（共有許可済みでも省略しない）。既存のスクリプト・マクロ・チャンク削除等のブラックリストも先に適用する。ブラシは調査したブロック用の種類だけを自動許可し、`-e`/`-b`/`-x` を含むフラグによるエンティティ/バイオームのコピーや削除は対象外。[RegionMaskParser](https://github.com/IntellectualSites/FastAsyncWorldEdit/blob/2.15.3/worldedit-core/src/main/java/com/sk89q/worldedit/extension/factory/parser/mask/RegionMaskParser.java) は選択範囲を clone するため選び直しても固定範囲は動かない。
- 記録は `assistant-memory/YYYY-MM-DD.md`。既存の秘密情報除去を通し、ファイルロック付き追記だけで既存記録を消さない。Linux/Macではフォルダ0700・ファイル0600、シンボリックリンクは拒否する。検索は過去1～3650日、最大8キーワードのAND、直近10行、1日末尾256KiBまで。原文の依頼・チャット・道具出力は監査事実に含めない。未記録の監査事実と直近結果は退出・再起動で消える。
- 判定は必ず正規化→固定の禁止項目と設定の追加禁止項目→共有許可リスト→未許可なら確認の順。旧 `allowed-commands`・`read-only-commands` は無視し、起動時に一度警告する。追加禁止の正規表現が不正なら機能の初期化に失敗させる。固定の禁止項目は設定で外せない。
- 正規化は先頭の `/` を1つ除き、小文字化・空白の集約を行う。タブは空白へ集約し、それ以外の制御文字・改行・`§`・256文字超を拒否する。CommandMapで実際に解決したCommandの所有プラグインと `getName()` を使い、`<所有者>:<名前> <引数>` とする。バニラ・本体は登録済み名前空間から所有者を求め、複数なら `minecraft → bukkit → paper → spigot → purpur` の順で選ぶ。それ以外の名前空間同士のあいまいさは拒否する。未知・正規名の登録と一致しないコマンド、`FormattedCommandAlias` を拒否する。引数も小文字化されるため、大文字小文字を区別する値には注意する。
- PaperのBrigadierラッパーは取得ごとに別オブジェクトとなり、名前空間付きのルートも複製されるため、公開フィールド `VanillaCommandWrapper.vanillaCommand` から登録ノードを確認する。バニラのAPIミラー `ShadowBrigNode` は公開の `getHandle()` で実体を参照し、引数一覧を提供しない不透明なノードは同等とみなさない。実行処理・権限条件・引数ノードが同じものだけを同一のコマンドとして扱い、別名のメタデータから正規名を求める。ルートのredirect/forkは拒否する。確認後の再照合には正規名の登録ノードの同一性を使い、ラッパーの作り直しと登録の差し替えを区別する。フィールドが取得できなければ従来の参照一致へ戻り、不明な登録は拒否する。本体系の禁止パターンは上記5名前空間すべてで適用する。
- 許可の範囲はコマンド名と、最初の引数が英字だけの語ならその語まで。引数がありその条件を満たさないときは常時許可を登録せず、ボタンも表示しない。2語の範囲ではそれ以降の引数は何でも許可する。語の境界で照合するため `lookup` の許可で `lookupx` は動かない。運営全員で共有し、AdminDbの `assistant_allow` に固定番号・範囲・追加者名/UUID・時刻を保存する。初回に `dynamicprofile:syokaku iscandidate`・`getrank`・`seerequirements` を登録する。削除した初期値を再起動で復活させない。`seeplayerinfo` は初期値に含めない。引数なしの提案は `=<所有者>:<名前>` を保存して完全一致で許可する（`=minecraft:list` は `minecraft:list uuids` を許可しない）。既存の印なしの1語・2語の範囲は従来の完全一致・空白境界の前方一致を維持し、保存済みデータの移行は不要。
- 固定禁止の正本は `assistant/AssistantRules.kt` の `CORE_BLACKLIST`。停止・reload/restart、照会以外のPlugManX、op/deop、限定した照会以外のLuckPerms、GOOD特例の昇降格、execute/sudo/function/schedule/return、CraftScript/マクロ、SocialSpy、`@a`/`@e`/`@r`、token addall、whitelist on/off/reload、save-off、CoreProtect purge/対象者指定のないrollback・restore、FAWEのチャンク/スキマティック削除、assistant自身を拒否する。CoreProtectの独立した `co`・`core`・`coreprotect` 登録、rollback/restoreの短縮形、FAWE削除の `d` も含める。
- 許可済み・確認後とも、通常は `Assistant(<運営名>)` という独自CommandSenderをメインスレッドでdispatchする。権限はオンラインの依頼者から毎回借り、isOpはfalse、コンソール/Playerではなく権限Attachmentも持たない。`sender-permissions` は空なら本人と同じ、設定すると列挙した権限だけに絞る。出力はAIへ返し、本人画面へは転送しない。`sender-wait-ms`（既定1500）・`sender-idle-ms`（300）で非同期出力を待つ。収集32Ki文字・AI返却8000文字まで。
- `player-commands`（既定tp/teleport/gamemode/gm/gms/gmc/gmsp/gma/fly/co i/co inspect/co near）は本人として実行する。設定は名前空間を除いたコマンドの先頭から語単位で一致させ、`co i` は `co info` に一致しない。それ以外のPlayer専用エラーは別の「本人として実行」確認を出し、同じ呼び出しを保留する。自動で再実行しない。全経路で実行直前の正規化・禁止・本人権限・登録同一性を再確認する。確認後の出力は次のget_contextでも参照できる。
- 未許可の依頼は `[実行] [次から確認しない] [やめる]` を表示する。ホバーに共有許可へ追加する正規化済みの範囲と、引数なし限定か、その範囲の引数が何でも対象になるかを示す。クリック時に本人一致・オンライン・権限・45秒期限（ハーネス側の道具の待ち時間60秒より短く）・禁止判定を再確認する。実行/取り消しで提案を一度だけ消費する。次からの許可はコマンド受付成功時に追加し、チャットとログで知らせる。1人同時に確認待ちにできるのは1件。時間切れと機能停止時に確認待ちを取り消し、永続化しない。
- `get_context` は運営の名前・ワールド・座標と48ブロック以内の視線先・見えるプレイヤー最大20人を返す。チャットは収集しない。
- ログは運営名/UUIDと `event=` を含む1行。道具・実行・取り消し・受付拒否に加え、`allow-add`・`allow-remove`・`denied:blacklist` 等を記録する。出力監査は先頭500文字、詳細は制御文字と装飾コードを除去して最大2000文字。モデルの最終回答はサーバーへ送られない。
- `sender-permissions`・`player-commands`・`sender-wait-ms`・`sender-idle-ms`・`blacklist` は従来の判定に使用する。コルーチンの依存と出力捕捉を残し、モデル通信のHTTPクライアントは削除する。自動テストはメッセージの検証・権限/機能OFF時の破棄・同時呼び出し・回数制限・確認待ち/実行/取消/期限切れ・記録追記と既存の安全判定を検証する。実際のクライアント接続とゲーム内ボタン・CoreProtectの状態変化は別途実機確認が必要。

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

- 2026-10-20: プラグインを外部の頭脳につなぐ口へ限定した。Koogと実行環境の構築処理を削り、起動設定はargvの `assistant.brain.command` に統一する。認証付きモデル中継、ホストの道具と認可、記録、セッション上限の受け渡しは残す。以下の旧バックエンドに関する判断は当時の試作の記録。

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
