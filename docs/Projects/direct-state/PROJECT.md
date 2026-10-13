---
title: "DirectState — ブロック状態編集"
status: active
source_of_truth: "plugins/DirectState/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# DirectState

ブロックの形・状態・素材をゲーム内で直接編集し、編集後の周辺更新を短時間抑えるプラグイン。

- 使い方: [プレイヤー向け](player.md) / [運営向け](operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/DirectState/` |
| 主要コード | `DirectState.kt`（ライフサイクルと結線）、`command/DirectStateCommand.kt`（コマンド・権限分岐）、`edit/EditInteractionListener.kt`（クリック操作）、`edit/BlockEditService.kt`（変更適用・ログ集約）、`edit/hand/BlockStateEditor.kt`（ブロック固有状態）、`edit/shape/ShapeEditor.kt` と `edit/hold/HoldEditor.kt`（形状編集）、`edit/replace/BlockReplacement.kt`（素材置換）、`update/UpdateMode.kt` と `update/ForcePlacement.kt`（更新抑制・強制配置）、`settings/PlayerSettingsStore.kt`（SQLite）、`integration/`（CoreProtect・WorldGuard・ブロックエンティティ） |
| テスト | `plugins/DirectState/src/test/` は存在せず、自動テストはない。コマンド、権限、イベント、SQLite、編集、連携の挙動を保証するテストはない |
| ビルド | `nix develop --command gradle :plugins:DirectState:build`（Gradle サブプロジェクト `:plugins:DirectState`） |
| Nix package | `packages/oyasai-plugins.nix` が `plugins/` の各サブプロジェクト JAR を収集し、ディレクトリ名の小文字化による `directstate` 属性を公開する。`packages/oyasai-minecraft-main.nix` の Paper 26.2 構成に含まれる |

## 技術仕様

### 構成と起動

- `plugin.yml` が `DirectState` と `/directstate`（別名 `/ds`、`/dsh`、`/dsr`、`/dsu`）を宣言する。`paper-plugin.yml` はない。API version は `26.2`。
- `onLoad` で WorldGuard があれば領域 StateFlag を登録する。`onEnable` では `users.db` を読み、各編集器・更新抑制器・任意ログ連携を組み立ててイベントとコマンドを登録し、毎tickの編集ログ・ホールド編集処理を開始する。
- イベント登録は編集操作リスナーを UpdateMode より先に行う。UpdateMode は強制配置リスナーも登録する。
- `onDisable` では編集ログ、保留中のブロックエンティティ変更、ホールド状態、更新ガード、ボタン復帰予約を処理し、設定 DB を閉じる。

### 主要な処理の流れ

1. `/ds` コマンドがプレイヤー設定を表示・変更する。個人設定は UUID ごとに読み書きされる。
2. `PlayerInteractEvent` を編集リスナーが受け、編集棒、素手編集、手持ちブロックの置換のどれかを選ぶ。編集操作では視線方向へ6ブロックの ray trace を行い、レイの対象がクリックイベントの対象ブロックと一致する場合だけ処理する。
3. 素手編集は形状、ブロック固有状態、共通の成長・点灯・通電・水量、材質切替の順に試し、成立した最初の編集を適用する。シンプル棒と素手では `ShapeEditor`、ホールド棒ではtickごとのドラッグ計算を使う。
4. 置換では手持ちブロックを目標素材としてファミリーを解決し、受理可能な BlockData 状態を引き継ぐ。解決後の置換先素材が対象と同一なら、状態変換を試す前に終了する。
5. 素手・棒・Replace の直接編集は `BlockEditService.apply` に集約する。重複座標と無変更を除き、UpdateMode の事前ガード、BlockData／BlockEntity 反映、CoreProtect 用ログ保留、音と ActionBar 表示を行う。強制配置は別経路で、`ForcePlacement` が直接仮配置して配置イベントを発火する。共通サービスのログ集約・ActionBar 表示を通らず、CoreProtect も配置イベントの監視に委ねる。

### 編集方式と対象

- `ShapeEditor` は壁、フェンス、板ガラス、および実在する材質ファミリーの Full Block／Slab／Stairs を扱う。シンプル棒は右クリックで追加、左クリックで削除。素手編集ではクリック区画を切り替える。
- `HoldEditor` は Fence、GlassPane、Slab、Wall、Stairs を対象にし、視線の固定平面上でのドラッグ量から状態を計算する。セッションはプレイヤー UUID ごとにメモリ保持し、同じブロックを別プレイヤーが掴んでいる間はロックする。プレイヤー、ワールド、道具、チャンク、開始時の位置、外部変更を毎tick確認する。
- `BlockStateEditor` と `HandMaterials` は、向き・接続・開閉・成長・点灯・通電・水量・材質バリアントなど、コードに列挙した状態を扱う。全ブロックの任意 BlockData を編集する汎用 UI ではない。具体的な打点と操作一覧は [player.md](player.md#ブロックごとの操作) を参照。
- `HandEditor` は Shape → `BlockStateEditor` → `CommonStateEditor` → `HandMaterials` の順に評価する。固有幾何ルールは最初の一致だけを試し、結果が null なら共通処理へ譲る。共通処理は age → lit → powered → level のうち最初に該当する1項目だけ。Bamboo と Cave Vines は汎用 age から除外し、`HandMaterials.genericExcludedMaterials` に列挙した材質は汎用 lit/powered から除外する。水量は `levelMaterials` の列挙対象だけ。
- 打点の境界は `HandGeometry`／`BlockClick` に集約する。鐘の側面上部は y ≥ 13/16、吊り看板は y ≥ 14/16。原木・成長面の外周判定は面中央から最大軸距離 ≥ 4/16、オブザーバー背面中央は ≤ 2/16、レッドストーンの上面中央は < 3/16。クラフターは姿勢から前面・上面を求め、上面の背面側2頂点と隣接する背面・側面の頂点領域を先に判定する。世界の UP や全頂点を一律に使うわけではない。
- 編集棒の `ToolItems.create(HOLD)` は PDC に加え `CONSUMABLE`・`FOOD` を付けるが、`mark`（コマンドの `set`）は PDC のみ。ホールドは `isHandRaised` を要求する。使用開始から5tickを過ぎても手が上がらない場合、移動距離 ≥ 0.5、視線の開始方向との内積 < 0.25、対象外部変更・権限喪失等で内部終了する。道具を持つ間の破壊と道具の消費は `EditInteractionListener` がキャンセルする。
- BlockData の通常変更は `setBlockData(data, false)` で適用する。キャンドルは Paper が直後に変更を戻すケースに備えて1tick後に再適用する。
- `BlockEntityAccess` は Bell と Enchanting Table の block entity の有無を切り替える。Paper/Purpur の内部クラスをリフレクションで呼び、変更を保留後、チャンクを再送する。

### データ形式と永続化

- 永続化するのはプレイヤー設定だけで、`plugins/DirectState/users.db` の SQLite `player_settings` テーブルに保存する。列は `uuid`（TEXT 主キー）、`hand_enabled`、`update_enabled`、`replacement_enabled`、`type_replacement_mode`（TEXT）、`itemless_modes_disabled`。
- DB は起動時に開き、テーブルがなければ既定列で作る。自動スキーマ移行はない。読み込み時に不正 UUID 行は無視し、未知の `type_replacement_mode` は `OFF` とする。
- ワールド上のブロック変更は BlockData と block entity の状態に直接反映される。独自のブロック状態 DB や編集履歴は持たない。編集棒の種別はアイテムの PersistentDataContainer に保存する。
- 更新ガード、ドラッグ、CoreProtect の保留ログ、ボタン復帰予約、BlockEntity の1tick後反映はメモリ内状態で、サーバー停止時に継続しない。

### 素材置換

- `TypeReplaceMode` は `OFF` → `STRICT` → `COMPATIBLE` → `OFF`。
- `STRICT` は同じ形状 kind の素材ファミリーを検索する。`COMPATIBLE` はこれに加えて wall／fence／pane の相互対応を検索し、接続状態を変換する。
- 解決した素材を取得できない場合は手持ち素材を置換先にする。いずれの方式でも `TypeReplacement.transfer` が置換先 BlockData に受理されるプロパティを個別に保持するため、`OFF` でも受理可能な状態が一部引き継がれる。
- 形状ファミリーとして解決できた場合、同じ素材の相方が見つかる Door と Bed は2ブロックを一緒に置換する。通常 Replace と通常素材へのフォールバックでは相方を追加しない。置換先が現在の素材と同一なら状態変換前に終了する。Replace OFF・一括停止中は Type 設定にかかわらず対象外。直接編集は手持ちの個数を減らさず、ゲームモード限定判定もない。

### 更新抑制と強制配置

- `UpdateMode.enabled` は、権限を持つプレイヤーの個人設定、または WorldGuard の領域ルールのどちらかが有効な場合に成立する。`itemlessModesDisabled` は個人の更新抑制設定だけを無効にし、WorldGuard ルールは無効にしない。
- 編集前に対象座標を root、周囲2ブロック以内の読み込み済み非空気座標を neighbor として `UpdateGuard` へ登録する。既定の寿命は4tick。登録座標について BlockPhysics、破壊、落下ブロック、液体、レッドストーン、ピストン、ディスペンサー、振動、燃焼・延焼、生成・融解・成長、葉の消滅、TNT、物理・閉塞による hanging 破壊などを処理する。
- Update Mode 中の `PHYSICAL` クリックは拒否する。右クリックされた Switch／Openable の一部は BlockData を直接切り替え、Door は相方も同時に変更する。ボタンは木製30tick、その他20tick後に、押下後状態がそのままの場合だけ元へ戻す。
- ガード内の保存状態は、読込済みかつ現在の素材が保存素材と同じで BlockData が変わった場合だけ復元する。空気・別素材は復元しない。ベッド破壊時に消えた相方だけを次tickに戻す処理は別経路。
- 看板の設置直後の編集画面を拒否する。有効なプレイヤー由来の振動・TNT 着火は、ガード座標の有無とは別の条件でも拒否する。
- `ForcePlacement` は通常の配置を優先しつつ、一部の不支持配置を処理する。サバイバル／クリエイティブ限定で、サバイバルの成功時はアイテムを1個消費する。`BlockCanBuildEvent` を呼び、配置状態を仮反映して `BlockPlaceEvent`／`BlockMultiPlaceEvent` を発火する。キャンセルまたは `canBuild` 失敗時は前状態を復元する。高さ、チャンク読込、ワールド境界、スポーン保護、当たり判定、手持ちアイテムの変更も検査する。
- 強制配置は昆布・海草、上下クリックの吊り看板、置換可能ブロックをクリックした看板でも明示的に選ぶ。看板以外の `BlockStateMeta`・`SkullMeta`・`BannerMeta` アイテムは対象外。看板のコピー対象は両面4行・色・発光・ワックスだけで、PDC 全体のコピー処理はない（`ForcePlacement.copySignState`）。
- ガードの寿命は短く、イベントハンドラのない更新は止めない。WorldGuard はプレイヤー位置の `directstate-no-updates` StateFlag のみを使い、編集権限は判定しない。

### 同期・非同期

- コマンド、編集イベント、SQLite のロード・更新、CoreProtect 記録は通常の同期コード経路で実行される。SQLite 用の非同期 executor はない。
- 毎tick、ホールド状態の検証・編集ログ期限・更新ガード期限・ボタン復帰を処理する。BlockEntityAccess は次tickに再確認してチャンク更新を送信する。
- CoreProtect の編集ログは最後の変更から40tick操作がない時点で確定する。同じプレイヤー・ワールド・座標の連続編集を最初の前状態と最後の後状態にまとめる。使用終了・持ち替え・手の交換・ログアウトは `EditInteractionListener.finishEditing` で該当プレイヤーの保留ログを直ちに確定し、プラグイン停止は全員分を確定する。`HoldEditor.tick` の移動・外部変更・権限喪失・視線角度等による終了はセッション削除だけで flush しないため、通常の40tick期限で確定する。

### イベント

- `EditInteractionListener`: `PlayerInteractEvent`、`PlayerStopUsingItemEvent`、`PlayerQuitEvent`、`PlayerItemHeldEvent`、`PlayerSwapHandItemsEvent`、`PlayerItemConsumeEvent`、`BlockBreakEvent`。
- `UpdateMode`: ブロック配置・破壊・物理更新・レッドストーン・液体・ピストン・ディスペンサー・振動・燃焼・延焼・成長・融解・TNT・hanging entity などの Bukkit/Paper イベント。
- 強制配置は合成 `BlockCanBuildEvent` と配置イベントを発火する。その他の直接編集は通常の BlockPlaceEvent／BlockBreakEvent としては送られない。
- 通常の編集操作リスナーはキャンセル済み `PlayerInteractEvent` を無視する。UpdateMode の `PlayerInteractEvent` ハンドラは `ignoreCancelled` を指定せず、`useInteractedBlock == DENY` を確認する。保護プラグインとの互換性を一律に保証しない。

### 外部 API・依存

- `plugin.yml` は CoreProtect、WorldGuard、FastAsyncWorldEdit を `softdepend` とし、SQLite JDBC `org.xerial:sqlite-jdbc:3.53.2.1` をサーバーライブラリに宣言する。
- `build.gradle.kts`: Purpur API、FAWE Bukkit、CoreProtect API、WorldGuard Bukkit/Core を `compileOnly`、Kotlin stdlib を `implementation` とする。CoreProtect と WorldGuard API の依存は transitive ではない。
- **CoreProtect:** API v10 以上を確認する。各 DirectState 直接編集を removal、placement、`DirectState` interaction の3ログとして記録する。記録失敗は最初の一度だけ警告し、編集結果は戻さない。
- **WorldGuard:** `onLoad` で `directstate-no-updates` StateFlag（既定 deny）を登録し、領域ルールから更新抑制の可否だけを受け取る。同名で別種のフラグがある場合は利用できない。登録時の `IllegalStateException` は完全再起動を促す。
- **FastAsyncWorldEdit:** soft dependency と compileOnly API はあるが、DirectState コードから FAWE API を呼び出していない。
- プラグインが他プラグイン向けに公開する独自 API はない。BlockEntityAccess は Paper/Purpur 内部 API をリフレクションで使うため、内部クラス・メソッド変更の影響を受ける。

### テストが保証する範囲

`plugins/DirectState/` にテストソースはなく、コマンド解析、BlockData 変換、権限、イベント、DB、WorldGuard／CoreProtect、Paper/Purpur 内部 API、ゲーム内動作に対する自動保証はない。この資料作成ではビルドとゲーム内確認を実施していない。

### 既知の制限

- 編集対象と状態遷移はコードに列挙されたものに限られる。対応しない BlockData やマテリアルファミリーは編集できない。
- 共通編集はブロック状態を直接変更し、WorldGuard の建築権限や保護プラグインの権限 API を直接照会しない。編集リスナーが無視するキャンセル済み操作はあるが、すべてのイベント経路で保護連携を保証しない。
- UpdateGuard は4tickの局所ガードであり、未登録イベントや期限後の物理更新を防がない。WorldGuard ルールもプレイヤーの現在地だけで評価される。
- 設定 DB は書き込み失敗時の自動再試行・バックアップ・スキーマ移行を持たない。設定変更時の SQLite 例外はコマンド処理へ伝播する。
- ブロック状態の直接編集は配置・破壊イベントとして記録されない。CoreProtect 連携が無効・非対応の場合、DirectState の直接編集ログは作成されない。
- Bell／Enchanting Table の block entity 操作は Paper/Purpur の内部クラスをリフレクションで変更する。サーバー実装の変更や例外時に期待どおり動くかはゲーム内未確認。

## 判断の記録

- 2026-10-13: 3文書の操作・制限・ログ説明を実装と照合して補正。停止は個人設定と領域設定を分け、直接編集と強制配置の消費・イベント・ログ経路を区別した。操作表の打点は `BlockStateEditor` と `HandGeometry`、ホールドは `HoldEditor` と `SlabGesture`／`WallGesture` を根拠とする。ビルド・ゲーム内・外部プラグインとの連携確認は未実施。
