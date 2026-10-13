---
title: "OyasaiWorldGenerator — ワールド生成・高さ管理"
status: active
source_of_truth: "plugins/OyasaiWorldGenerator/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-plugin-registry/package.nix
  - packages/oyasai-minecraft-main.nix
  - packages/oyasai-minecraft-axiom.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
source: plugins/OyasaiWorldGenerator/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiWorldGenerator

展示用のボイド・スーパーフラットワールドを管理し、Purpur 26.2 で高さを適用するプラグインです。通常ワールドと範囲ポータルの台帳も扱います。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-world-generator/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiWorldGenerator/` |
| 主要コード | `OyasaiWorldGenerator.kt`（起動・コマンド登録）、`config/OwgConfig.kt`（高さ管理設定）、`world/WorldLifecycle.kt`（自己テスト・高さ管理ワールドの起動/作成/ロード）、`height/NmsHeightProvider.kt`（Purpur 26.2 の高さ適用）、`world/NormalWorlds.kt`・`command/MultiverseCommand.kt`（通常ワールド台帳と操作）、`portal/Portals.kt`・`portal/PortalCommand.kt`（ポータル台帳と操作） |
| テスト | `src/test/kotlin/io/oyasai/worldgen/`。設定既定値、Multiverse の通常ワールド台帳取り込み、ポータル台帳取り込みを確認します。`src/failureTest/` と生成されるテスト専用 Provider は failure injection 用です。 |
| ビルド | `nix develop --command gradle :plugins:OyasaiWorldGenerator:build` |
| Nix package | `packages/oyasai-plugins.nix` が `plugins/OyasaiWorldGenerator/` から `oyasaiworldgenerator` 属性を作ります。`packages/oyasai-minecraft-main.nix` と `packages/oyasai-minecraft-axiom.nix` に登録されています。 |

## 技術仕様

### 構成と起動の流れ

- `plugin.yml` の名前は `OyasaiWorldGenerator`、入口は `io.oyasai.worldgen.OyasaiWorldGenerator`、ロード段階は `STARTUP`、`api-version` は `1.21`。`/owg` の既定権限は OP です。FastAsyncWorldEdit を soft dependency として宣言します。
- `onEnable` は Multiverse-Core / Multiverse-Portals の存在を調べます。どちらか一方でも見つかれば通常ワールド台帳・ポータル台帳の初期化と `/mv`・`/mvtp`・`/mvp` 登録を行いません。高さ管理のライフサイクルと `/owg` は別に初期化します。
- Multiverse がない場合、`NormalWorlds` と `Portals` がそれぞれ台帳を初期化し、イベントを登録します。続いて `WorldLifecycle.primeDeclarations()` が有効な高さ設定を Provider へ宣言してから `WorldInitEvent` リスナーを登録します。
- 高さ管理対象の `WorldInitEvent` で Provider を同期適用し、直後に照合します。初期ワールドの `WorldLoadEvent` 完了後に通常ワールドの自動ロードを始め、`ServerLoadEvent` では次のサーバータスクで設定再読込・自己テスト・対象ワールド検査を実行します。
- 高さ管理対象があり自己テスト有効な起動時と `/owg create` 前に `owg_selftest` を新規作成し、高さを照合して `minY + 1` と `maxHeight - 2` にブロックを置き、保存・アンロード・再ロード後の高さとブロックを照合してから作成したフォルダを削除します。対象がない起動ではスキップします。既存の同名ワールド・フォルダは再利用も削除もしません。
- 高さ適用や照合の失敗時に未検証ワールドをアンロードしません。失敗ワールドは同じ起動中に再ロードしない集合へ記録します。`/owg unload` は適用結果と現在の高さが両方照合できた場合だけ保存してアンロードします。

### 高さ設定と生成

既定 `config.yml` は `worlds: {}`、`self-test: true`、`clear-force-loaded-chunks: false` です。高さワールドの各項目は `OwgConfig.load` で読みます。

| 項目 | 読み取り既定値 | 検証 |
|---|---:|---|
| `generator` | `void` | `void` / `void-end` は `THE_END`、`flat` は `NORMAL`。 |
| `min-y` | `0` | 16 の倍数、`-2032` 以上。 |
| `height` | `0` | 正数、16 の倍数。`min-y + height` は `-2032..2032`。既定値のままでは無効。 |
| `logical-height` | `height` | 正数かつ `height` 以下。 |
| `spawn-y` | `min-y` | `[min-y, min-y + height)` の範囲。 |
| `gamemode` | `adventure` | Bukkit `GameMode` 名として解決できる値。 |
| `allow-flight` | `false` | boolean。 |

ワールド名の許可パターンは `[A-Za-z0-9_.-]+` です。不正項目は設定一覧から外して `validationErrors` と警告へ記録しますが、起動安全ゲートはエラーが1件でもあると全対象ワールドのロードを拒否します。`worlds` セクションがない場合は設定エラーになり、対象を空にします。`/owg create` が作る既定 `HeightSpec` は `(minY=0, height=2032, logicalHeight=256)`、スポーンY=64、ADVENTURE、飛行可です。

`void-end` は `VoidGenerator` を使い、ノイズ・地表・岩盤・洞窟・装飾・Mob・構造物の生成を無効にします。固定スポーンは `(0.5, spawnY, 0.5)` です。`flat` は `WorldType.FLAT` を使用します。高さはバニラ DimensionType を複製した OWG 固有登録へ設定します。`getDefaultWorldGenerator()` が受け付ける ID は null/空・`void`・`void-end` だけで、`flat` は拒否ログを出して `null` を返します。設定上の生成種別と生成器入口の ID を区別してください。ボイドの足場は生成しません。

### 高さ Provider の境界と復元

実装は `height/HeightProvider.kt` と `height/NmsHeightProvider.kt` を参照してください。

- `declare` は生成前にワールド名・期待高さ・環境を宣言するだけです。`apply` は `WorldInitEvent` 内で適用し、`verify` は適用後の値を期待値と照合します。
- `THE_END` ではバニラ END、`NORMAL` では OVERWORLD の DimensionType を複製し、`minY`・`height`・`logicalHeight` の3項目だけ変更します。登録キーは `oyasai:<the_end|overworld>_<正規化したワールド名>_<minY>_<height>_<logicalHeight>`。名前は小文字化して許可外文字を `_` に置換します。同じキーの既存登録は高さを照合して再利用します。
- ServerLevel の DimensionType holder と高さキャッシュ6項目（`minY`、`height`、`maxY`、`minSectionY`、`maxSectionY`、`sectionsCount`）を書き換えて読み返します。`maxY` は上端を含む値です。Starlight の4境界（`minSection`、`maxSection`、`minLightSection`、`maxLightSection`）も変更・照合します。光の境界は高さのセクション境界より上下1セクション広く取ります。最終 `verify` は Bukkit の上下端、ServerLevel、DimensionType、高さと光の境界を照合します。
- 適用失敗時は変更開始済みの Starlight → ServerLevel → 新規 DimensionType 登録の順に復元を試み、各復元を読み返します。個々の復元が失敗しても後続の復元を試みます。ServerLevel は6項目を逆順に戻して holder を戻します。再利用した登録にはレジストリの巻き戻し処理を持ちません。
- 新規登録では `frozen` と `unregisteredIntrusiveHolders` を一時変更し、登録の成否にかかわらず元へ戻して照合します。登録失敗時または後続の適用失敗時は、保存した `byId`、`toId`、`byLocation`、`byKey`、`byValue`、`registrationInfos`、`registryLifecycle`、`temporaryUnfrozenMap` を復元します。
- フィールド名変更時の代替探索があるのは ServerLevel の holder・高さ6項目、レジストリの凍結状態・intrusive map、Starlight 境界の解決など一部です。レジストリのスナップショット取得は固定名に依存し、Starlight の取得・最終照合も `readInt` で固定名を使います。名前変更全般への互換性を保証する仕組みではありません。

### 通常ワールド・ポータルのデータ

- `normal-worlds.yml` は `NormalWorlds` の正本です。再読込は初期化時だけで、手動編集には再起動が必要です。`/owg check` の再読込対象は高さ用設定だけです。名前ごとの `NamespacedKey`、環境、生成器、`kind`、難易度、PVP、飛行、モンスター/動物湧き、スポーン位置、別名、スポーンチャンク保持、自動ロードを YAML に保存します。起動時ロードは高さ管理対象との重複とキー/環境の不一致を拒みます。未ロードで `auto-load: false` またはキーに対応するフォルダがなければ飛ばします。
- 通常ワールドのフォルダは `world/NormalWorlds.kt` の `primaryWorldStorageRoot` / `normalWorldFolder` が主ワールドの保存ルートから `dimensions/<namespace>/<key>` として解決します。主ワールドのパスが `dimensions/minecraft/overworld` ならその3階層上、そうでなければ主ワールドのパス自体がルートです。`/mv create`・`import` の新規キーは `minecraft:<小文字名>` なので、表示名とフォルダ名が一致しない場合があります。
- `portals.yml` は `portals.<name>.location`（ワールド名と両端座標）、`action.type=multiverse-destination`、`action.value`、`safe-teleport` を保存します。範囲へ入るプレイヤーの移動先は、他ポータル `p:<name>[:方向]` またはワールド座標 `e:<world>:x,y,z[:pitch:yaw]` です。目的ワールドはロード済みである必要があります。
- 両台帳の初回作成時、対応する旧 Multiverse ファイルがあり OWG 台帳がまだない場合だけ選択項目を取り込んで新台帳を保存します。既存台帳があると再取り込みません。旧ファイルは削除しません。`loadNormalYaml` は `==:` で始まる Multiverse のクラス識別行を除いて読み込みます。
- 台帳は一時ファイルへの保存後 `ATOMIC_MOVE` と `REPLACE_EXISTING` を試みます。保存失敗を捕捉してメモリ状態を戻す処理はありません。高さ設定の `/owg create` は `config.yml` を `saveConfig()` して追記します。独自 DB や非同期書込み executor はありません。
- `/mv gamerule` はロード済みワールドへ `setGameRuleValue` を呼びますが、OWG の台帳には保存しません。Minecraft ワールドデータ側の再起動後の永続性はこのプラグインのテストで確認していません。

### 同期・非同期とイベント

- 高さパッチ、自己テストのワールド作成/保存/ロード、コマンド処理、YAML の読込・保存は Bukkit/Paper の起動・イベント・コマンド呼出し内で同期実行します。非同期 executor や DB は使いません。
- `WorldInitEvent` は `NORMAL` 優先度で高さ対象を適用します。先行ロードであっても適用を試み、OWG が開始したロードでない場合は `EXTERNAL PRELOAD` を記録します。
- `WorldLoadEvent` は `MONITOR` で初期ロードの完了を追跡し、通常台帳の自動ロードを開始します。`ServerLoadEvent` は `runTask` で起動検査を次のサーバータスクへ送ります。
- `NormalWorlds` は `PlayerJoinEvent` / `PlayerChangedWorldEvent` (`MONITOR`) 後のサーバータスクで飛行状態を適用し、`PlayerRespawnEvent` (`LOW`) でベッド・アンカー以外のスポーン地点を変更します。
- `Portals` はプレイヤーの範囲移動を `PlayerMoveEvent` (`MONITOR`, `ignoreCancelled=true`) から次のサーバータスクで処理し、Nether portal は `PlayerPortalEvent` (`HIGHEST`, `ignoreCancelled=true`) で移動先を書き換えます。テレポート後の到着ポータル再発動抑止（範囲外へ出るまで）、ログアウト時のプレイヤー状態破棄があります。成功後1秒の使用間隔は `use()` を通る徒歩・乗り物経由だけで、`PlayerPortalEvent` 経由にはありません。乗り物は `VehicleMoveEvent` で乗客を降ろして移動させますが、乗り物自体は移動しません。

### 入場経路と安全制御

- `MultiverseCommand.teleport` は通常ワールドと高さ管理対象の両方を検索します。権限の `self` / `other` は引数数ではなく実行者と対象プレイヤーの同一性で決まります。高さ対象は `WorldLifecycle.teleport` へ渡し、通常ワールドは保存済みスポーン（未設定ならワールドのスポーン）へ移動します。
- `WorldLifecycle.teleport` は有効な設定とロード済みワールドを確認しますが、`startupInspectionPassed`・`failedWorlds`・高さ検証結果は確認しません。起動安全ゲートと入場制限は独立しており、失敗ワールドもロード済みならコマンドから入れます。ポータルの移動先解決も高さ安全ゲートを参照しません。
- 高さ用ゲームモードと `allowFlight` は `/owg tp` と高さ対象への `/mvtp` 成功時だけ設定します。`allow-flight=true` は飛行許可だけで `isFlying=true` にはしません。ポータル・他プラグインからの入場にはこの適用処理がなく、通常ワールドの飛行イベントも高さ管理対象を除外します。退出時に入場前の状態を復元する処理はありません（通常ワールドへ出ればそちらの飛行制御を受けます）。
- `Portals` の通過処理には権限チェックがなく、`/mvtp` のワールド別権限を入場制限に使いません。`p:` の安全位置探索は X/Z 中央列の Y 候補だけです。`safe` は足元・頭が固体でも `FIRE` でもないこと、下が固体であること、足元がワールド境界内であることだけを確認します。範囲全体の探索や溶岩等すべての危険ブロックの排除は行いません。

### 外部 API・依存

- プラグイン固有 `build.gradle.kts` は Paperweight Userdev と Purpur development bundle を使い、FAWE Bukkit API を `compileOnly`、テストの Purpur API を `testImplementation` にします。ルート `build.gradle.kts` は `:plugins:` 配下へ Kotlin JVM・Shadow・Java Library を適用し、通常 jar を無効化して `build` を `shadowJar` に依存させます。成果物は `OyasaiWorldGenerator.jar`（version/classifier なし）です。
- `PortalSelection` は FAWE が有効なときだけ WorldEdit の選択範囲 API を呼びます。FAWE 未導入でポータル範囲選択が必要な操作は `[MVP] FAWE が必要です` を返します。
- Multiverse API は依存していません。プラグイン名の有無を調べ、旧形式 YAML を直接読み取るだけです。CustomWorldHeight も実行時依存ではありません。
- 高さ Provider は `org.bukkit.craftbukkit.CraftWorld`、Minecraft の `MappedRegistry` / `ServerLevel` / `DimensionType`、Moonrise/Starlight、リフレクションと JDK `Unsafe` を使用します。対応判定は Minecraft `26.2` かつサーバー名に `Purpur` を含む場合のみです。OWG のサービス API 登録はありません。

### テストが保証する範囲

| テスト | 確認内容 |
|---|---|
| `OwgDefaultConfigTest` | 同梱 `config.yml` が高さ管理ワールドなしで正常に読み込めること。 |
| `LegacyImportTest` | 旧通常ワールド YAML の名前・キー・種別・一部設定、無効登録の読み飛ばし、高さワールド重複の除外、キーからのフォルダ解決。 |
| `PortalImportTest` | 旧ポータル YAML の座標/移動先形式、旧 `==:` 行の無視、不正範囲と未対応 action の読み飛ばし。 |
| `failureTest` source set | NMS Provider の before-apply、after-level、final-verify 段階に統合試験用失敗を注入する別 JAR の生成経路。failure injection source は通常 production source set に含めません。 |

このテスト群は NMS の実適用・ロールバック、実サーバーの起動検査、コマンド権限/メッセージ、プレイヤー移動、ポータルイベント、台帳の実ファイル保存失敗、他プラグインとの競合を保証しません。この作業ではテストやゲーム内動作を実行していません。

### 既知の制限と判断の記録

- 高さを変える NMS 実装の対応先は Purpur 26.2 のみです。代替探索がある箇所は一意に特定できなければ失敗し、固定名依存の箇所は名前が変われば失敗します。変更後は各値を読み返して照合します。
- 起動前から `owg_selftest` のワールド/フォルダが存在すると自己テストを拒否し、ワールドを再利用・削除しません。自己テストや高さ照合が失敗しても、すでにロードされたワールドを自動アンロードしません。
- 対象ゼロで起動すると自己テストは `NOT_RUN`、安全ゲートは false のままです。後続の `/owg create` は個別の自己テスト結果を起動時の `selfTestResult` へ反映せず、安全ゲートも更新しません。作成成功後でもアンロードすると `/owg load` は拒否され、`/owg check` も `NOT_RUN` のため合格しません。有効な対象設定・自己テスト有効・対応サーバーで再起動し、起動検査通過を確認する必要があります。
- `clear-force-loaded-chunks` は既定 false です。有効時は高さ検証済みワールドの強制ロードチャンクを明示解除します。
- ポータル移動先の形式検証はロード時に完結しません。OWG は無効な移動先や未ロードの目的ワールドへ独自テレポートを行わず、プレイヤー向けの失敗通知はありません。Nether portal ブロックでは vanilla の移動が続く場合があります。安全位置検査は移動先ポータルの `safe-teleport: true` が `p:` 形式で参照された場合にのみ働きます。
- プラグイン内の [README](../../../plugins/OyasaiWorldGenerator/README.md) は CustomWorldHeight `v2.2.0-build-4` の調査対象と OWG 独自実装箇所を記録しています。同 README は GPL-3.0 の core/NMS 実装からコード転記していないと記しています。ライセンスの最終判断は未確認です。
- 2026-10-13: レビュー指摘を移動・飛行・ポータル・通常台帳・NMS Provider のコードと照合し、上記仕様を訂正・補足しました。静的照合のみで、テスト実行・ゲーム内検証は未実施です。
