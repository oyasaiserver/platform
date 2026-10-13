---
title: "EntityPose — エンティティ姿勢・配置編集"
status: active
source: "plugins/EntityPose/（コードから作成。ゲーム内での確認は未実施）"
source_of_truth: "plugins/EntityPose/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-plugin-registry/package.nix
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# EntityPose

アーマースタンドなどのエンティティを出して姿勢・向き・位置・スケールを調整し、範囲内のエンティティをコピー、貼り付け、削除する建築支援プラグイン。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/entity-pose/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/EntityPose/` |
| 主要コード | `EntityPose.kt`（初期化・イベント登録）、`EntityCommands.kt`（`/ep`）、`EntityClick.kt`（エンティティ棒と設定画面）、`EntityCopyClick.kt`（範囲選択）、`commands/EntityCopy.kt`・`commands/EntityPaste.kt`（コピー形式と複製） |
| テスト | `src/test/kotlin/me/ankokunsan/entityPose/EntityTeamEntryCleanupListenerTest.kt`。スコアボードのエントリをエンティティ削除時に消すかどうかの判定だけをテストする |
| ビルド | `nix develop --command gradle :plugins:EntityPose:build`。`plugins/EntityPose/build.gradle.kts` は Purpur API をコンパイル時とテスト時に使う |
| Nix package | `packages/oyasai-plugins.nix` が Gradle ビルド済みプラグインを集め、ディレクトリ名を小文字にした `entitypose` 属性を公開する。`packages/oyasai-plugin-registry/package.nix` がその属性をregistryへ加え、`packages/oyasai-minecraft-main.nix` がPaper向け一覧で選択する |

## 技術仕様

### 構成

- `src/main/resources/plugin.yml` を使う Bukkit/Paper プラグイン。名前は `EntityPose`、メインクラスは `me.ankokunsan.entityPose.EntityPose`、`api-version` は `1.21`。`paper-plugin.yml` や設定ファイルはない。
- `/ep` に `EntityCommands` を登録し、`EntityClick`、`GUIClick`、`EntityCopyClick`、`EntityTeamEntryCleanupListener` をイベントリスナーとして登録する。
- `Bou` と `CopyWand` が道具を作り、アイテムの Persistent Data Container の印で識別する。`ChooseGUi` は生成・設定画面、`FollowEntity` はプレビューの追従、`AirBlock` は照準表示と一時足場を担当する。

### コマンド・権限

- `plugin.yml` の `/ep` は `entitypose_arrange` を必要とし、権限の既定値は `op`。`EntityCommands.onCommand` もサブコマンド実行前にプレイヤーと権限を確認する。
- サブコマンドは `stick/st`、`wand/wa`、`info/in`、`infoset/ins`、`scale/sc`、`kakudo/ka`、`zahyo/za`、`copy/co`、`paste/pa`、`cut/cu`、`clear/cl`、`hojo/ho`。
- コンソール等のプレイヤー以外の送信者は、メッセージを返さず終了する。管理用の別コマンドはない。
- 設定・スポーンGUIの一部クリックハンドラは権限を再確認しない。コマンド実行時の確認とGUI操作中の確認は同じではない。

### 主要な処理の流れ

1. `/ep stick` はBreeze Rodに識別印を付けて渡す。ブロック左クリックで生成GUIを開き、選択後 `FollowEntity.start` がプレイヤーの現在位置にプレビューを作る。その後1 tickごとに目の位置から視線方向へ2.5ブロック進んだ位置へ追従させ、X/Zはブロック中心、Yは整数座標、プレイヤーを向くyawは45度刻み、pitchは0に補正する。右クリックで `FollowEntity.stop` を呼び、追従を止める。
2. エンティティ棒で対象を左クリックすると、そのエンティティ種別に対する部位・操作を循環させる。右クリックで姿勢、yaw、pitch、座位状態、または座標を変更する。角度刻みの初期値は1度、移動量は1マス。しゃがみ操作は選択を逆送り、角度・座標の変更方向も反転する。
3. `/ep info` と `/ep infoset` は視線から約3ブロックの対象を ray trace する。コマンドでの情報・スケール処理と設定GUIを開く時点ではプレイヤーやAI有効な対象を拒否する。個別設定GUIのクリックは本人以外を再度 ray trace し、プレイヤー・AI・権限を再確認しない。一括設定GUIのクリックは視線先が選択一覧に含まれる場合に、その一覧の有効な対象へ適用する。
4. Copy Wandの左クリックは対象のbounding box最小点をpos1、右クリックは最大点をpos2にする。両点が揃うと、現在のワールドから範囲を検索し、プレイヤー以外かつ `LivingEntity` でAI無効の対象を選ぶ。境界は `BoundingBox.expand(0.2)` で広げる。端点確定・更新時に選択一覧を保存し、copy時は有効性だけを確認する。後から範囲へ入った対象は追加せず、範囲外へ移動した有効な対象は残る。
5. `/ep copy` は選択対象をプレイヤーがいるブロック位置からの相対座標で `EntityCopyData` に写し、プレイヤーUUIDごとのメモリ上のクリップボードへ保存する。`/ep paste` は実行時のプレイヤーのワールドで、そのプレイヤーがいるブロック原点にoffsetを加えて新規生成する。プレイヤーの向きで配置やyaw/pitchを回転しない。`/ep cut` は有効な選択対象を削除し、範囲選択とハイライトを解除する。

- 棒の持ち替え操作は角度GUI、しゃがみ＋持ち替えは移動量GUI。捨てる操作は設定GUIを開いてキャンセルし、しゃがんで捨てる場合は通す。Copy Wandの持ち替えは `activeselection` がある場合だけ選択解除し、片端だけの解除には `/ep clear` が必要（`EntityClick.kt`、`EntityCopyClick.kt`、`EntityCommands.kt`）。
- 腕ありのスタンドへ道具以外のアイテムを持ってしゃがみ右クリックすると、権限とITEMLOCKを確認して左手へ1個装着する。旧装備は返却し、インベントリに入らない分は自然ドロップする（`EntityClick.offhandItem`）。
- 一括設定GUIの重力・底板・ITEMLOCKは全対象がスタンドの場合だけ表示し、懐き項目はない。ON/OFF項目は全てONなら全てOFF、それ以外は全てONに統一する。スケールは各対象の現在値を増減する（`ChooseGUi.openAllSettingGUI`、`GUIClick.onALLSettingClick`）。

### データ形式と永続化

- ディスク上に独自のDB、設定ファイル、コピー用ファイルは作らない。
- 道具・GUIの識別はアイテムPDCの byte/string/double 値で行う。`EntityPose` はエンティティPDCにダメージ無効、アイテムロック、アレンジロック、死亡時ドロップ抑制などの印を付ける。プレビュー確定（`FollowEntity.stop`）とPasteはLivingEntityへDEATH_KEYを付け、死亡イベントで装備を含むドロップと経験値を空にする。エンティティの姿勢・属性・装備はBukkit APIで直接変更する。
- `/ep copy` の `EntityCopyData` は `EntityType`、相対 `Vector`、yaw/pitch、いくつかの真偽値、スケール、種類別variant、アーマースタンドの装備・各部位 `EulerAngle` を持つKotlinデータクラス。ファイルやNBT文字列への独自シリアライズはない。
- 空の範囲選択リストも存在するため、対象0体で `/ep copy` は0体コピーを報告し、`/ep paste` も0体を処理して完了メッセージを出す。`/ep cut` はコピー済みクリップボードを更新しない。
- クリップボード、範囲の座標・対象、現在の刻み、部位選択、足場モード、プレビューのタスクはメモリ上にある。期限切れ処理はない。ログアウト時に範囲と刻み・部位選択は消えるが、クリップボードと足場モードは消えない。サーバープロセスの再起動後、メモリ状態は復元されない。プラグインだけを再読み込みした場合は未確認。
- エンティティ棒で右クリック編集した対象は `isPersistent = true` にされる。確定したプレビューも永続化される。Pasteではこのプロパティを明示設定していない。ワールド保存を含む実機での永続性確認は未実施。
- 反転表示にはメインスコアボードの `animal_things_hide_name` チームを使う。`EntityRemoveEvent` ではUNLOAD以外の削除原因でUUIDエントリを除去する。チャンクUNLOADでは残し、再ロード後の表示状態に使う。

### 同期・非同期

- Bukkitコマンド・イベントと `runTaskTimer` によるタスクを使用する。`FollowEntity` は1 tickごと、エンティティ照準表示は2 tickごと、範囲ハイライトは10 tickごと、一時足場の距離確認は20 tickごとに実行する。
- 非同期タスクやDB executorはない。各スケジュール処理はBukkitの同期スケジューラに登録される。

### イベント

- `EntityDamageByEntityEvent`、`PlayerInteractAtEntityEvent`、`PlayerInteractEvent`、`PlayerArmorStandManipulateEvent`、`PlayerSwapHandItemsEvent`、`PlayerItemHeldEvent`、`PlayerDropItemEvent`、`PlayerQuitEvent`、`EntityDamageEvent`、`EntityDeathEvent`、`EntityRemoveEvent`、`InventoryClickEvent`、`CraftItemEvent` を処理する。
- ダメージ無効の印があるエンティティへのダメージをキャンセルし、死亡時ドロップ抑制の印がある場合はドロップと経験値を空にする。エンティティ棒はアーマースタンドの装備操作やクラフトも制御する。
- 多くのイベントハンドラは事前キャンセル状態を無視して動作しうる（`ignoreCancelled = true` を指定していない）。他プラグインが先にキャンセルした場合の統合保証はない。

### 外部API・依存

- `build.gradle.kts` では `libs.purpur.api` のみをcompileOnly/testImplementationに指定する。`plugin.yml` に `depend` / `softdepend` はない。
- 他プラグイン向けAPIや領域保護・権限領域との連携は実装していない。Bukkit/Paper APIとメインスコアボードを利用する。
- 選択GUIのアイコンは `CustomHead` がBukkit PlayerProfileへ固定スキンURLを設定して作る。例外はスタックトレースを出し、処理を続ける。実環境でのテクスチャ表示は未確認。

### テストが保証する範囲

- テストは `EntityTeamEntryCleanupListenerTest` の1件だけ。`EntityRemoveEvent.Cause.UNLOAD` ではチームエントリを削除せず、それ以外の `PLUGIN` では削除する判定を確認する。
- コマンド権限、イベントのキャンセル、GUI操作、範囲選択、コピー・貼り付け・削除、PDCの保存、足場、スコアボードとの実連携はテストされていない。

### 既知の制限

- Copy/Pasteは全属性の複製ではない。Pasteはコピー時の通常のcustom nameを設定し直さず、Dinnerbone反転だけを再設定する。透明はArmorStandだけ保存・復元し、動物の透明は失われる。子供かどうかと懐きは復元するが、年齢固定と所有者はコピー形式に含まれず復元しない。生成GUIの子オオカミ・子ネコはageLockを有効にするためPasteと差がある（`GUIClick.kt`、`EntityCopyData.kt`、`commands/EntityCopy.kt`、`commands/EntityPaste.kt`）。
- 上下反転ONはcustomNameをDinnerboneに置換し、OFFはnullにする。元の名前は退避・復元しない（`EntityClick.kt` の `EntiPart.HAN`）。
- 道具を持つスロットへの切替で始まる照準表示は約5ブロック先のLivingEntity（Player以外）の `isGlowing` を直接変更する。個人表示ではなく、元の発光を退避せずfalseへ戻すため、複数利用者や他機能と干渉しうる（`EntityClick.onHeldstick`、`AirBlock.startglowing`）。
- 選択座標にワールド情報がなく、プレイヤーが別ワールドへ移動しても選択は自動解除されない。GUIの操作対象も開いた時のエンティティではなく、クリック時の視線先で再検索する。
- 追従中にログアウトすると `PlayerQuitEvent` がプレビューをstopし、コード上はLivingEntityを永続化して残す。キャンセル用コマンドはない。
- `ARRANGELOCK` は全操作を遮断する保護機能ではない。スケール、設定GUI、コピー、cut等を一律に制限しない。領域保護や他プラグインのルールも照会しない。
- 個別設定GUIの開始時にはプレイヤーを拒否するが、設定クリック時のray traceは操作プレイヤー本人以外を対象にし、対象が他プレイヤーでも除外せず、AIと権限も再確認しない。権限を持つ利用者が画面を開いた後、別プレイヤーを見ながら設定をクリックすると、そのプレイヤーのPDC等を変更する経路がある。
- 一時足場は設置時に空気だった位置へガラスを置き、除去時にはメタデータが残っていれば空気にする。設置後のブロック変更を保護しない。OFFはenabledPlayersから外すだけで既存ガラスを即時撤去しない。停止時の一括撤去もない（`AirBlock.setStatus`、`EntityPose.onDisable`）。除去タスクはワールド一致を確認せずdistanceを計算してから距離・オフライン条件を判定する。ワールド移動時の例外・足場残留は実機で未検証。
