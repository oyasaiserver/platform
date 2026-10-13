---
title: "OyasaiMusic — 録音・楽曲共有・環境BGM"
status: active
source: plugins/OyasaiMusic/（コードから作成。ゲーム内での確認は未実施）
source_of_truth: "plugins/OyasaiMusic/"
related_paths:
  - packages/oyasai-plugins.nix
  - plugins/OyasaiToken/
  - gradle/libs.versions.toml
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiMusic

ノートブロック録音、楽曲の公開・限定公開、ソーシャル操作、レコード販売、環境BGMを提供するプラグイン。同一JARにPaperの本体とVelocityの通信・統合版パック連携を含む。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-music/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiMusic/`。以下のKotlinパスは `src/main/kotlin/com/github/sahyuya/oyasaiMusic/` からの相対パス |
| 主要コード | `OyasaiMusic.kt`（初期化・reload）、`command/`、`gui/core/`・`gui/screen/`（アクセス・操作・再生制御）、`audio/recording/`・`audio/playback/`、`db/`、`item/` |
| 連携 | `importing/`（OYMI変換）、`interop/`（OMMT通信）、`resourcepack/`（Paperパック）、`velocity/`（中継・Geyser）、`economy/EconomyService.kt` |
| 定義・既定値 | `src/main/resources/plugin.yml`・`velocity-plugin.json`・`config.yml`・`sound-catalog.json`・`soundeffect/`。`paper-plugin.yml` はない |
| テスト | このチェックアウトのプラグイン配下に `src/test/`・テストファイルはない。純粋関数や `readCustomSoundsForTesting` はあるが、テスト保証の根拠にはしない |
| ビルド | `nix develop --command gradle :plugins:OyasaiMusic:build`。ルート設定により `shadowJar` を実行し `plugins/OyasaiMusic/build/libs/OyasaiMusic.jar` を出力（本調査ではビルド未実施） |
| Nix package | `packages/oyasai-plugins.nix` がプラグインディレクトリを検出し `oyasaimusic` を公開する |
| 既存説明 | [実装側README](../../../plugins/OyasaiMusic/README.md)。現行仕様と食い違う箇所があるため、この資料とコードを優先 |

## 技術仕様

### 構成と依存

- Paperの入口は `OyasaiMusic`、Velocityは `OyasaiMusicVelocity`。plugin.ymlはFAWEをdepend、Vault・TokenManager・OyasaiUtilities・Floodgateをsoftdependとする。Geyser APIはVelocity側で使う。
- `build.gradle.kts` はPurpur開発バンドルを使い、Kotlin stdlib・SQLite JDBCを同梱しrelocateする。SQLiteはminimizeの除外対象。OyasaiToken、Vault、FAWE、Velocity、GeyserはcompileOnly。Gsonはサーバー環境のものを使う。
- 依存カタログはPurpur `26.2.build.2622-stable`、FAWE `2.15.3`、Velocity `4.1.2-SNAPSHOT`、Geyser `2.11.2-SNAPSHOT`、SQLite JDBC `3.53.4.0`、Vault API `1.7.1`。実行環境での組合せは未検証。
- ディレクトリ名とKotlin packageが一致しない部分がある。`audio/playback/` と `audio/recording/` はpackage `audio`、`gui/core/` と `gui/screen/` はpackage `gui`。

### 起動・停止・再読み込み

`onEnable` はFAWE確認 → 既定設定・音源ディレクトリ・カタログ → DBとRepository → Plugin Message登録 → サービス・ランキング・GUI → 録音・コマンド・再生 → 環境BGM復元・タイマーの順。DB接続・移行・カタログ初期化に対する全体の例外回復処理はない。

`onDisable` はコントローラー停止、OMMT保存処理の排出待ち（最大10秒）、環境BGM・再生停止、能力・パック状態の破棄、通信解除、DB終了。OMMTが排出できないとDBを閉じない。他の非同期作業の一括排出はしない。

reloadは設定・パック・カタログ・通知するサーバー能力・報酬サービス・再生エンジンを更新し、旧エンジンを停止する。DB・音源保存先・録音コマンド・録音セッション・コントローラー全体は再作成しない。詳細な適用範囲は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-music/operator.md#reload-の範囲)。

### 録音とインポートの流れ

1. `RecordCommand` がプレイヤーと録音権限を確認。grid/default/inspectはFAWEクリップボードを同期で読み、看板は現在ワールドの同座標の実ブロックから取得する。
2. `GridRecorder` は水平Yawを4方位に丸め、1列を `60000 / BPM` msとして記録。負の看板遅延で先頭が負になる場合は全体を後ろへずらす。
3. `CircuitRecorder` は電源（ボタン・レバー・レッドストーンブロック・トーチ）からダスト・導体・リピーターを時刻順キューで追跡。リピーターはdelay×100ms。信号時刻の上限は10分。同座標・同時刻の発音を重複させない。通常経路が空またはノートブロック総数の半分未満なら構造フォールバックと比較し、音数が多い方を採用する。フォールバックは最大100,000信号で打ち切る。バニラ回路の全要素を再現する実装ではない。
4. live/startは `RecordingSessionManager` にメモリ上のセッションを登録。`NotePlayListener` がMONITOR・ignoreCancelledで発音を集める。liveは同ワールド・録音者現在地の半径48、startは固定ワールドUUID・コピー元の範囲で指定単位へ丸める。音量100・Pan0、看板は3・4行目だけ適用。退出で未保存のセッションを削除する。
5. stopで先頭の無音を除去し、非同期でOYMBを書き、DBへ下書き登録後に同期で設定GUIを開く。通常録音のファイル／DBは一括トランザクションではなく、例外時のcleanupもない。設定画面の再録音は `RecordingReplacementTarget` に指定した既存ファイルを上書きする。

`SignOverrideProcessor` の表側1・2行目は数値を音量0〜100／Pan−100〜100へ補正。3行目は分数（分子・分母各10,000以下、分母正）を四分音符長に対して乗算する。4行目はカタログのIDと固定パターンをseedへ解決。入力エラーはその項目を無視する。

`OyasaiImportService` は受け取ったOYMIをruntime楽器IDへ変換し、下書き・音源を保存。例外時は登録した行と音源を消す処理がある。ファイル取込APIは `import/` 直下の `.oyasai` のみをcanonical pathで検証し、同時取込を抑止、保存後にprocessedへ移動（移動失敗では下書きを戻さない）。現行 `RecordCommand` にファイル取込サブコマンドはなく、ユーザー入口はPlugin Messageだけ。

### 公開・アクセス・審査・報酬

- `Song` は `published`・`limitedPublication`・`collectible` と審査 `status` を独立に持つ。releasedは通常公開または限定公開。個人再生は作者・通常公開・限定公開かつ限定品の所持者。管理権限は通常の `canListen` には入らず、審査試聴だけ別経路で迂回する。
- `SongAccess` は同期で持ち物＋専用ストレージのID／識別UUIDをsnapshotにし、RepositoryはそれをSQL条件へ使う。自作一覧は全状態、一般一覧は通常公開とアクセス可能な限定公開。レコード所持の継続チェックは再生中には行わない。
- 限定品の旧アイテムは現在の曲の識別UUIDを後付けする。空identityを持つsnapshotは旧アイテム互換として同IDへのアクセスを認める。1秒ごとに未識別アイテムのID集合が変わったプレイヤーを走査し、非同期の一括DB読取後に同期でupgradeする。
- `SongRepository` は削除された最小の正の欠番IDを同トランザクションで再利用。新しい `record_identity` はUUIDで別曲への参照を防ぐ。旧identityなしのアイテム・装填データはこの保証の対象外。
- 公開切替は通常／限定のどちらでもreleasedから下書きへ戻る。初回の通常公開時刻をDBに記録し、初回だけ `oyasaimusic.notify` 所持者へ新曲通知する。リポストは通常公開のみ・10PのAPI消費成功後に通知する。
- 審査申請はreleased・未申請の行だけを仮OKへ更新。取消は仮OK・申請ありだけを下書きへ戻し申請時刻を消す。運営の判定変更はstatusだけを変える。収益化条件は `referenceUrl != null` または仮OK／永続OKで、URL内容の妥当性は検証しない。
- いいねはUNIQUE(user, song)を使い、初回だけ統計・作者ポイントを同トランザクションで加算。送信者へのVault即時入金とその障害時退避は別処理。
- 個人再生の80%到達通知は1セッション1回。環境BGM・審査は除外。`ViewCountService` はAFK metadataを同期で確認し、直近1時間／24時間の上限・履歴・視聴数・収益化対象のポイントをDBトランザクションで処理する。自分の曲・非公開曲の視聴を排除する条件はない。
- 購入は最新の曲・identityを再取得して判定し、同期でVault所持金検査と引落、アイテム配布。余りは地面へ落とす。販売履歴・作者還元は後から非同期保存で、DB失敗による返金はない。受取はtakePending → 外部送金 → 失敗分restorePending。外部APIとSQLiteを一括確定せず、強制終了への再実行保証はない。

### 再生とGUI

`PlaybackController` が曲・音源を非同期読取し、OYPB候補を準備、OMMTの能力交渉後に曲identity・アクセスを再確認して同期で開始する。プレイヤーごとの要求世代で古い読取結果・曲間タイマーを無視する。直前の曲の停止は新しい開始時に行う。

`PlaybackEngine` は1セッション1個の毎tickカーソルと単調時計を使う。1tick最大4096音を検査して、経過時刻までの音を送る。音量0は送信しない。最後の発音時刻＋50ms以降、全音処理後に完了通知。一時停止は時計とタスクを止め、再開に500msの猶予。コントローラーは接続中の400tickの停止放置で終了扱いにする。`PlaybackController.onPlayerQuit` でこのタイマーを取り消し、joinでは再登録しないため、一時停止中の退出・再参加ではこの自動終了は働かない。個人再生のセッションは切断だけでは破棄せず、再接続時に残りの再生とボスバーを復元し得るが、再生リスト・保留要求・能力世代は消す。

`SoundDispatcher` は通常再生なら自分に追従する音源、立体音響なら視線基準の半径1の仮想座標を使う。統合版はPan0固定。同時刻・同runtime楽器の和音間引きは旧 `pitch` 値で最低／最高を選ぶため、拡張セント音高そのものの大小を使わない。パックがなければ音高をオクターブ単位で通常域へ折り畳み、微分音の残差を再生倍率に残す。

`ListPlaybackOrder` はIDを重複排除し、通常順・直前曲除外シャッフル・一巡ごとに補充するシャッフルbagを扱う。1曲ループとシャッフルは排他的。通常一覧は自動順送りなし、プレイリストは順送りあり。自動曲間は15tick。再生方式だけは曲×プレイヤーでDBへ保存し、履歴・ループ・シャッフル・画面状態はメモリ。

`MenuManager` は54枠のholderでクリック・ドラッグを既定で止め、200msのクリック間隔を適用。金床入力は結果枠だけ確定し経験値コスト0。統合版のサバイバルでレベル0なら一時的に1を貸し、終了時に回収する。本入力は一意トークンで識別し、新しい要求・退出・無効化で古い入力を破棄する。URL形式の検証はない。

### データ形式と永続化

| 形式 | 内容 |
|---|---|
| SQLite | 単一Connection、WAL・synchronous=NORMAL・foreign_keys=ON。`DatabaseManager.transaction` のロックで直列化し、最外トランザクションでcommit／rollback。UUIDは16バイトBLOB、通常時刻はUNIX秒、パック設定updated_atはms |
| OYMB | big endian。16バイトヘッダー：magic・u16 version・u16予約・i32音数・i32最終発音ms。v1は8バイト/音、v2はUTF-8 customSound長と文字列、v3はseed i64、v4はpitchをi16セントへ変更 |
| OYMI | big endian、20バイトヘッダー＋JSON metadata＋音符。v1〜v4、安定楽器IDをruntime IDへ明示変換。v2はcustomSounds文字列をパターン1扱い、v3/v4はevent・pattern。v4はi16セント |
| OYMC | OYMIの差分時刻・varuintと圧縮向け音符表現。zlib展開後、OYMIへ再構成して検証 |
| OYPB | OMMT再生バッファ。v1は通常整数音高だけ、v2はセント・定位・カスタム固定パターン・bank policy／manifest hash。zlib圧縮、圧縮データのSHA-256 |
| レコードPDC | `record_song_id`、`record_identity_v1`、`record_range`（整数、worldは−1、旧文字列も読取）、`record_trigger`、`record_loop` |
| ストレージPDC | プレイヤーの `record_storage_v1_0`〜`19`。各40枠のItemStackバイト列、1ページ最大1MiB。メインスレッドで保存後に持ち物を変更。閉じる際は全ページをencodeしてから空ページを除去 |
| ジュークボックスPDC | `ambient_record_v1`。セミコロン区切りv1はID・範囲・トリガー・ループ・GameMode、v2はidentity追加。最大160文字。再生位置は保存しない |
| キャッシュ | `ranking_cache.json`、VelocityのXUID行テキスト・UUID/XUID TSV。個別ファイルで一括確定しない |

OYMIの安定楽器IDは `0→0、1→4、2→1、3→2、4→3、5〜19→同値` のruntime IDへ変換する。`importing/OyasaiMidiImportFile.kt` の `readCustomSounds` はv1の `customSounds` を禁止し、v2/v3では非空必須、v4では省略可だが空オブジェクトは拒否する。ノート番号キーは範囲内・数値として昇順で、v2の値はサウンドID文字列、v3/v4の値は `event`・`pattern` の2項目だけを許可する。

OYMB読取は最大1,000,000音、余分な末尾を拒否。v4は時刻順・duration内・runtime楽器0〜19・音量・Pan・通常音のseedを厳密検査し、v1〜v3は音量・Panを補正する。書込は直接上書きで一時ファイル置換ではない。
DBの構成・移行・バックアップ対象は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-music/operator.md#データと移行) を参照。プレイリスト・favorites等は曲削除でCASCADEする。ストレージ・実アイテム・ジュークボックスはSQLiteと別の保存単位。

### 環境BGMとイベント

`PhysicalRecordListener` は主手での右クリックを処理し、存在・identity・範囲上限を検査してジュークボックスPDCを更新後、ゲームモードを問わず1枚消費する。交換は旧盤を返却し、空き不足・装填時GameMode不一致なら中止。回収も同様だが破壊によるdropにはGameMode制限がない。

`AmbientPlaybackRegistry` は起動時のloadedChunksと `ChunkLoadEvent` でPDCを復元し、キャンセルされていない `ChunkUnloadEvent`（MONITOR）でセッション停止・メモリ登録を除く。2tickごとに範囲・通電を検査し、RSの立上がりで開始／停止をトグル。接近は人がいなくなったら停止。範囲は球形、worldなら同ワールド全員。途中入場は現在位置から受信。reloadは停止済みセッションへの参照を消さず、開始判定が `session == null` のためループONでも自動再開しない。復旧操作は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-music/operator.md#reload-の範囲) を参照。音源読取は非同期、再生は同期。設置後の公開状態・権限は再判定しない。

`BlockRedstoneEvent` は翌tickで近隣ジュークボックスを再確認。破壊時はHIGHESTで復元待ちをキャンセル、MONITOR・ignoreCancelledでレコードをdrop。`PlayerInteractEvent` の携帯プレイヤー・レコード操作はignoreCancelledではない。通常のブロック保護・爆発保護を提供する実装ではない。
その他のイベントはGUIのclick／drag／close、金床prepare、book edit、join／quit、plugin disable、Plugin Message、Velocity初期化／終了／backend接続、Geyserのパック読込・切断。パーティクルは20tick周期で個人の頭上／再生中のジュークボックスだけに出す。

### 外部API・通信境界

- `oyasaimusic:upload_v1`: 24KiB以下のpacket、20KiBチャンク、最大64チャンク、圧縮・展開・再構成後各1MiB、最大100,000音。REQUESTで権限確認し10秒の認可、別要求は500ms間隔、プレイヤーごと1転送・全体32転送・検証保存は同時2件。
- BEGIN／CHUNK／FINISHで権限・順序・長さ・SHA-256を検査。直前の同内容チャンクは再送を許可。同要求IDと同metadataの完了応答は10分保持して重複保存を抑止。転送は10分で期限切れを15秒周期で掃除。保存開始前のquit／reload／abortは取消、保存境界後は完了まで継続する。DONEのdetailは採番IDの36進文字列。状態は永続化せず、再起動跨ぎの重複抑止はない。
- uploadエラーは `NO_PERMISSION`、`BUSY`、`RATE_LIMITED`、`OVERSIZED`、`MALFORMED`、`NOT_READY`、`TIMEOUT`、`ORDER`、`HASH`、`IMPORT`。不正packetをdecodeできない場合は応答せず破棄する。
- `interop/OmmtPlaybackClientRegistry.kt` の `supportsV2` は、現在世代のMOD接続に加えOYPB v2・開始ACK・固定カスタムパターン・定位の4能力ビットすべてを要求する。v2ビットだけでは対応と判定しない。
- `oyasaimusic:playback_v1`: nonce・接続世代つきの3秒PROBE。無応答は通常再生へ。OYPBは最大100,000音・圧縮4MiB・256チャンク、1tick2チャンクを送る。READYのhash、STARTED_ACKのhash／最初の可聴音時刻を照合してからクライアント再生を確定し、能力不足・期限切れ・失敗はサーバー位置からPaperの将来の音へ戻す。クライアント申告の失敗位置は信用しない。
- `bedrock_transfer`／`bedrock_pack_status`／`pack_control` はproxyとの専用経路。現在のプレイヤー・対象ID・pack IDを照合し、クライアントからのproxy操作／status偽装を受け付けない。Velocityの通常OMMT中継は現在の `main` 接続に限定し、曲の解析・保存を行わない。
- Java版のALLOWは保存値と現在接続のSUCCESSを分離。未知の設定はDENY。`OmmtPlaybackClientRegistry.matchesBank` はmanifest報告がある場合に現在世代・OYPB v2対応・期待hashの非ゼロ・SHA-256一致を検査する。報告がない場合はOYPB v2の4能力とbank対応能力ビットだけで受け入れる。`OyasaiResourcePackService.requestIfNeeded` はこのtrueでSUCCESSにしJava版パック要求を省略するため、SUCCESSは常にhash照合済みとは限らない。パック要求経路は読込callbackで適用を判断し、任意パック要求はrequired=false。600tickで待機終了。拡張bankの範囲は−4800〜7200セント、通常域0〜2400以外にF#アンカー−36／−12／36／60を使用する。モデルの許容域−5400〜7300の全域がbankで再生されるわけではない。
- Geyserの登録状態は端末受諾完了を観測しない。最終確認はGeyser側classloaderのCumulusを反射で生成。XUID許可保存・再接続・旧設定移行は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-music/operator.md) の該当節を参照。
- 経済はVaultとOyasaiTokenService、AFKはOyasaiUtilities metadata、ヘッドはPaperキャッシュ→PlayerDB。Toastは26.2のCraftBukkit／NMS進捗packetを直接送り、サーバー進捗データへ保存しない。バージョン変更時はこの依存も確認する。

### テストが保証する範囲・既知の制限

プラグイン配下の自動テストは存在しないため、録音時刻、回路解析、SQLite移行、報酬、権限、PDC、通信再送・期限、Geyser確認、音声出力にテストによる保証はない。ルートGradleにはJUnit5設定があるが、このプラグインの検証実績を示すものではない。本資料作成ではビルド・ゲーム内・実サービス接続を行っていない。

- GUIの `editPrice` は `price < 0` を拒否するため、表示される「-1で非売化」と実装が不一致。
- 古い音源上書き・通常録音・購入・報酬受取はファイル／外部API／DBを一括確定せず、失敗や停止時に部分更新が残り得る。
- 旧identityなしのアイテム・装填情報には曲ID再利用を防ぐ元曲の証拠がない。
- 一般のプレイリスト管理画面はページ送りがなく、38件で新規作成ボタンが表示領域から消え、追加先選択や共有で増えた39件目以降は管理一覧に表示しない。追加先選択画面はページ送りを持つ。共有は複数の独立トランザクションでコピーするため途中失敗で部分リストが残り得る。
- `canListen` は個人再生の開始時に判定し、環境BGM・再生中の権限変更へ連続適用しない。GUI詳細へのID直指定は再生可否の判定前に画面を開くので、表示内容まで非公開にする境界ではない。
- 回路シミュレーションはバニラ全回路の同等実装ではない。コメントの「0音時だけフォールバック」より実際の条件が広い。

## 判断の記録

- 2026-10-13: レビューの挙動に関する10指摘を各該当コードで再照合し、すべて反映した。manifest未報告時の能力判定、折り畳み音高による和音選択、公開範囲・管理一覧の表示制限、reload／退出時の状態残存、OMMT互換条件・受付エラー、再生方式の適用時期を利用者別に補足。静的確認のみで、ゲーム内・通信・復旧操作は未検証。
- 2026-10-12: 全Kotlinソース・登録定義・既定設定・ビルド・READMEを照合。カタログ全1968イベントと同梱5効果音のバイナリも解析した。ゲーム内確認は未実施。利用者別の説明はこの3文書を入口とする。
- 2026-10-12: READMEの旧通知名 `oyasaimusic.newsong.notify`、ポイントのコマンド送信、設定可能な視聴完了率、reloadで再生を再構築しない旨を、現行の権限・API・80%固定・エンジン停止へ訂正した。README自体は今回の変更対象外。
- 2026-10-12: このフォルダには既存資料・付属仕様はなかった。READMEが参照する `docs/OMMT_PLUGIN_MESSAGE_PROTOCOL_V1.md` とpack builderは、このチェックアウトで実体が見つからないため有効なリンクとして転載しない。旧設計書名へのソースコメントだけでは仕様確定の根拠にしない。
