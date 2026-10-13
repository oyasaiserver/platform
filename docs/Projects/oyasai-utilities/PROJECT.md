---
title: "OyasaiUtilities — 小物系ユーティリティ集"
category: platform
status: active
owner: marzipan99
source: "plugins/OyasaiUtilities/（コードから作成。ゲーム内での確認は未実施）"
source_of_truth: "plugins/OyasaiUtilities/"
related_paths:
  - plugins/OyasaiUtilities/src/main/kotlin/icu/oyasai/utilities/
  - plugins/OyasaiUtilities/src/main/resources/plugin.yml
  - plugins/OyasaiUtilities/src/test/kotlin/icu/oyasai/utilities/
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
agent_task: null
---

# OyasaiUtilities

Paper API 1.21 向けの複合ユーティリティプラグイン。移動・プレイヤー状態・ワークステーション・採掘・持ち物・表示など独立性の異なる機能をまとめる。実装の正本は `plugins/OyasaiUtilities/`。`README.md` と以下の設計資料は機能別の説明・移行経緯を補う。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiUtilities/`。コマンドと権限は `src/main/resources/plugin.yml` |
| 主要コード | `src/main/kotlin/icu/oyasai/utilities/Main.kt` が起動・停止と機能接続、`OyasaiUtilities.kt` が共有ヘルパー。機能ごとの実装は同階層のサブパッケージ |
| テスト | `src/test/kotlin/icu/oyasai/utilities/`。単体・SQLite・YAML解析テストであり、ゲームサーバー接続試験ではない |
| ビルド | `nix develop --command gradle :plugins:OyasaiUtilities:build`。テストだけなら `nix develop --command gradle :plugins:OyasaiUtilities:test` |
| Nix package | `packages/oyasai-minecraft-main.nix` の Paper 向け `oyasai-plugin-registry` に `oyasaiutilities` として登録 |
| プラグイン定義 | `src/main/resources/plugin.yml`（name `OyasaiUtilities`、version `0.1.0`、api-version `1.21`）。`paper-plugin.yml` はこのディレクトリに存在しない |
| 関連資料 | [`README.md`](../../../plugins/OyasaiUtilities/README.md)、[`PLAYER_STATE.md`](../../../plugins/OyasaiUtilities/PLAYER_STATE.md)、[`TELEPORT.md`](../../../plugins/OyasaiUtilities/TELEPORT.md)、[`SQLITE_STORAGE.md`](../../../plugins/OyasaiUtilities/SQLITE_STORAGE.md)、[`WORKSTATIONS.md`](../../../plugins/OyasaiUtilities/WORKSTATIONS.md) |
| 利用者向けガイド | [player.md](player.md)、[operator.md](operator.md) |
| しゃがみイベントの共有 | `PlayerToggleSneakEvent` は Sit（乗り物・這いの解除）、Elevator（下り）、Fart（おなら）が使う。新しいしゃがみ機能では cancel せず、他の機能の処理を止めない |

## 技術仕様

### 構成

`Main` が JavaPlugin のエントリポイントで、コマンド executor / listener / 各 Feature を登録する。機能の主な所在は次の通り。

| 機能 | 主なコード | 概要 |
|---|---|---|
| 移動・ホーム・ワープ・入獄・スポーン | `teleport/`, `spawn/`, `tpath/`, `tpswitch/` | Essentials 互換のコマンド、移動安全、入獄、履歴、受付設定 |
| プレイヤー状態 | `playerstate/` | ゲームモード、飛行、速度、時刻、回復、AFK、ニックネーム、死亡時処理 |
| 作業台・頭 | `workstation/` | 作業台 GUI、エンダーチェスト、廃棄、帽子、プレイヤー頭（統合版の頭は `BedrockSkull.kt`。仕様は `WORKSTATIONS.md`） |
| おなら | `fart/` | しゃがむとおならの音と硫黄色の煙を出すモードを切り替える（`/fart`）。状態はメモリのみ |
| アイテム保管 | `backpack/`, `adminbp/` | 個人 SQLite バックパック、OP 向け YAML 管理バックパック |
| 採掘 | `veinminer/`, `oresmelter/`, `ore_reappears/` | 連鎖採掘、自動精錬、鉱石の時間差再生成・経済連携 |
| モード・アイテム制限 | `creative_management/`, `notnbt/` | ゲームモード別インベントリ、由来印、クリエイティブ由来アイテムの制限 |
| 表示・装飾 | `hats/`, `hologram/`, `debugonbe/`, `timerbar/`, `elevator/` | パーティクル帽子、TextDisplay、プレイヤー向け仮表示、タイマー、床式エレベーター |
| 旧 Skript 移植機能 | `skriptport/`, `pita/`, `getuuid/` | 案内、飛行速度・reach・scale、暗視、慣性停止、UUID 表示、短縮コマンド |
| スキン・参加時処理 | `skin/`, `redbull/`, `joincommands/` | Mojang スキン、期限付き飛行、設定済み参加コマンド |
| 共通保存基盤 | `storage/UtilitiesDatabase.kt`, `YamlConfig.kt` | PlayerState / Teleport 共通 SQLite、YAML 読込・保存 |

`onEnable` は共通 DB を先に開き、Workstation・PlayerState・Teleport は個別の try/catch で失敗時に後始末して続行する。Spawn は Teleport が有効な場合にだけ有効化する。Guidance は保存初期化を内部で処理するが、他機能の全てが個別例外隔離されているわけではない。停止時は各 Feature の後始末後、`finally` で共通 DB を閉じる。

### 主要な処理の流れ

- コマンドの登録名・別名・基本権限・permission-message は `plugin.yml` が宣言元。コード側で OP、対象者側の権限、現在のゲームモードなどを追加確認する機能もある。宣言と実際の判定を分けて確認する。
- Teleport は対象・権限・ワールド条件を確認し、宛先チャンクの非同期読込後にメインスレッドで安全な場所を探索してテレポートする。入獄中は `PlayerTeleportEvent` を HIGHEST で検査し、記録された地点または処理中に認可した地点以外へのテレポートを取り消す。
- TPA 申請はメモリ上に保持し、期限・ログアウト・再起動で失われる。承認時に申請者の権限と受取人の TPswitch を再確認する。申請はテレポートの開始前に消費され、移動失敗後に戻さない。
- PlayerState は Bukkit イベントとコマンドの両方で状態を更新する。Essentials が有効な場合のみ互換 bridge を作り、通常名/別名を置き換える際も Essentials・バニラ以外が所有する同名コマンドは奪わない。
- DebugOnBE は対象ブロックをメインスレッドで走査し、プレイヤーごとのパケット表示を作る。ワールドのブロック状態を置き換えない。Veinminer は隣接鉱石を読み込み済みチャンク内で探索し、各ブロックを `Player.breakBlock` で破壊する。
- PlayerSit・ホログラム・帽子・Red Bull などはそれぞれ専用 listener / scheduler を持つ。機能間で一括トランザクションや一括設定再読込は提供しない。

### データ形式と永続化

| 保存先 | 内容・形式 | 重要な境界 |
|---|---|---|
| `oyasaiutilities.db` | SQLite。`schema_versions` で機能別スキーマ版を管理し、PlayerState と Teleport のプレイヤー状態・ホーム等を保存 | WAL、synchronous=FULL、busy_timeout=5000。直列非同期 writer と読込接続を持つ。書込失敗は記録され、flush / close 時にも報告される |
| `backpacks.db` | UUID ごとの ItemStack 直列化バイト列。schema/user version 1、行データ version 1 | 1 executor。将来 schema / data version、破損データ、54枠超、現在の権限サイズを超える非空スロットは拒否 |
| `tpswitch.db` | SQLite user_version 1。受付 mode、UUID 許可/拒否リスト、旧 YAML 取り込み印・件数 | 設定書込は非同期。旧 YAML の一度限りの取り込みで skipped 項目があっても完了印を立てる |
| `Sit/sit.db` | SQLite user_version 2。右クリック座り除外 UUID、全体 PlayerSit mode | version 1 からの移行でクリック設定を維持し、mode は RANK で初期化 |
| `guidance.db` | SQLite。看板 ID ごとの完了、最後の案内者・名前・日時 | 同一 UUID / 看板 ID を一度だけ記録。既存テーブルが空の時だけ `plugins/Skript/guide_data.csv` を取り込む |
| YAML | `PlayerState/`, `Teleport/`, `Spawn/`, `Warps/`, `Jail/`, `Kits/`, `Hats/`, `DebugOnBE/`, `Holograms/`, `Pita/`, `OreReappears/`, `OreSmelter/`, `Veinminer/`, `JoinCommands/`, `AdminBP/`, `CreativeManagement/` など | 作成方法は `YamlConfig` の resource 同梱有無と機能ごとに異なる。既存ファイルを無条件上書きする移行ではない。保存失敗時にメモリ状態を戻さない機能がある |
| `skins.properties` | 名前別の署名付き texture と取得時刻、UUID 別スキン割当 | 一時ファイルへ書いて置換し、atomic move 非対応時は通常 move へフォールバック |
| PDC / chunk data | Red Bull 期限、クリエ由来・設置位置等 | 有効期限や復元情報の一部はプラグインデータファイルではなくプレイヤー・ワールドデータに依存 |

PlayerState と Teleport の旧 Essentials userdata、Teleport の Warps / Jail / Kits、Spawn の設定、TPswitch の YAML、Guidance の Skript CSV はそれぞれ条件付き・一度限りの読込処理がある。後から旧ファイルだけを直しても再取り込みされない場合がある。共通 DB や個別 DB の復旧前に、どの保存先が正かを調べる。

### 同期・非同期

- Bukkit のイベント、ワールド・インベントリ操作、通常の設定読込は主にサーバーメインスレッドで処理する。Teleport はチャンク読込を非同期にし、安全検査・テレポートをサーバースレッドへ戻す。
- 共通 `UtilitiesDatabase` は書込を単一 executor にキューイングする。`flush()` は先行書込を待つ。close も writer の完了を待ち、蓄積した失敗を例外として返す。
- Backpack は単一 executor で SQLite の読書き・直列化を行い、インベントリ表示は Bukkit scheduler へ戻す。停止時の待機は最大10秒。
- Skin は Mojang HTTP 通信とプロパティファイル操作を非同期にし、プロフィールの適用・プレイヤーへの返信をメインスレッドで実行する。停止時の `SkinStore.close()` は `executor.shutdown()` のみで、完了を待たない（`skin/SkinFeature.kt`, `skin/SkinStore.kt`）。
- TPswitch の保存は非同期。Sit・Guidance・ホログラム YAML 等の一部の書込は同期的。Red Bull の LuckPerms 保存は API の非同期処理で、プラグイン停止時に保存完了を待つ処理はない。
- TimerBar の秒カウントは `java.util.Timer`、ボスバー更新は Bukkit scheduler で4 tickごと。Hologram の毎 tick 処理は END_ROLL 表示だけ。Togo は表示開始時に周囲を1回走査し、表示があれば時間切れの解除を1回予約する。各 refresh の開始時に走査する（`hologram/HologramFeature.kt`, `debugonbe/display/BlockDisplayManager.kt`）。

### イベント

主な listener は、Teleport / 入獄（PlayerTeleport・Join）、PlayerState（Join / Quit / move / chat / interact / fish / death / world change 等）、Workstation（コマンド別名・インベントリ操作）、Backpack（GUI・終了保存）、OreReappears / OreSmelter / Veinminer（採掘・設置・ドロップ）、CreativeManagement / NotNBT（インベントリ・ブロック・アイテム）、Sit（右クリック・移動・解除）、Skin / Red Bull（参加・アイテム使用）、Guidance（看板クリック・破壊）、TimerBar（参加 / 退出）、Elevator、Pita、JoinCommands を扱う。

登録イベントの priority / ignoreCancelled は実装ごとに異なる。`player.md` の操作説明だけから取消の順序や他プラグインとの優先関係を推測せず、該当 listener を読む。

### 外部 API・依存

| 依存 | 宣言・利用 |
|---|---|
| Purpur development bundle / Paper API | Paperweight userdev の開発 API。`plugin.yml` の api-version は `1.21` |
| SQLite JDBC | `implementation`。共通・個別 SQLite ストアで利用 |
| EssentialsX 2.21.2 | `compileOnly`、plugin.yml softdepend。PlayerState / Teleport の bridge と旧 YAML 移行、名前空間・コマンド互換に使う |
| Vault | `compileOnly`、softdepend。OreReappears と Red Bull の経済連携 |
| LuckPerms | `compileOnly`、softdepend。PlayerSit の primary group、Guidance の案内者 group、Red Bull の期限付き権限 |
| Floodgate | plugin.yml softdepend。Skin の統合版プレイヤー識別。導入済み API を利用できない場合は `/skin` を拒否 |
| OyasaiToken（TokenManager 互換 API） | Gradle `compileOnly(project(":plugins:OyasaiToken"))`、plugin.yml softdepend は `TokenManager`。Red Bull は `me.realized.tokenmanager.api.TokenManager` を import し、`getPlugin("TokenManager")` をこの型に cast して残高取得・消費。同じリポジトリの OyasaiToken がこの interface を実装し、`provides: [TokenManager]` で公開（`redbull/RedBullFeature.kt`, `plugins/OyasaiToken/src/main/resources/plugin.yml`） |

機能内のコードパスは、特記しなければ `src/main/kotlin/icu/oyasai/utilities/` からの相対パス。旧取り込み元の `plugins/TPswitch/config.yml`・`plugins/Skript/guide_data.csv`・`plugins/Essentials/spawn.yml`・`plugins/Essentials/config.yml` は、OyasaiUtilities の dataFolder ではなくその親（サーバーの `plugins/`）を基準にする。

### テストが保証する範囲

`src/test/` のテストコードから確認できる範囲は、純粋なルール・設定パーサー・保存層の振る舞いである。22個のテストファイルは主に次を検査する。

- 共通 SQLite の機能別 migration、rollback、WAL 設定、非同期書込・flush・close、失敗報告。
- Teleport のエイリアス・権限名、ホーム上限、jail 期間と制限、TPA 期限・重複、テレポート安全判定、旧 userdata / Warps / Jail / Kits の移行、Essentials 不在時の型ロード。
- PlayerState のエイリアスと権限、ゲームモード・死亡保持・速度・時刻・ニックネーム規則、旧データの一度限りの移行。
- Backpack の SQLite データ版とサイズ権限、Sit の rank / 乗車 graph / SQLite migration、TPswitch の受付と旧 YAML 取込。
- Workstation のエイリアス・頭生成・hat 制限、Veinminer の素材グループ・数値フォールバック、Elevator の5ペア・距離・空間条件。
- Hologram の旧設定読込・シリアライズ・テキスト整形、JoinCommands の定義解析、Skin の Mojang 応答解析・キャッシュ期限、Guidance の CSV / SQLite / メニュー文言。
- Spawn の復活地点選択。

これらはイベント順、Paper 上の GUI 表示、Essentials / Vault / LuckPerms / TokenManager / Floodgate の実接続、実ワールドでの安全性、クライアント表示、実データ移行後の運用を保証しない。この資料の更新時にテストは実行していない。

### 既知の制限・確認できていないこと

- **入獄の有効条件:** `TeleportFeature.enable()` は共通 DB を必須とし、成功時に listener を登録する。失敗時は `Main` が `disable()` で listener を解除して続行するため、共通 DB / Teleport の起動失敗時に入獄制限は働かない（`Main.kt`, `teleport/TeleportFeature.kt`）。正常時は PlayerTeleportEvent を HIGHEST、ignoreCancelled=false で検査する。徒歩・破壊・操作等を封鎖する領域保護ではない。
- **TPswitch:** `ready=false` では `accepts()` が OP を含め false。プレイヤーの受付判定を通る移動・申請が拒否されるが、自分への座標 tp とコンソール tp は通らない。前処理は正規表現に合う通常ラベル `/tp 名前` だけで、完全一致オンライン名を解決できなければ無言取消（`tpswitch/TpSwitchFeature.kt`, `teleport/TeleportFeature.kt`）。
- **TPA 世界権限:** 申請は sender の移動先世界を worldPermission で検査するが、承認は承認者と申請者の現在世界が異なる場合だけ承認者のノードを直接検査。tpa は申請者の世界、tpahere は承認者自身の世界で、worldAllowed を使わない。オフライン釈放は returnLocation を消した後にオンライン者だけ戻すので、次回参加で復帰地点へ移動しない（`teleport/TeleportFeature.kt`）。
- **履歴と Pita:** `tpath/TeleportListener.kt` は原因・取消を絞らず記録するが、ignoreNext を消費したイベントは除外。`tpath/BackForwardCmd.kt` は履歴移動前にこの印を付ける。`pita/Pita.kt` も慣性停止で event.to を変更する際に印を付け、そこでテレポートを発火させないため、次のテレポートが履歴から抜ける可能性がある。`TeleportManager.clear()` の呼出しはなく、履歴は退出しても残る。実機のイベント順は未確認。
- **速度とジャンプ:** `/speed 数値` は isFlying で種別を選んだ後、speedType で種別権限による補正を受ける。jump は共通 TeleportSafety を使わず、照準ブロック・頭上の通過可否・危険素材・境界を独自検査する（`playerstate/PlayerStateCommands.kt`, `playerstate/PlayerStateRules.kt`）。
- **クリエ制限:** `creative_management/GetEvent.kt` の容器クリックは SURVIVAL とそれ以外を分ける（ブロック操作・拾得の判定とは異なる）。ホッパー移動・InventoryDrag・落下ブロックの印の座標追従・他プラグインの直接生成/移動の全経路を封鎖する handler はない。スポーンエッグは cm.bypass の早期 return または cm.bypass.spawn_egg で免除される。
- **DebugOnBE:** 設定 GUI のクリック・ドラッグと自動起動アイテムの保持更新で権限を再検査しない（`debugonbe/gui/TogoGui.kt`, `debugonbe/listener/TogoAutoItemListener.kt`）。ワールド移動時の専用 cleanup はなく、解除は現在世界を基準にする。移動をまたぐ表示復元は未確認。
- **Essentials API:** AFK 連携 metadata は `oyasaiutilities-afk`（`playerstate/PlayerStateRules.kt`）。飛行同期は runtime の `setFlyModeEnabled(boolean)` を反射呼出しするため、別版の互換性は未確認（`playerstate/EssentialsPlayerStateBridge.kt`）。

- 共通 DB、各機能の SQLite、YAML、PDC は保存単位が別で、一括復旧・一括 transaction はない。保存障害時の復旧は保存先ごとに異なり、全機能でロールバックされるわけではない。
- PlayerState / Teleport の旧 userdata 取込は遅延評価で UUID ごと。全プレイヤー一括移行ではない。Warps・Jail・Kits・TPswitch・Guidance も既存ファイル・取り込み印に応じて一度だけ処理する。
- OreReappears の待機鉱石はメモリだけに保持される。異常終了後の復元はない。CreativeManagement はイベント経路を限定して処理し、全ての外部プラグイン・ホッパー経路を封鎖するものではない。
- DebugOnBE の表示状態・粒子・ブロック表示は実サーバー・Java/統合版クライアントで確認していない。画面表示用データの不足する形状は置換対象にならない。
- Skin は同じ名前の取得だけをまとめ、キャッシュは6時間（境界時刻を含む）。Floodgate は reflection で識別し、API が使えなければ安全側に全員を拒否する（`skin/SkinFeature.kt`, `skin/SkinStore.kt`）。scale の0や小さな負数のクライアント表示は未確認。
- Skin の複数コマンド要求順、LuckPerms / 経済 / TokenManager の外部保存結果、メッセージのゲーム内表示は未検証。コード上で戻り値・例外を確認しない外部操作がある。
- `plugin.yml`・全ソース・設定リソース・テストコードを読んだが、ゲーム内起動・操作・データ移行・障害注入は未実施。実サーバーの有効な権限付与や非公開設定も確認していない。

## 統合版（Bedrock）の頭（`/skull`）

仕様は `plugins/OyasaiUtilities/WORKSTATIONS.md`。ここは作業中に踏みやすい落とし穴。

- Java 側の名前で `.` 付き（`.gamertag`）を指定したときだけ、統合版の経路に入る（`BedrockSkull.kt`, `WorkstationFeature.skull`）。統合版の名前を Mojang の名前照会へ落とすと、同名の Java プレイヤーのスキンになる。失敗時は中止する。
- 統合版の Floodgate UUID（`00000000-0000-0000-` 始まり）は Mojang の sessionserver に存在しない（HTTP 204）。統合版の名前・UUID を Mojang で解決しようとしない。
- Global API `GET https://api.geysermc.org/v2/skin/{xuid}` は、保存済みならスキン情報の JSON（`texture_id`, `value` など）を返し、未保存なら `{}` を返す（[公式説明](https://geysermc.org/wiki/api/api.geysermc.org/global-api-web-api-skin-controller-get-skin/)）。`texture_id` が 64 桁 hex であることは未実測。
- Floodgate の公式 features には、Bedrock スキンの Java 形式への変換と Mojang へのアップロードが記載されている（[Floodgate features](https://geysermc.org/wiki/floodgate/features/)）。「そうした機能はない」と断定しない。
- Geyser の custom skull は事前登録方式で、起動時にリソースパックを生成する。稼働中に追加する API は確認できていない（未確認）。統合版クライアントで見せるには、登録と再起動が必要。
- Floodgate API（`FloodgateApi.getPlayer`、`FloodgatePlayer.getJavaUsername` / `getXuid`）は、2.2.5-SNAPSHOT の jar でメソッドの存在を確認済み。
- Geyser の設定は、運用環境ではプロキシ側にある構成があり得る。backend の `plugins/` に残っている設定ファイルが読み込まれているとは限らないので、起動ログで確認する。
- 状態（2026-10-13）: 解析部分（`parseTextureId`、XUID 検証）だけユニットテストあり。実サーバーでの Global API の応答と、統合版クライアントでの表示は未確認。

## 関連資料

- [`README.md`](../../../plugins/OyasaiUtilities/README.md) — 既存の機能紹介
- [`PLAYER_STATE.md`](../../../plugins/OyasaiUtilities/PLAYER_STATE.md) — PlayerState の移行・互換設計
- [`TELEPORT.md`](../../../plugins/OyasaiUtilities/TELEPORT.md) — 移動と入獄の設計・移行記録
- [`SQLITE_STORAGE.md`](../../../plugins/OyasaiUtilities/SQLITE_STORAGE.md) — 共通 SQLite の保存規則・移行メモ
- [`WORKSTATIONS.md`](../../../plugins/OyasaiUtilities/WORKSTATIONS.md) — Essentials のワークステーション互換メモ

## 判断の記録

- 2026-10-13: 文書レビューの指摘を現行コードで照合。TokenManager は OyasaiToken の互換 API、旧取り込み元は dataFolder の親を基準とする。TPswitch 障害・容器制限・速度種別には分岐と免除があるため、無条件の断定を避けて記載した。利用者への影響は player/operator、イベント・未対応経路の詳細は本書へ置く。ゲーム内操作・外部 API 接続・障害再現は未実施。
