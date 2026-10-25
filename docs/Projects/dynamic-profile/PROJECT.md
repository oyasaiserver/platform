---
title: "DynamicProfile — プロフィール・統計・昇格"
status: active
source: "plugins/DynamicProfile/（コードから作成。指摘箇所をコードと再照合済み。ゲーム内での確認は未実施）"
source_of_truth: "plugins/DynamicProfile/"
related_paths:
  - packages/oyasai-minecraft-main.nix
  - plugins/SocialLikes3/
  - plugins/OyasaiEconomy/
  - plugins/OyasaiMenu/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# DynamicProfile

プレイヤープロフィール GUI、行動統計とレベル、称号、おすすめ建築、全期間・週間リーダーボード、昇格・降格を扱う Paper プラグインです。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/dynamic-profile/operator.md)
- 既存の移行・保存設計メモ: [plugins/DynamicProfile/README.md](../../../plugins/DynamicProfile/README.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/DynamicProfile/`（ソース、resources の `plugin.yml`、設定既定値、テストを含む） |
| 主要コード | `DynamicProfile.kt`（起動、保存、登録）、`command/`（コマンド）、`storage/ProfileDatabase.kt`（SQLite と旧 JSON 取込）、`data/Stats.kt`（統計・レベル判定）、`profile/`・`model/`（GUI と機能）、`promotion/`（昇降格） |
| テスト | `src/test/kotlin/com/baakun/dynamicprofile/storage/ProfileDatabaseTest.kt`（旧 JSON 取込、DB 保存、失敗、キュー）、`promotion/PromotionMigrationTest.kt`（旧設定引継ぎ）。Paper 上のコマンドや GUI は対象外です |
| ビルド | `nix develop --command gradle :plugins:DynamicProfile:build` |
| Nix package | `packages/oyasai-minecraft-main.nix` が Paper 向け `oyasai-plugin-registry` から `dynamicprofile` を選択します。プラグイン jar の Nix package 選択は registry 側へ委譲します |

resources にあるプラグイン記述子は `plugin.yml` です。`paper-plugin.yml` は DynamicProfile 配下にありません。

## 技術仕様

### 構成

- `DynamicProfile.kt` が `config.yml` を初期化し、`PromotionMigration.copyLegacyFiles` を呼んだ後、別スレッドで SQLite を開いて旧 JSON 取込・プロフィール読込を行います。メインスレッドへ戻ってキャッシュを設定し、完了後にコマンドとイベントを登録します。
- 同期・読込に失敗すると `Failed to initialize profile database` をログに出し、プラグインを無効化します。初期化前の公開統計参照は一時的な初期値を返し、キャッシュには入れません。
- プロフィール画面は `profile/` と `gui/`、レベル・報酬・送金・おすすめ表示は `model/`、リーダーボードは `leaderBoard/`、昇格は `promotion/` が担当します。

### 主要な処理の流れ

1. 起動時に設定を作成・再読込し、旧 `OyasaiAdminTools` データフォルダから `ranks.json`（DP 側にないとき）と `webhook-url`（DP の設定にキーがないとき）をコピーします。
2. `DynamicProfile-loader` スレッドで `dynamicprofile.db` を開き、初回のみ `UserStatsJSON/*.json` を取り込み、プロフィール・失敗 UUID・称号・週間集計を読み込みます。
3. メインスレッドで `allStats` 等のキャッシュを設定後、コマンド・イベント・おすすめ紹介タスクを登録します。
4. 行動イベントがメモリ上の `Stats` を更新します。退出、投票、管理保存、昇格・降格・称号修復、停止などで保存要求が発生します。
5. プロフィールは呼び出し側でスナップショットし、`DynamicProfile-SQLite` の単一 writer キューが SQLite に保存します。停止時はキュー完了を待って接続を閉じます。

### データ形式と永続化

SQLite は `plugins/DynamicProfile/dynamicprofile.db` です。接続時に WAL、`synchronous=FULL`、`busy_timeout=5000`、外部キーを有効にします。

| テーブル・ファイル | 形式と内容 |
|---|---|
| `schema_versions` | 機能ごとの整数スキーマ版。現在 `profiles=1`、`legacy_json_import=1` を記録します。 |
| `profiles` | UUID 主キーと `stats_json`。昇格履歴を除く統計・プロフィールを JSON として保持します。 |
| `promotions` | UUID と順序番号を主キーにし、種別、ランク、実行者、備考、日時、昇格時の統計などを列で保持します。`profiles.uuid` を参照します。 |
| `legacy_import_failures` | 取込に失敗した JSON ファイル名。UUID 名の行は再起動後も失敗 UUID として読み出されます。 |
| `Titles.json` | `Title` ID、名前、所有者 UUID、優先度、作成日時、説明を保存します。 |
| `LeaderBoards/latest.json` | 週間 `LBStats` の保存済み集計。行動時にメモリ上で自動加算しますが、週次の自動リセットはありません。`updateLB` はファイルを退避し、メモリ上の未保存分を破棄します。 |
| `config.yml`、`groups.yml`、`receiveStatus.yml`、`ranks.json` | 動作設定、レベル別グループ、報酬受取状態、昇格ランク定義。 |

旧 JSON 取込は `UserStatsJSON` が存在する場合の `*.json` を名前順で処理します。キーに使う UUID はファイル名から読みます。欠けた統計項目は `Stats` の初期値を使います。失敗ファイルは個別に記録し、元 JSON は変更しません。プロフィール表が空で、完了印がないときだけ実施し、取込対象が0件でも完了印を記録します。完了後の再取込・JSON への逆変換はありません。

おすすめ建築は `Stats.recommends` の整数スロット 0～4 に SocialLikes3 ID を保存します。紹介欄に存在しない ID があっても自動修復しません。昇格履歴は `promotions` 表、その他のプロフィール値は `stats_json` に保存します。

### 集計・プロフィール・報酬の注意

- `command/LeaderBoardCommand.kt` の週間コマンドは `UUIDMap` の対象者を使いますが、期間値で表示するのは `like`・`reclike`・`chat`・`move` だけです。`move` は徒歩分のみ。`level` は累積経験値順と現在レベル、`playtime` は Minecraft の累積プレイ時間です。
- `leaderBoard/LeaderBoardUtils.kt` の `weeklyUpdate` はメモリを保存せず `latest.json` をコピーして空にします。管理コマンドは続けて `loadWeeklyLB` でメモリを置き換えるため、未保存分は退避にも残りません。`saveWeeklyLB` の呼出しは正常停止時だけです。
- `listener/DailyEvent.kt` は参加時に `ChronoUnit.DAYS` で前回加算日時との差を判定し、初回または差が0でない場合に `join` を1加算します。通常は24時間以上の経過が必要で、暦日ごと・オンライン中の日ごとの加算ではありません。`promotion/rank/RankManager.kt` の `minJoinDays` 判定もこの値を使います。
- `listener/BookIntroListener.kt` は編集本の1ページ目だけを紹介文に保存します。署名時を除外する判定はなく、GUIの「署名して変更せず終了」という案内はキャンセルを保証しません。
- `model/LevelReward.kt` は全報酬の表示名のカンマ前（カンマなしなら表示名全体）を整数レベルとして解析します。同レベルの報酬をまとめて付与し、`Stats.addReceiveRewardStatus` でレベル単位に受取済みを保存します。API未取得や付与結果の失敗を検査しない経路がありますが、例外時は受取済み保存前に中断する場合があります。
- `RecommendBroadcaster.kt` はおすすめ登録済みのオンラインプレイヤーから選出します。初回と設定間隔ごとの特別枠は `donator` / `spdonator` が対象で、不在なら通常枠へ戻ります。モード別の選び方は [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/dynamic-profile/operator.md#おすすめ紹介の選出) を参照してください。特別枠と通常枠のキャッシュは別で、`HYBRID` は選んだ人の建築がすべて既出になると枠の建築キャッシュ全体を消すため、全建築一巡までの重複回避を保証しません。削除済みIDも除外せず、建築名が `null` になり得ます。

### 同期・非同期

- DB の初期化、JSON 取込、読込は `DynamicProfile-loader` で実行し、読み込み完了後にメインスレッドで機能を登録します。
- SQLite 書き込みは `DynamicProfile-SQLite` の単一スレッドに直列化されます。`saveStats` は呼び出し元スレッドで値を複製した後にキューへ送るため、DB コミット完了を待ちません。失敗はログへ通知され、メモリの変更は戻りません。
- `onDisable` は loader と writer の終了を待ちます。writer の過去の失敗は `flush` / `close` で呼び出し元へ返ります。
- `AsyncChatEvent` のハンドラは非同期イベント内で `Stats` を更新します。プロフィール GUI の一部は生スレッドから Bukkit インベントリを更新します。これらの並行動作の安全性はテスト対象ではありません。

### イベント

| イベント | 更新内容 |
|---|---|
| `PlayerJoinEvent` | 参加日カウント、失敗取込 UUID の通知、プレイ時間タスクとおすすめ紹介キャッシュ |
| `PlayerQuitEvent` | プロフィール保存、プレイ時間タスク停止 |
| `VotifierEvent` | 投票カウント・経験値を加算し保存 |
| `PlayerJumpEvent` / `PlayerMoveEvent` / `VehicleMoveEvent` | ジャンプ、歩行・飛行・乗り物の統計 |
| `BlockPlaceEvent` | ブロック設置統計 |
| `AsyncChatEvent` | チャット統計 |
| `SocialLikes3 LikeEvent` | いいねした側・受けた側の統計 |
| `PlayerEditBookEvent` | 編集用の本から自己紹介を更新 |

### 外部 API・依存

`plugin.yml` は `Votifier`、`OyasaiEconomy` を必須依存、`SocialLikes3`、`LuckPerms` を softdepend と宣言します。ビルドは Purpur API、NuVotifier API、LuckPerms API、OyasaiEconomy、SocialLikes3 を compileOnly で参照し、Gson、Discord Webhooks、SQLite JDBC、Kotlin stdlib を同梱依存として宣言します。

- Votifier の投票イベント、SocialLikes3 の建築 ID・所有者・いいね情報を統計やおすすめに使います。
- OyasaiEconomy Economy API と OyasaiEconomy API を残高表示・報酬に使います。ポイント送金は外部コマンド `/token pay`、LuckPerms API と LuckPerms はグループ・ランク照会に使います。
- 昇降格通知は設定された Discord webhook へ送信します。ランク名を `ranks.json` から解決できない場合は通知を送らず警告ログを出します。
- OyasaiMenu は `Tools.validatedTitle` と `Calculator.getLevel` を呼びます。無効な選択称号を検出すると `validatedTitle` は選択を解除して保存を要求します。
- 外部コマンド `/eco pay`、`/token pay`、`/tpa`、`milepoint add` も実行します。コマンドの存在・権限・成功は連携先側の責任です。

### テストが保証する範囲

- `ProfileDatabaseTest` は合成 JSON と一時 SQLite で、全項目と昇格履歴の往復、欠損項目の初期値、元 JSON の保持、初回だけの取込、壊れた JSON / 履歴の個別失敗、空取込の完了印、保存スナップショット、別スレッド writer、close 待機、プロフィールと履歴のトランザクション、SQL 失敗時の取込再試行を検証します。
- `PromotionMigrationTest` は旧ランクファイルと webhook 設定のコピー、DP 側の既存値優先、元ファイル保持を検証します。
- Paper サーバー、コマンド、permission 判定、GUI、イベント登録、LuckPerms / OyasaiEconomy / SocialLikes3 / Discord の実連携はこのテストでは保証しません。

### 既知の制限

- 現在の SQLite プロフィールスキーマは v1 です。未対応の schema version は起動時に例外になり、プラグインを無効化します。
- 初回取込の完了印は、対象 JSON がなくても、また全件失敗でも記録されます。後から JSON を直しても自動再取込しません。取込完了後に増えた JSON も無視します。
- DB の自動バックアップ、JSON への自動ロールバック、保存失敗後のメモリ差し戻しはありません。プロフィールの定期保存もなく、毎分のプレイ時間タスクはメモリ更新だけです。退出・投票・明示保存・正常停止などまでの未保存変更は異常終了時に失われ得ます。
- `RankManager.ranks` は遅延初期化され、設定再読込では更新されません。`promotion/commands/syokakuManager/LoadPast.kt` は `parent add` を未定義グループも含め昇格として取り込み、降格は復元しません。プレイ秒数・レベル・経験値は0で、履歴重複も防ぎません。
- `recommendMode` の設定値 2 は `HYBRID` です。特別枠の間隔は宣伝器起動時だけ読み込みます。`dpsuki` の補完候補 `list` に対応する処理はありません。
- SocialLikes3 の ID 更新・建築削除時におすすめ参照 ID を変換・除去するコードはありません。移行・障害対応時は元の建築と参照 ID を照合してください。
- `model/Calculator.kt` の必要経験値は `min((現在レベル + 4) × basicRequired, maxRequired)` です。`required` は非正値も受け付け、上限にも検査がありません。両方を正数にしてください。必要経験値が0以下になる設定では計算ループが終了しなくなる場合があります。
- `promotion/commands/syokaku/Promote.kt`・`Demote.kt` はコンソール実行者名を `promotedBy` に保存します。`SeePlayerInfo.kt` のチャット・GUI履歴表示は無条件に UUID として解析するため、`CONSOLE` などの記録で例外になります。
- `promotion/discord/SendEmbedMessage.kt` は初期化時の `webhook-url` を保持します。初期化後の `reloadConfig` では変更が反映されず、再起動が必要です。
- `plugin.yml` の設定コメントに実値と合わない既定値があります。運用資料はファイル値・実際のコードを正として記載しています。

## 判断・設計の記録

- 2026-10-13: 外部レビューの指摘を各処理の現行コードで照合し、期間切替の未保存分消失、履歴表示の UUID 解析、報酬・日数・紹介・保存の制限を3文書に反映しました。ゲーム内・実連携の検証は未実施です。

プロフィール DB 化、旧 JSON 取込、昇格履歴の分割保存、移行時の旧設定保持の経緯と検証項目は、既存の [DynamicProfile README](../../../plugins/DynamicProfile/README.md) に残っています。挙動の正本は常にこのディレクトリの現行コードです。

## 2026-10-25 経済APIの統合

経済連携は `io.oyasai.economy.api.OyasaiEconomyApi` を ServicesManager から取得する。金額はLongで、通貨IDを引数に渡す。円とトークンに別のAPIサービスは使わない。参照は既存口座だけを扱い、APIによる口座の自動作成はない。詳細は [OyasaiEconomy](../oyasai-economy/PROJECT.md) を参照。

グループ・ランク照会はLuckPerms APIを直接使う。所持金・ポイントの表示もLongを保ち、送金ボタンは新しいpayコマンドを呼ぶ。
