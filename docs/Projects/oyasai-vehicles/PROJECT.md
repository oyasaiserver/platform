---
title: "OyasaiVehicles — 車両ビルダー"
status: active
source: plugins/OyasaiVehicles/（コードから作成。レビュー指摘をコードと照合済み。ゲーム内での確認は未実施）
source_of_truth: "plugins/OyasaiVehicles/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiVehicles

CarBuilder2 と AircraftBuilder で車両・航空機を作成、試乗、購入する Paper プラグインです。MileagePoint と TimeAttack も同梱します。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-vehicles/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiVehicles/` |
| 主要コード | `OyasaiVehicles.kt`（起動・登録）、`VehicleMenuCommand.kt`・`VehicleGarageService.kt`（共通 UI・ガレージ）、`anybuilder/carbuilder2/`・`anybuilder/aircraftbuilder/`（ビルダー、イベント、走行）、`anybuilder/runtime/`（共通エンティティ）、`milepoint/`・`race/TimeAttackCommand.kt` |
| テスト | `src/test/` はありません。プラグイン固有のテストによる保証はありません |
| ビルド | `nix develop --command gradle :plugins:OyasaiVehicles:build`（`OyasaiVehicles.jar`） |
| Nix package | `packages/oyasai-plugins.nix` の `passthru` が `oyasaivehicles` を公開します。`packages/oyasai-minecraft-main.nix` は同名プラグインを選択します。 |

## 技術仕様

### 構成

- `plugin.yml` の名前は `OyasaiVehicles`、メインクラスは `io.oyasai.OyasaiVehicles`、API 宣言は `1.21.8`。コマンドは `/realvehicle` (`rvmenu`)、`/carbuilder2` (`cbmenu`)、`/aircraftbuilder` (`acmenu`)、`/milepoint`、`/timeattack` (`ta`) です。
- `onEnable` で標準設定を用意し、`Tools` を初期化して設定・カスタム頭アイテムを読み込みます。共通コマンド、ガレージ、ポイント、GUI listener、各ビルダーのコマンド・イベントを登録し、車両キャッシュ、ポイント、パケット処理を開始します。
- CarBuilder2 と AircraftBuilder は車両ごとの YAML と schematic を読み、座席用 ArmorStand、車体用 ArmorStand、表示用 BlockDisplay を組み立てます。車両ごとに BossBar と 1 tick 周期の走行タスクを持ちます。
- `EntityRuntime` は運転者の WASD 入力、速度・旋回、座席・表示位置を更新します。`MileageTracker` は乗車中の距離を計測し、車両終了・降車などの精算時にポイントへ加算します。
- `TimeAttackCommand` はコマンドブロックから近くの CarBuilder2 車両と運転者を探し、開始・区間・周回・ゴールを処理します。プレイヤーからは自己ベスト表示を受け付けます。

### 主要な処理の流れ

1. プレイヤーがビルダーメニューで購入すると、`MileagePoint.payment` が 100 ポイントを引き、性能値を item lore に持つ `HOPPER_MINECART` を渡します。購入アイテムは CarBuilder2 が CustomModelData 10831、AircraftBuilder が 20831 で識別します。試乗はアイテム購入を経由せず、標準の試乗アイテムから車両を作ります。
2. 購入アイテムをメインハンドに持ってブロック上面を右クリックすると、ride 権限、アイテム識別、車両データの存在、購入車両数などを確認してスポーンします。成功時だけアイテムを消費します。車両データが見つからない場合はスポーンされず、通常は専用エラーメッセージもありません。
3. 空席の座席を右クリックすると権限確認後に搭乗します。停止に近いときの自動搭乗では権限を確認しません。座席0がなければ運転者を取得できません。運転席に乗ると tick タスクが始まり、走行物理、表示、音、ライト、BossBar を更新します。乗客パケットは NMS の `ClientboundSetPassengersPacket` を用いて追従させます。
4. プレイヤー退出では、その時点で搭乗中の車両の summoner が退出者と一致する場合だけ車両を終了します。降車済みの召喚者・他人の車両の乗客の退出は終了条件になりません。車両 ArmorStand のチャンクアンロード・停止処理などでも終了します。所有者がいる場合、アイテムをオンライン所有者のインベントリへ返し、満杯ならガレージへ送ります。所有者のない試乗車両には購入アイテムを返しません。

### 経路ごとの利用・返却条件

- `VehicleMenuCommand.kt` の `/realvehicle` からビルダー GUI を開く経路には `use` 判定がない。両ビルダー GUI の購入・性能カスタムも判定しない。GUI 試乗は `performCommand` で試乗コマンドへ渡すため乗車権限判定を受ける。直接コマンドと GUI の利用条件を同一視しない。
- `BuilderSpawnCommon.kt` は owner が null の場合だけ召喚者ごとの前回試乗を終了し、次の試乗を記録する。車・飛行機の履歴は別。
- 車の `machineset` は対象省略なら owner=null、召喚者=送信者。対象名・方角指定では対象者を owner と summoner の両方にする。6台制限を確認せず、試乗置換にも入らず、終了時には性能設定済みアイテムを返す（`CarBuilder2CommandAdmin.kt`、`EntityLifecycleCommon.kt`）。
- 飛行機の `machineset` は対象指定でも owner=null。対象省略では spawnPlayer も null のため `AircraftBuilderSpawn.spawn` が false を返すが、コマンドは成功表示を送る（`AirCraftBuilderCommandActions.kt`）。

### モデル変換・表示制御

- `SchematicToData.kt` は同じ BlockData の連続ブロックを直方体へ圧縮する。YXZ と XZY の拡張順を試し、表示数の少ない方（同数ならYXZ）を採用する。
- `CarBuilder2Schematic.kt` の車体保存では、スケルトン頭から Wheel、ゾンビ頭から Wheel2、クリーパー頭から HeadLight の offset を生成する（壁付きも対象）。マーカーが存在する種類の offset を全置換し、不在の種類は残す。`CarBuilder2BaseData.kt` の車体読込ではこれらの頭を表示データから除外する。
- 車の `save [size]` は車体マーカーの offset 計算に使い、設定の Size を変更しない。`vehicleSizeLimit` は両ビルダーの `size` コマンドの上側だけを制限し、0・負数を拒否せず、スポーン時にもサイズを検証しない。飛行機の保存時 size は未使用。
- `CarBuilder2SpawnGeometry.kt` は offset のXが負のパーツを左右反転する。位置を `-x - scale.x` とし、Directional・Rotatable の東西と MultipleFacing の東西面を入れ替える。Wheel・Wheel2・HeadLight に使う。
- `CarBuilder2EntityDataParticles.kt` は素材で表示用途を判定する。ライトは3種の FROGLIGHT、LANTERN、SOUL_LANTERN、SEA_LANTERN、END_ROD。車体だけで判定するブレーキは REDSTONE_BLOCK、RED_NETHER_BRICKS とその SLAB/STAIRS、CHISELED_NETHER_BRICKS。ウインカーは ORANGE/YELLOW の TERRACOTTA・SHULKER_BOX で、ローカルXが0以上なら左、それ以外は右。
- イベントモードは通常の明るさ更新、車輪アニメーション、前方 LIGHT ブロック更新を抑止する。走行・音・煙・ライト素材・ブレーキ・ウインカーなどの処理は続く（各 controller / presentation）。
- `NmsMetadataFilterService.kt` は登録済み displayEntityIds のメタデータだけを対象とする。4tick周期の packetTick（0〜3）に対し、Ultra はフィルタなし、High は3、Medium は偶数、Low は0以外でフィルタを試みる。さらに packedItems の文字列表現が15文字より長く、14・15番目が `2,` でない場合だけ破棄する。Bundle 内にも同じ条件を適用する。属性IDを構造的に判定しているわけではない。

### 走行・計測条件

- 飛行機の coastFriction・turnFriction・brakeMultiplier は `VehicleBalanceSettings.kt` で読み込むだけで飛行処理から未参照。`AirCraftVehicle.kt`・`AirVehicle.kt` は固定値・固定式を使う。車の carTurnFriction は `CarVariants.kt` の Normal / Normal_Race だけが参照する。
- MT車の停止中のS入力は後退しない。RへシフトダウンしてWで後退する。クルーズ切替は前進速度0.05以上で、S系の入力で解除する（`CarVehicle.kt`）。飛行機のホットバー5は `(speed.z + 0.5) * -0.005` に速度依存の下降処理も加わるため高度固定ではない（`AircraftBuilderPhysics.kt`）。
- `MileageTracker` の乗車分の精算は運転者 `floor(距離 / 250 × 2)`、同乗者 `floor(距離 / 250)`。両ビルダーが係数1.0で開始する。端数ポイントは持ち越さず、累計距離は別に加算する。ワールド変更と1tickで16m超の移動は距離に加算しない。
- `TimeAttackCommand.kt` の `start N` は開始時刻を1個記録し、`sector 1`〜`sector N` と最後のゴールでN+1区間を計測する。finish は開始時のNを使用し、goal引数は完走判定に使わない。lap は finish の失敗後も再開始を試み、時刻が1個だけの場合は再開始不可。性能コスト変更で TimeData を作り直す。
- コスト区分は0〜50が CP:50、51〜100が CP:100、101〜9999が `(cost / 100 + 1) * 100`（200なら CP:300）。範囲外は CP:Minus。保存できても CP:Minus と自己ベスト表示一覧外の区分は表示されない。コース設置手順は [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-vehicles/operator.md#タイムアタック計測) を参照。

### データ形式と永続化

- 永続データはプラグインのデータフォルダにある YAML と Sponge v3 schematic です。SQLite、外部経済 DB、データ版番号、専用移行処理はありません。
- ビルダーの設定・schematic:
  - `CarBuilder2/<name>/<name>.yml` と `<name>_body.schem` / `<name>_wheel.schem` / `<name>_wheel2.schem` / `<name>_headlight.schem`
  - `AircraftBuilder/<name>/<name>.yml` と `<name>.schem`
  - YAML は owner UUID、サイズ、offset、座席、CarBuilder2 の音・ばね値などを保持します。各既定値は [運営向け資料](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-vehicles/operator.md#車両ごとの設定) を参照。
- `VehicleGarage/<UUID>.yml` は `ItemSize` と 1 始まりのスロット番号に Bukkit の ItemStack を保存します。初期サイズは 54。
- `MileagePoint/<UUID>.yml` は `NowPoint`、`Mileage`、`FirstBonus` を保持します。未設定の `FirstBonus` は false として扱い、ログイン時に初回 1,000 ポイントを付与して true にします。同ファイルに `CarSmoke` の色も保存します。
- `NetworkModeSetting.yml` は UUID ごとの表示更新モード番号を保持し、初期値は 0 (`Ultra`) です。`TimeAttackData/<circuit>/<UUID>.yml` は `CP:<区分>.BEST.Time` と `BEST.Day` を保存します。
- 車両アイテムの種類・性能は CustomModelData と lore で識別されます。表示名に持ち主の名前が入る場合がありますが、スポーン処理はその名前を所有権確認に使いません。購入品の所有者は、スポーン時に使ったプレイヤーになります。
- 通常のポイント増減・購入・カスタム支払いは即時保存せず、退出・停止時に残高と累計距離を保存する。初回ボーナスは参加時に即時保存。ガレージは GUI 終了・退出・停止で保存し、オンライン所有者への自動返却はメモリのみ、オフライン返却は即時保存。ネットワーク設定は停止時だけ保存する。強制停止では未保存の支払い・距離・返却品・モード変更が失われ得る（`MileagePoint.kt`、`VehicleGarageService.kt`、`VehicleMenuCommand.kt`）。
- `CustomYaml.save()` は `IOException` をログに出しますが失敗結果を返しません。呼び出し側で成功メッセージやメモリ更新が続く場合があります。

### 同期・非同期

- GUI、Bukkit イベント、走行タスク、距離計測、パケット tick カウンターは Bukkit scheduler の同期タスクで動きます。走行・距離計測の主な周期は 1 tick、座席への自動搭乗確認は 10 tick ごとです。
- 車両キャッシュ再読込は専用 `Thread` でフォルダと schematic を読み、完了時に scheduler 経由でメインスレッド上のキャッシュを差し替えます。管理コマンドの戻り値は「開始しました」で、完了を待ちません。既存車両の `val baseData` は交換せず、表示エンティティも再生成しません。変更を反映するには車両を終了し、再読込完了後に出し直します（`BaseVehicleEntityList.kt`、両 EntityData）。
- ビルダーの保存コマンドは WorldEdit clipboard を `.schem` へ同期的に書いた後、schematic 読み直しを非同期タスクで行います。完了時にメインスレッドで owner/config を保存し、プレイヤーへ結果を返します。ファイル書き込み例外を囲う処理や、全経路での busy 状態解除はありません。
- プレイヤー接続のパケット channel への handler 追加・削除は Netty event loop 上で実行します。送信済み `ClientboundSetEntityDataPacket` と Bundle 内の同 packet をモード別にフィルタします。

### イベント

- `PlayerJoinEvent` / `PlayerQuitEvent`: ガレージ・ポイント・煙色の読み書き、搭乗中車両の退出、パケット handler の追加・削除。
- `PlayerInteractEvent` / `PlayerInteractAtEntityEvent`: 購入アイテムからのスポーン、車両の座席への搭乗。
- `EntityDamageEvent`: 車両 ArmorStand への攻撃をキャンセルします。CarBuilder2 / AircraftBuilder とも空の運転席への `ENTITY_ATTACK` は車両終了の契機になります。搭乗者の落下・窒息ダメージも共通 listener でキャンセルします。
- `EntitiesUnloadEvent`: 対象車両 ArmorStand のチャンク unload を車両終了として扱います。
- `InventoryClickEvent` / `InventoryDragEvent`: OyasaiVehicles のメニューとガレージの操作を制御します。
- TimeAttack はイベント listener ではなく、コマンドブロックから呼ばれる CommandExecutor として動作します。

### 外部 API・依存

- ビルドは Paperweight Userdev の Purpur development bundle、Kotlin stdlib、FAWE Bukkit API (`compileOnly`) を使います。plugin.yml は `FastAsyncWorldEdit` を `softdepend` として宣言します。
- schematic の保存・読込で WorldEdit API を使います。`WorldEdit.getInstance()` が null の場合にロードの警告・保存の `WorldEdit読み込み失敗` を表示します。WorldEdit クラス自体がない場合のクラス解決エラーは捕捉しておらず、未導入時の警告到達は保証されません。
- CraftBukkit/NMS の `CraftPlayer`、`CraftWorld`、Netty、Minecraft packet を直接使用します。車両の搭乗者同期、ArmorStand の bounding box、表示 packet 制御が対象です。
- Vault 等の経済 API や公開 Java API はありません。ポイント処理は同梱の `MileagePoint` に閉じています。

### テストが保証する範囲

プラグイン内に `src/test/` がなく、OyasaiVehicles 固有の自動テストはありません。コマンド権限、購入・保存、YAML の失敗、車両物理、イベント、チャンク unload、NMS packet の動作はいずれもテストで保証されていません。ビルドが通ることと実ゲームでの動作確認は別です。

### 既知の制限

- `totalEntityLimit` は設定キー名をそのまま権限名として `hasPermission` で調べます。同梱 `default: 1000` は既定上限として特別扱いされず、どの設定キーにも権限一致しない場合は 0 を返します。スポーン対象プレイヤーが OP の場合はこの上限判定を迂回します。
- `Body.Rotate` は AircraftBuilder の情報表示・設定 getter/setter に存在しますが、現行コードでは車体スポーン処理から参照されません。
- `/realvehicle admin reload vehicles` は非同期でキャッシュを差し替えます。読み込み失敗、同時編集・削除との競合を示す利用者向け完了状態はありません。
- YAML 保存失敗はログのみで、ゲーム内処理を巻き戻しません。schematic の保存例外は呼び出し側で処理されず、非同期完了処理に到達しない場合があります。`BuilderCommandBase.kt` は busy 解除を完了処理の末尾で行うため、書込・非同期読込等で例外になると同じプレイヤーの同じビルダーで保存が拒否され続ける場合があります。busy はプレイヤー UUID 単位で、車両名を変えても回避できません。
- `/cbmenu <name>` / `/acmenu <name>` の試乗 helper はスポーン関数の成否にかかわらず成功文言を送るため、設計上限メッセージと成功文言が同時に見える場合があります。
- 総合メニューには「統合版は非対応」と表示します。実機での互換性確認は未実施です。
- 本資料と他の既存付属資料の調査時点で、車両プロジェクトの別仕様書は見つかっていません。個人用の試作・退避・未整理ログを公開資料へ混在させないでください。

## 判断の記録

- 2026-10-13: 外部レビューの修正・追記要求を該当コードと呼び出し元で照合し、権限の経路差、返却・保存条件、未参照設定、制作・計測条件を3文書へ反映した。静的確認であり、ゲーム内操作、強制停止による復旧、WorldEdit未導入時の実際の例外、NMSのバージョン互換性は未確認。
