---
title: "CitiesSkyMine — 都市データ配置・建築支援"
status: active
source_of_truth: "plugins/CitiesSkyMine/"
related_paths:
  - packages/oyasai-plugins.nix
  - docs/Projects/cities-sky-mine/specs/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
source: plugins/CitiesSkyMine/（コードから作成。レビュー指摘をコードと再照合。ゲーム内での確認は未実施）
---

# CitiesSkyMine

圧縮した建物データの配置と、道路・交差点・外壁・建築部品の生成を行うプラグイン。2026-10-12 にソース・設定・テストを照合し、2026-10-13 に文書レビューの指摘箇所をコードと再照合した仕様です。ゲーム内での確認と、この作業でのビルド・テスト実行は未実施です。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/cities-sky-mine/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/CitiesSkyMine/` |
| 主要コード | `src/main/kotlin/icu/oyasai/citiesskymine/`。`Main.kt`（登録・セッション）、`command/CitiesSkyMineCommand.kt`（ルーティング）、`access/CsmAccessController.kt`（権限）、各機能ディレクトリの `*Command.kt` |
| 定義・既定値 | `src/main/resources/plugin.yml`・`config.yml`。paper-plugin.yml はない |
| 保存・FAWE | `storage/PlayerDataStore.kt`、`worldedit/CsmEditSession.kt`・`FaweUndo.kt` |
| テスト | `src/test/kotlin/icu/oyasai/citiesskymine/`。登録名、自然群衆の配置不変条件、選択輪郭の距離切り詰め・体積上限を検証 |
| ビルド | `nix develop --command gradle :plugins:CitiesSkyMine:build`（`CitiesSkyMine.jar`）。コンパイルだけなら `:plugins:CitiesSkyMine:compileKotlin`、テストは `:plugins:CitiesSkyMine:test` |
| Nix package | `packages/oyasai-plugins.nix` がプラグインフォルダを検出し `citiesskymine` を公開 |
| 仕様・規約入口 | [specs/README.md](specs/README.md)。コマンド変更前に [command-conventions.md](specs/command-conventions.md)、内部変更前に [implementation-conventions.md](specs/implementation-conventions.md) |
| 関連資料 | ローカル検証は非公開リポジトリ oyasaiserver/docs の `Knowledge/local-server.md` |

## 技術仕様

### 構成

plugin.yml の名前は CitiesSkyMine、main は `icu.oyasai.citiesskymine.Main`、version は0.2.0、api-version は1.21。FastAsyncWorldEdit に depend、LuckPerms・TAB に softdepend。`build.gradle.kts` は Purpur・FAWE Bukkit・TAB・LuckPerms API を compileOnly、Kotlin stdlib を implementation とする。ルート Gradle が JUnit5 と ShadowJar を設定し、バージョン・classifier なしの jar を作る。宣言だけでは特定サーバーバージョンとの実動作互換性は保証しない。

| 機能 | 主要な構成・処理 |
|---|---|
| 道路・交差点 | `road/`。通過点→中心線→道路断面、交差点は腕・中央ディスク・腕間の歩道 |
| 外壁 | `facade/`。固定パレットの手続き生成、または専用schemからベイを繰り返す |
| payload | `payload/PayloadCommand.kt`。文字列復元→柱データ→中空化→回転・アンカー→配置 |
| 部品・複製 | `window/`・`slabstairs/`・`columns/`・`stack/`。配置計画または選択からのコピー |
| 接続解除 | `unconnect/`。`/csm unconnect`・`/.unconnect` で直方体選択内の接続状態を解除 |
| 群衆 | `crowd/`。純粋な配置計算、ブロック／マネキン、頭texturesの登録・走査 |
| 雲・曲線 | `cloud/`（ノイズ）、`bezier/`（de Casteljau と線・球・板のラスタライズ） |
| 設定・選択・プリセット | `config/`・`selection/`・`preset/`。個人GUI、サーバー設定、選択保存、許可したブラシコマンドの再実行 |
| デバッグ棒・HUD | `debugstick/`（状態取得・直接変更）、`hud/`（WorldEdit状態・入力文字列の表示） |
| 共通 | `util/CuboidSelection.kt`（選択・軸・座標）、`MessageUtil.kt`（MiniMessage）、`shared/ArgSuggest.kt`（補完用プレースホルダ） |

### 起動・コマンドの流れ

`onEnable` は既定設定保存→FAWE の検出→個人データ・権限・HUD・旧デバッグ棒データ読込→ハンドラ作成→`bind` による25コマンド登録→イベント・定期処理の開始。`bind` は見つからないコマンドを例外にせずスキップする。`/csm` とショートカットは同じハンドラを共有する。HUD/SUI は専用コマンドで、統合ルートにはない。

統合ルートは多くの機能で追加の権限チェックを行い、各ハンドラでも確認する。`load`・`load64` は先頭を落とさず委譲、crowd の heads は crowd の追加判定を飛ばし、設定編集は固定 admin 判定へ委譲する。payload のヘルプ・undo案内・clear は直接ショートカットでは通常の権限判定なし（clear はプレイヤー限定）だが、統合 payload 経由は追加判定を受ける。

ロールの継承は訪問中の集合で循環を止める。OP・旧権限 bypass は非プレイヤー一覧より先に評価する。`access.enabled=false` は全許可ではなく旧権限だけへ切り替える。設定編集、HUD、SUI はこのロール判定に従わない。詳細と全既定は operator.md。

### 生成と取り消し

`CsmEditSession.run` は world と（あれば）actor を指定して EditSession を作り、edit が true なら `LocalSession.remember(editSession)` → `Operations.complete(editSession.commit())` を行い、最後に close する。`changed` は編集ラムダの戻り値で、実際に変更されたブロック数の照合ではない。
`FaweUndo.remember` は例外を警告して false を返す。配置を止めたり巻き戻したりしない。編集途中・commit の例外に対する一括復旧はない。

- 道路は0.4ブロック間隔で直線・クロソイド入り／円弧／クロソイド出しをサンプルする。高さは最寄りの通過点区間へ投影して補間。道路幅ごとのラインを格子追跡し、白線→車道・歩道→除いた角の補填の順で設置する。ベジェとは別の計算である。
- 白線スムージングは設定した階段素材と同じIDの既存ブロックだけを対象にし、facing・shape・half を更新、水没を解除する。path cache があれば dirty の確認なしで使用する。
- 交差点の断面は `Main.getSession(player).settings` を共有する。`IntersectionSession.settings` は定義されているが生成には使わない。
- 柱は希望間隔の候補を距離・対称性などで採点し、最初の候補を設置する。本数指定は余白を均等配分。`-s` でも配置計画まで作るが量制限は確認しない。
- stack は同じ EditSession で順次 `getFullBlock(src)` を読み、dst のIDでスキップを判定する。元の選択のスナップショットではないため、重複領域は先の書込みを読むことがある。
- 一般スキマティックは ClipboardHolder のY回転を使い、空気無視を指定でき、entities・biomes はコピーしない。ファサードは別の専用読込で、固定座標・寸法を切り出し、`getBlock` の状態だけを座標変換して置く（NBT・状態の向きの回転は行わない）。
- 手続きファサードは1ブロックごとの set の例外を握りつぶすため、未設置があっても生成完了と表示し得る。専用schemはパスだけをキーに1件キャッシュし、同パスのファイルを差し替えても読み直さない。config reload もキャッシュを消さない。

### 接続解除

`/csm unconnect`（短縮 `/.unconnect`）は `selectedCuboid` で取得した直方体選択を走査する。`unconnect/UnconnectBlocks.kt` の純関数は入力の `BlockData` を複製し、フェンス・板ガラス・鉄格子の全許可方向、チョルスプラントの上下を含む全方向を false にする。壁は東西南北の height を `NONE`、up を true にする。水没など他の状態は保持し、フェンスゲート・つる・キノコブロック・スカルクの脈や変更不要の状態は対象外。

走査前に選択範囲の総ブロック数を制限し、変更が必要なブロックだけを `CsmEditSession.run` の `EditSession.setBlock` で書き戻す。成功した書き込み数を通知し、0件は情報表示。取り消しは FAWE の `//undo`。物理更新を起こさないため外した状態は保たれるが、隣のブロックを後から置く・壊すとバニラが再計算して接続が戻ることがある。

### データ形式と永続化

個人データは `player-data/<UUID>.yml` に遅延ロードしてキャッシュする。`set`・`setMany` でメモリ変更後すぐ同期保存し、停止時にも全キャッシュを保存する。保存例外は警告だけで呼び出し元へ返さず、変更も巻き戻さない。選択の保存では points の旧項目削除と他項目の更新で2回保存するため、原子的な更新ではない。

| データ | 形式・寿命 |
|---|---|
| 道路・交差点・窓・payload の省略値 | 個人YAMLの `road.*`・`intersection.*`・`window.*`・`payload.*` |
| 選択 | `selection.named.<正規化名>`・`current`・`previous`。ワールドUUIDと名前、selectorクラス名、pos1/pos2、point-count、pointsの座標。復元はUUID→名前の順にワールド解決。Polygonal2D・Convex/Polyhedral以外はCuboidへ復元 |
| HUD/SUI | `hud.mode`・`max-value-length`・`show-selection`、gmask・手持ち素材ごとのbrush/maskの入力文字列とクラス名、`sui.enabled`。表示用文字列を保存するだけでFAWEの設定そのものを再実行しない |
| デバッグ棒 | `debug-stick.selected.<namespace>.<block>`。旧 `debug-stick-memory.yml` の players を起動時に不足分だけ移す。永続化offでも旧移行・過去データ参照は行う |
| ブラシ | `brush-presets/<UUID>.yml` の `presets.<小文字名>` に name・command・mask・gmask。都度読み込み、保存例外を独自に捕捉しない |
| 頭 | `crowd-heads.yml` の `heads.<UUID>` に uuid・name・value・signature・updated-at。UUIDなしtexturesは文字列から名前UUIDを生成。起動時のYAMLをメモリで共有 |
| 作業中の点・中心・payload片 | UUIDごとのメモリ。道路・交差点・ベジェは退出で削除せず、停止時に消す。payload片は作成時から10分超を次の登録・実行・補完時に除去し、登録で延長しない |
| マネキン | ワールドのエンティティに `crowd_mannequin` のBYTE印。作者IDは記録しない。CSMのYAMLでは管理しない |

payload は `$<length>~<digits>` の Base997、または URL-safe Base64 を復元し zlib 展開する。magic は `CMC` または `CMB` と version byte=1。scale×1000のvarintは読むが配置には使わない。CMC は件数と x/z/y の ZigZag 差分、height のvarint。CMB はbox件数と座標差分、width/depth/heightを読み、水平各セルに柱を展開する。height は端点差なのでブロック数は height+1。末尾余分データ、途中終了、非対応magic、整数範囲外などは復元失敗で通知する。

solid は石レンガ、hollow は6方向の表面を残し、内側床を省き、条件に合う屋根を1段下げ滑らかな石にする。hollow は未配置部分を空気で消さない。元データの重複は元ブロック数に加算、hollow 計算の範囲indexは重複・隣接を統合する。分割片は最大512、結合200000文字、総数不一致は拒否、同番号は上書き、run成功でも消費しない。

### 同期・非同期とイベント

| 処理 | 実行方式 |
|---|---|
| payload、窓、坂、柱、stack、ベジェ、ファサード | コマンド処理内で同期計算・EditSession呼び出し |
| 道路・交差点・白線スムージング | 道路path計算は同期、生成用snapshotを取って非同期編集、通知は同期へ戻す。同じ人の多重実行を防ぐ集合はない |
| 雲 | 非同期計算→同期でオンライン確認・編集・通知。同じ人の実行中タスクを記録 |
| 一般スキマティック | 非同期読込→同期でオンライン確認→非同期貼付→同期で選択・通知。開始時のworld・起点・向きを保持し、貼付開始後は退出による中断なし |
| 頭 add | 非同期 `PlayerProfile.complete(true)`→同期登録・通知 |
| プレビュー | 道路・交差点・ベジェは10 ticks、選択輪郭は12 ticks。輪郭の選択取得と描画は非同期で同じ人の重複実行を抑制 |
| 選択記録 | 20 ticksごとにオンライン全員の完成選択を追跡（selection権限によるフィルタなし） |
| HUD | 常駐ポーリングなし。WorldEditコマンド後1・3・10 ticksで状態再読込、入場5 ticks後、持替え1 tick後 |

Bukkit のイベントは骨の `PlayerInteractEvent`（HAND・右クリック・ROAD権限）、個人GUIの `InventoryClickEvent`、頭更新の `PlayerJoinEvent`、HUDの入退場・持替え・道具操作、選択追跡と輪郭の退出処理。骨のイベントは `ignoreCancelled` を指定せず、キャンセル済みの操作も受ける。GUIはクリックをキャンセルするが、専用の InventoryDragEvent ハンドラはない。HUDの操作監視だけは MONITOR・ignoreCancelled=true。

WorldEdit eventBus の CommandEvent（LATE）で gmask・mask・smask・brush系・none の表示入力を記録する。既存状態との差を再読込で確かめるが、最後の読込では参照が同一でも入力文字列を採用する場合がある。保存済みクラス名が同じでも設定内容の同一性を保証しない。TAB失敗時はBukkit scoreboardへフォールバックし、終了時には以前のboardではなくmainへ戻す。

### 外部 API・依存

WorldEdit/FAWE のセッション、選択、EditSession、ClipboardFormats、ClipboardHolder、mask/tool と eventBus を使う。TAB は scoreboard API、Paper/Bukkit はブロック・パーティクル・マネキン・プロフィール・PDC・YAML、Adventure はメッセージ。デバッグ棒は NMS プロパティをreflectionで取得し、失敗時はBlockData文字列から候補を検証する（数値候補は0〜32と現在値、列挙は固定候補）。全状態・全バージョンの候補を網羅する保証はない。LuckPerms は依存宣言のみで直接API利用なし。

### テストが保証する範囲・既知の制限

- `CommandRegistrationTest`: plugin.yml の25登録名が期待集合と一致し、Mainの登録ソースと一致すること。実際の起動・権限・委譲先の挙動は検証しない。
- `UnconnectBlocksTest`: サーバー不要の BlockData テスト用実装で、対象の全方向解除、壁の柱化、入力不変、水没保持、対象外・再実行時の無変更を検証する。実サーバーでの状態変換・物理更新・undo は検証しない。
- `NaturalCrowdTest`: 指定された5条件で目標数以下、範囲内、セル重複なし、別グループの間隔、同seedの再現性。Bukkit配置・スキン・マネキン・削除は検証しない。
- `WorldEditSelectionPreviewTest`: 近傍だけの線の格子index、体積上限の境界と大きな寸法でのoverflow回避。実パーティクル・権限・非同期の安全性は検証しない。
- コマンド入力、保存失敗・移行、undo、ワールド変更、多重実行、地形・保護プラグインとの相互作用にはテストがない。この作業ではテストを実行していない。
- 生成エラーの全巻き戻し、全コマンド共通の量制限、保護確認、退出時の全ジョブ中断は実装していない。運用上の具体的な限界は operator.md。
- 道路の重複点や異ワールドの点を事前拒否する処理はなく、交差点も中心のworldと現在worldの一致を確認しない。ベジェ生成にはworld一致の検査がある。
- 量制限前に計画を作る処理が多い。payload は展開全体をreadBytesしてから件数を検証し、Base997指定長にも専用上限がない。

## 判断の記録

- 2026-10-13: レビュー指摘を再照合し、payload の L/R は置く側ではなく揃える端、一般schematic は待機キューなし・保存された原点基準と訂正。道路入力失敗の値は未保存だが後の保存操作で永続化され得るため「再起動で必ず消える」とはしない。GUI の持ち物消失は実機未確認の可能性として案内し、ファサードの寸法はベイ指定と full を分けた。メニュー編集資料は CSM の言及がなく、このプロジェクトの入口から外した（撤去の経緯は未確認）。
- 2026-10-13: 古い config の個別上限欠落に注意。Main は JavaPlugin の設定読み込みを継承し、各生成コマンドは明示的な代替値付き getLong を使う。この形式は同梱YAMLの defaults より呼び出し側の代替値を優先する（[Paper の MemorySection](https://github.com/PaperMC/Paper/blob/main/paper-api/src/main/java/org/bukkit/configuration/MemorySection.java)、[JavaPlugin](https://github.com/PaperMC/Paper/blob/main/paper-api/src/main/java/org/bukkit/plugin/java/JavaPlugin.java)）。既存 config と同梱値を比較し、必要な上限キーを明示する。

- 2026-10-12: 旧ユーザー・管理者ガイドを player.md / operator.md に統合。保存先は `player-data/`、payloadは同期、config reloadは再初期化ではないことをコードに合わせて訂正。旧ガイドの「一般未公開」「undo失敗は競合が原因」「再試行で解決」「hollowの性能改善」は、この実装だけでは確認できないため現行仕様の根拠にしない。
- 2026-10-12: specs は設計・規約の記録として保持。規約の推奨を実装済みの挙動と混同しない。implementation-conventions の再接続時の寿命と登録方法を訂正し、柱割り案には実装済み範囲を追記した。セッションmapは退出時に削除されず、直接コマンド登録は現在 `bind` を使う。

## 関連ドキュメント

- [仕様・規約入口](specs/README.md)、[コマンド規約](specs/command-conventions.md)、[実装規約](specs/implementation-conventions.md)、[過去の知見・設計判断](specs/best-practices.md)
- [柱割り・間隔サジェストの設計案](specs/column-layout-assistant.md): 過去の案。柱生成・候補・本数指定・2Dは実装済みだが、案にある永続プレビューの処理はない。
- [キャンバスのブランチ／マージ管理案](specs/canvas-branch-management.md): 未実装。repo・branch・merge コマンドは登録されていない。
